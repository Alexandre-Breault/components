/**
 * padding
 * font
 * textColor
 * whitespace-nowrap
 */

import { Color } from "../types/color";
import { Font } from "../types/font";
import { Padding } from "../types/padding";

export type EnteteProps = JSX.IntrinsicElements["th"] & {
  textColor?: Color;
  font?: Font;
  padding?: Padding[];
};
