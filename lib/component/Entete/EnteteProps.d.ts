/// <reference types="react" />
import { Color } from '../../system/types/color';
import { Font } from '../../system/types/font';
import { Padding } from '../../system/types/padding';
export type EnteteProps = JSX.IntrinsicElements['th'] & {
    textColor?: Color;
    font?: Font;
    padding?: Padding[];
};
