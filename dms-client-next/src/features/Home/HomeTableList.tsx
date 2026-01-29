import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui";

const HomeTableList = () => {
  return (
    <div className="shadow-xl my-5">
      <Table>
        <TableHeader className="text-white bg-secondary">
          <TableRow>
            <TableHead className="w-25">Name</TableHead>
            <TableHead>Created by</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">File Size</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell> <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">1 KB</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default HomeTableList;
