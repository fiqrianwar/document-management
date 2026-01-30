import { Table } from "@/components/ui";
import { TableCellData } from "@/components/ui/Table/types";

const HomeTableList = ({
  tableBody,
}: {
  tableBody: Array<{ id: string; cells: Array<TableCellData> }>;
}) => {
  const headerTable = ["Name", "Created by", "Date", "File Size"];

  return (
    <div className="shadow-xl my-5">
      <Table tableHeader={headerTable} tableBody={tableBody} />
    </div>
  );
};

export default HomeTableList;
