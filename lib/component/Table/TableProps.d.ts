/**
 * w-full
 * text-sm
 * text-left
 * text-gray-600
 */
/// <reference types="react" />
import { Color } from '../../system/types/color';
import { TextSize } from '../../system/types/text';
import { Width } from '../../system/types/width';
export type TableProps = JSX.IntrinsicElements['table'] & {
    textColor?: Color;
    sizeText?: TextSize;
    width?: Width;
};
