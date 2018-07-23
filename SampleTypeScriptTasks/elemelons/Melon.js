"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Melon = /** @class */ (function () {
    function Melon(weight, melonSort) {
        this.weight = weight;
        this.melonSort = melonSort;
        this.name = this.constructor.name;
    }
    Melon.prototype.toString = function () {
        var MELON = "melon";
        var EMPTY = "";
        var element = this.name.replace(MELON, EMPTY);
        return "Element: " + element + "\nSort: " + this.melonSort + "\n";
    };
    return Melon;
}());
exports.default = Melon;
