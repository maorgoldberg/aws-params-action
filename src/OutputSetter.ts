import { Parameter } from './ParameterFetcher'

type OutputFn = (key: string, value: string) => void
// type MaskerFn = (key: string) => void

class OutputSetter {
  constructor (private outputFn: OutputFn) {
  }

  public set(params: Parameter[]): void {
    params.forEach(param => {
      // this.maskerFn(param.value)
      // process.env['GITHUB_OUTPUT'] = param.name.replace('/', '') + '=' + param.value
      console.log(`env name=${param.name.replace(/\//g, '')}::${param.value}`)
      this.outputFn(param.name.replace(/\//g, ''), param.value)
    })
  }
}

export { OutputSetter }
