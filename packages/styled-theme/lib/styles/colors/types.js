"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isColorGroup = void 0;
var ColorGroupNames = [
    'white',
    'grey',
    'green',
    'yellow',
    'green',
    'red',
    'blue',
    'orange',
];
function isColorGroup(str) {
    return ColorGroupNames.includes(str);
}
exports.isColorGroup = isColorGroup;
//# sourceMappingURL=types.js.map