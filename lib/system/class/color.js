"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.colorText = exports.colorBackground = void 0;
var palette_json_1 = __importDefault(require("../palette.json"));
var colorBackground = {
    Rose: "bg-".concat(palette_json_1.default.swatches[1].name.toLowerCase().trim()),
    Gray: "bg-".concat(palette_json_1.default.swatches[0].name.toLowerCase().trim()),
    Teaf: "bg-".concat(palette_json_1.default.swatches[2].name.toLowerCase().trim()),
    Zinc: 'bg-zinc-600',
    Gray900: 'bg-gray-900',
    default: 'bg-slate-50',
};
exports.colorBackground = colorBackground;
var colorText = {
    Rose: "text-".concat(palette_json_1.default.swatches[1].name.toLowerCase().trim()),
    Gray: "text-".concat(palette_json_1.default.swatches[0].name.toLowerCase().trim()),
    Teaf: "text-".concat(palette_json_1.default.swatches[2].name.toLowerCase().trim()),
    Zinc: 'bg-zinc-600',
    Gray900: 'text-gray-900',
    default: 'text-slate-50',
};
exports.colorText = colorText;
//# sourceMappingURL=color.js.map