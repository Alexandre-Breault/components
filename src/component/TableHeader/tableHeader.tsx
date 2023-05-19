import { FC, Fragment } from 'react';
import { colorText } from '../../system/class/color';
import { textTransform } from '../../system/class/Transform';
import { textSize } from '../../system/class/textSize';
import { TableHeaderProps } from './TableHeaderProps';

const TableHeader: FC<TableHeaderProps> = ({
    children,
    sizeText = 'textBase',
    color = 'default',
    transform = 'normal',
}) => {
    return (
        <Fragment>
            <thead className={` ${colorText[color]} ${textSize[sizeText]} ${textTransform[transform]} `}>
                {children}
            </thead>
        </Fragment>
    );
};

export { TableHeader };
