import { FC, Fragment } from "react";
import { PaddingClasses } from "../class/padding";
import { CelluleProps } from "./CelluleProps";

const Cellule: FC<CelluleProps> = ({
  children,
  className,
  padding = ["px-6", "py-4"],
}) => {
  return (
    <Fragment>
      <td
        className={`${className} ${PaddingClasses[padding[0]]} ${
          PaddingClasses[padding[1]]
        }`}
      >
        {children}
      </td>
    </Fragment>
  );
};

export { Cellule };
