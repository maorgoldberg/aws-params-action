"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigFactory = void 0;
var nullOrEmpty = function (val) { return val === null || val === ''; };
var ConfigFactory = /** @class */ (function () {
    function ConfigFactory(inputFn) {
        this.inputFn = inputFn;
    }
    ConfigFactory.prototype.get = function () {
        var opts = { required: true };
        var rawNames = this.inputFn('names', opts);
        var withDecryption = this.inputFn('withDecryption', opts);
        if (nullOrEmpty(rawNames))
            throw new Error('The names parameter cannot be an empty string');
        if (nullOrEmpty(withDecryption))
            throw new Error('the withDecryption parameter cannot be an empty string');
        return {
            names: rawNames.split(',').map(function (name) { return name.trim(); }),
            withDecryption: withDecryption === 'true' || withDecryption === '1'
        };
    };
    return ConfigFactory;
}());
exports.ConfigFactory = ConfigFactory;
//# sourceMappingURL=ConfigFactory.js.map