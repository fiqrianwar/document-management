import {
  Table as ShadcnTable,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/primitives";

import { PropsTable } from "./types";

const Table = ({ tableHeader, tableBody }: PropsTable) => {
  return (
    <ShadcnTable>
      <TableHeader className="text-white bg-secondary">
        <TableRow>
          {tableHeader.map((item) => (
            <TableHead key={item}>{item}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {tableBody.map(({ id, cells }) => (
          <TableRow key={id}>
            {cells.map(({ id: cellId, title, onClick }) => (
              <TableCell
                key={cellId}
                onClick={onClick}
                className={onClick ? "cursor-pointer" : ""}
                role={onClick ? "button" : undefined}
                tabIndex={onClick ? 0 : undefined}
              >
                {title}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </ShadcnTable>
  );
};

export default Table;
