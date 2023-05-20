import { Display } from '../../system/types/display';
import { Font } from '../../system/types/font';

export type LinkProps = JSX.IntrinsicElements['a'] & {
    font?: Font;
    href: string | URL;
    display?: Display | undefined;
};
