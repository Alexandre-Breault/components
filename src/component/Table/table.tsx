// const Table = (props: TableProps) => {
//   return (
//     <TableBase className='w-full text-sm text-left text-gray-600' {...props}>
//       {props.children}
//     </TableBase>
//   );
// };

import { FC, Fragment } from "react";
import { borderClass } from "../class/border";
import { widthClass } from "../class/with";
import { colorBackground, colorText } from "../class/color";

import { TableProps } from "./TableProps";
import { textSize } from "../class/textSize";

const Table: FC<TableProps> = ({
  children,
  className,
  textColor = "Gray",
  width = "wauto",
  sizeText = "textSm",
}) => {
  return (
    <Fragment>
      <table
        className={`${colorText[textColor]} ${widthClass[width]} ${textSize[sizeText]} ${typeof className === "undefined" ? "" : className}`}
      >
        {children}
      </table>
    </Fragment>
  );
};

export { Table };
