/**
 * BgColor,
 * border
 */

import { Border } from "../types/border";
import { Color } from "../types/color";

export type Ligneprops = JSX.IntrinsicElements["tr"] & {
  bgColor?: Color;
  border?: Border;
};
