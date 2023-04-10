"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutputSetter = void 0;
// type MaskerFn = (key: string) => void
var OutputSetter = /** @class */ (function () {
    function OutputSetter(outputFn) {
        this.outputFn = outputFn;
    }
    OutputSetter.prototype.set = function (params) {
        var _this = this;
        params.forEach(function (param) {
            // this.maskerFn(param.value)
            // process.env['GITHUB_OUTPUT'] = param.name.replace('/', '') + '=' + param.value
            console.log("env name=" + param.name.replace(/\//g, '') + "::" + param.value);
            _this.outputFn(param.name.replace(/\//g, ''), param.value);
        });
    };
    return OutputSetter;
}());
exports.OutputSetter = OutputSetter;
//# sourceMappingURL=OutputSetter.js.map