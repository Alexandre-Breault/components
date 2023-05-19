"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entete = void 0;
var react_1 = require("react");
var color_1 = require("../../system/class/color");
var font_1 = require("../../system/class/font");
var padding_1 = require("../../system/class/padding");
var Entete = function (_a) {
    var children = _a.children, className = _a.className, _b = _a.textColor, textColor = _b === void 0 ? "Gray900" : _b, _c = _a.font, font = _c === void 0 ? "normal" : _c, _d = _a.padding, padding = _d === void 0 ? ["px-0", "py-0"] : _d;
    return (<react_1.Fragment>
      <th className={"".concat(className, " ").concat(color_1.colorText[textColor], " ").concat(font_1.FontClasses[font], " ").concat(padding_1.PaddingClasses[padding[0]], " ").concat(padding_1.PaddingClasses[padding[1]])}>
        {children}
      </th>
    </react_1.Fragment>);
};
exports.Entete = Entete;
//# sourceMappingURL=Entete.jsx.map