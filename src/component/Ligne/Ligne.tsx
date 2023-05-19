import { FC, Fragment } from "react";
import { borderClass } from "../class/border";
import { colorBackground } from "../class/color";

import { Ligneprops } from "./LigneProps";

const Ligne: FC<Ligneprops> = ({
  children,
  className,
  bgColor = "Zinc",
  border = "border-b",
}) => {
  return (
    <Fragment>
      <tr
        className={`${colorBackground[bgColor]} ${borderClass[border]} ${className}`}
      >
        {children}
      </tr>
    </Fragment>
  );
};

export { Ligne };
