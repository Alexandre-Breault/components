/**
 * w-full
 * text-sm
 * text-left
 * text-gray-600
 */

import { Color } from "../types/color";
import { TextSize } from "../types/text";
import { Width } from "../types/width";

export type TableProps = JSX.IntrinsicElements["table"] & {
  textColor?: Color;
  sizeText?: TextSize;
  width?: Width;
};
