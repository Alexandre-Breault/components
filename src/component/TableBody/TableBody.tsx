import { FC, Fragment } from "react";
import { TableBodyProps } from "./tableBodyProps";

const TableBody: FC<TableBodyProps> = ({ children }) => {
  return (
    <Fragment>
      <tbody>{children}</tbody>
    </Fragment>
  );
};
export { TableBody };
