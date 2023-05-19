/// <reference types="react" />
import { Color } from '../../system/types/color';
import { Size } from '../../system/types/size';
import { Transform, TextSize } from '../../system/types/text';
export type TableHeaderProps = JSX.IntrinsicElements['thead'] & {
    size?: Size;
    sizeText?: TextSize;
    color?: Color;
    transform?: Transform;
};
