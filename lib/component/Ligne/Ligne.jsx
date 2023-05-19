"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ligne = void 0;
var react_1 = require("react");
var border_1 = require("../../system/class/border");
var color_1 = require("../../system/class/color");
var Ligne = function (_a) {
    var children = _a.children, className = _a.className, _b = _a.bgColor, bgColor = _b === void 0 ? 'Zinc' : _b, _c = _a.border, border = _c === void 0 ? 'border-b' : _c;
    return (<react_1.Fragment>
            <tr className={"".concat(color_1.colorBackground[bgColor], " ").concat(border_1.borderClass[border], " ").concat(className)}>{children}</tr>
        </react_1.Fragment>);
};
exports.Ligne = Ligne;
//# sourceMappingURL=Ligne.jsx.map