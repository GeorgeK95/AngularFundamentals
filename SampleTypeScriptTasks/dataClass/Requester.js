"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Requester = /** @class */ (function () {
    function Requester(method, uri, version, message) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fulfilled = false;
    }
    return Requester;
}());
exports.default = Requester;
