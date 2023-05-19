/**
 * BgColor,
 * border
 */
/// <reference types="react" />
import { Border } from "../../system/types/border";
import { Color } from '../../system/types/color';
export type Ligneprops = JSX.IntrinsicElements["tr"] & {
    bgColor?: Color;
    border?: Border;
};
