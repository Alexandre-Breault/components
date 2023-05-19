import { Color } from "../types/color";
import { Size } from "../types/size";
import { Transform, TextSize } from "../types/text";

export type TableHeaderProps = JSX.IntrinsicElements["thead"] & {
  size?: Size;
  sizeText?: TextSize;
  color?: Color;
  transform?: Transform;
};
