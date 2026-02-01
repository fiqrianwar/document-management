import {
  Table as ShadcnTable,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/primitives";

import { PropsTable } from "./types";
import { SkeletonLoader } from "../SkeltonLoader";
import Link from "next/link";

const Table = ({ tableHeader, tableBody, isLoading }: PropsTable) => {
  const cellLoader = [0, 1, 2, 3, 4, 5, 6];

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
        {isLoading
          ? cellLoader.map((_, index) => (
              <TableRow key={index}>
                <TableCell className="flex gap-3">
                  <SkeletonLoader className="h-5 w-7 bg-gray-300" />
                  <SkeletonLoader className="h-5 w-46 bg-gray-300" />
                </TableCell>
                <TableCell>
                  <SkeletonLoader className="h-5 w-30 bg-gray-300" />
                </TableCell>
                <TableCell>
                  <SkeletonLoader className="h-5 w-26 bg-gray-300" />
                </TableCell>
                <TableCell>
                  <SkeletonLoader className="h-5 w-10 bg-gray-300" />
                </TableCell>
              </TableRow>
            ))
          : tableBody.map(({ id, cells }) => (
              <TableRow key={id}>
                {cells.map(({ id: cellId, title, directionLink }) =>
                  directionLink ? (
                    <TableCell
                      key={cellId}
                      className={directionLink ? "cursor-pointer" : ""}
                    >
                      <Link href={directionLink}>{title}</Link>
                    </TableCell>
                  ) : (
                    <TableCell key={cellId}>{title}</TableCell>
                  ),
                )}
              </TableRow>
            ))}
      </TableBody>
    </ShadcnTable>
  );
};

export default Table;
