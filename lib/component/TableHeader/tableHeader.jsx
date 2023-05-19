"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableHeader = void 0;
var react_1 = require("react");
var color_1 = require("../../system/class/color");
var Transform_1 = require("../../system/class/Transform");
var textSize_1 = require("../../system/class/textSize");
var react_2 = __importDefault(require("react"));
var TableHeader = function (_a) {
    var children = _a.children, _b = _a.sizeText, sizeText = _b === void 0 ? 'textBase' : _b, _c = _a.color, color = _c === void 0 ? 'default' : _c, _d = _a.transform, transform = _d === void 0 ? 'normal' : _d;
    return (<react_1.Fragment>
            <thead className={" ".concat(color_1.colorText[color], " ").concat(textSize_1.textSize[sizeText], " ").concat(Transform_1.textTransform[transform], " ")}>
                {children}
            </thead>
        </react_1.Fragment>);
};
exports.TableHeader = TableHeader;
//# sourceMappingURL=tableHeader.jsx.map