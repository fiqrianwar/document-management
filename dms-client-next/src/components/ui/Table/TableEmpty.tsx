import {
  Table as ShadcnTable,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/primitives";
import { SearchX } from "lucide-react";

const TableEmpty = ({ tableHeader }: { tableHeader: string[] }) => {
  return (
    <>
      <ShadcnTable>
        <TableHeader className="text-white bg-secondary">
          <TableRow>
            {tableHeader.map((item) => (
              <TableHead key={item}>{item}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
      </ShadcnTable>
      <div className="rounded-r-3xl rounded-l-3xl">
        <div className="flex justify-center">
          <SearchX width={125} height={125} className="text-primary" />
        </div>
        <div className="py-4 space-y-2">
          <h1 className="text-xl text-center font-bold">No Results</h1>
          <h1 className="text-base text-center font-medium">
            Sorry, there are no results for this search, Please try another
            please
          </h1>
        </div>
      </div>
    </>
  );
};

export default TableEmpty;
