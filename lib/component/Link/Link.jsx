"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLink = void 0;
var react_1 = require("react");
var display_1 = require("../../system/class/display");
var font_1 = require("../../system/class/font");
var CLink = function (_a) {
    var children = _a.children, _b = _a.font, font = _b === void 0 ? 'medium' : _b, _c = _a.display, display = _c === void 0 ? 'hidden' : _c;
    return (<react_1.Fragment>
            <a className={"".concat(font_1.FontClasses[font], " ").concat(display_1.displayClasses[display])}>{children}</a>
        </react_1.Fragment>);
};
exports.CLink = CLink;
//# sourceMappingURL=Link.jsx.map