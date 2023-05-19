import { FC, Fragment } from "react";
import { colorText } from "../class/color";
import { textTransform } from "../class/Transform";
import { textSize } from "../class/textSize";
import { TableHeaderProps } from "./TableHeaderProps";

const TableHeader: FC<TableHeaderProps> = ({
  children,
  sizeText = "textBase",
  color = "default",
  transform = "normal",
}) => {
  return (
    <Fragment>
      <thead
        className={` ${colorText[color]} ${textSize[sizeText]} ${textTransform[transform]} `}
      >
        {children}
      </thead>
    </Fragment>
  );
};

export { TableHeader };
