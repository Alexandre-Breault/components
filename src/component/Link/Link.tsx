import { Fragment, FC } from 'react';
import { displayClasses } from '../../system/class/display';
import { FontClasses } from '../../system/class/font';
import { LinkProps } from './LinkProps';

const CLink: FC<LinkProps> = ({ children, font = 'medium', display = 'hidden' }) => {
    return (
        <Fragment>
            <a className={`${FontClasses[font]} ${displayClasses[display]}`}>{children}</a>
        </Fragment>
    );
};

export { CLink };
