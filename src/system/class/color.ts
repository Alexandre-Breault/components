import { Color } from "../types/color";
import palette from "../../palette.json";

const colorBackground: Record<Color, string> = {
  Rose: `bg-${palette.swatches[1].name.toLowerCase().trim()}`,
  Gray: `bg-${palette.swatches[0].name.toLowerCase().trim()}`,
  Teaf: `bg-${palette.swatches[2].name.toLowerCase().trim()}`,
  Zinc: "bg-zinc-600",
  Gray900: "bg-gray-900",
  default: "bg-slate-50",
};

const colorText: Record<Color, string> = {
  Rose: `text-${palette.swatches[1].name.toLowerCase().trim()}`,
  Gray: `text-${palette.swatches[0].name.toLowerCase().trim()}`,
  Teaf: `text-${palette.swatches[2].name.toLowerCase().trim()}`,
  Zinc: "bg-zinc-600",
  Gray900: "text-gray-900",
  default: "text-slate-50",
};

export { colorBackground, colorText };
