"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = void 0;
var react_1 = require("react");
var with_1 = require("../../system/class/with");
var color_1 = require("../../system/class/color");
var textSize_1 = require("../../system/class/textSize");
var Table = function (_a) {
    var children = _a.children, className = _a.className, _b = _a.textColor, textColor = _b === void 0 ? 'Gray' : _b, _c = _a.width, width = _c === void 0 ? 'wauto' : _c, _d = _a.sizeText, sizeText = _d === void 0 ? 'textSm' : _d;
    return (<react_1.Fragment>
            <table className={"".concat(color_1.colorText[textColor], " ").concat(with_1.widthClass[width], " ").concat(textSize_1.textSize[sizeText], " ").concat(typeof className === 'undefined' ? '' : className)}>
                {children}
            </table>
        </react_1.Fragment>);
};
exports.Table = Table;
//# sourceMappingURL=table.jsx.map