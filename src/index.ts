import { SSM } from 'aws-sdk'
import { ConfigFactory } from './ConfigFactory'
import { getInput, setOutput } from '@actions/core'
import { ParameterFetcher } from './ParameterFetcher'
import { OutputSetter } from './OutputSetter'
const ssm = new SSM({ apiVersion: '2014-11-06' })
function myOutputFn(name: string, value: string): void {
    const filePath = process.env.GITHUB_OUTPUT || '';
    if (filePath) {
        console.log(`env name=${name.replace('/', '')}::${value}`)
        return
    }
    console.log(`::set-output name=${name.replace('/', '')}::${value}`)
}
const configFactory = new ConfigFactory(getInput)
const parameterFetcher = new ParameterFetcher(ssm)
const outputSetter = new OutputSetter(setOutput)

Promise.resolve()
  .then(() => configFactory.get())
  .then(config => parameterFetcher.fetch(config.names, config.withDecryption))
  .then(params => outputSetter.set(params))
  .catch(console.error)
