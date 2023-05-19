"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cellule = void 0;
var react_1 = require("react");
var padding_1 = require("../../system/class/padding");
var Cellule = function (_a) {
    var children = _a.children, className = _a.className, _b = _a.padding, padding = _b === void 0 ? ['px-6', 'py-4'] : _b;
    return (<react_1.Fragment>
            <td className={"".concat(className, " ").concat(padding_1.PaddingClasses[padding[0]], " ").concat(padding_1.PaddingClasses[padding[1]])}>{children}</td>
        </react_1.Fragment>);
};
exports.Cellule = Cellule;
//# sourceMappingURL=Cellule.jsx.map