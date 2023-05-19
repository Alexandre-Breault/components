import { FC, Fragment } from "react";
import { colorText } from "../class/color";
import { FontClasses } from "../class/font";
import { PaddingClasses } from "../class/padding";
import { EnteteProps } from "./EnteteProps";

const Entete: FC<EnteteProps> = ({
  children,
  className,
  textColor = "Gray900",
  font = "normal",
  padding = ["px-0", "py-0"],
}) => {
  return (
    <Fragment>
      <th
        className={`${className} ${colorText[textColor]} ${FontClasses[font]} ${
          PaddingClasses[padding[0]]
        } ${PaddingClasses[padding[1]]}`}
      >
        {children}
      </th>
    </Fragment>
  );
};

export { Entete };
