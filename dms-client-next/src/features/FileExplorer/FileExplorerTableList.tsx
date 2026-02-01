import { Table, TableEmpty } from "@/components/ui";
import { ItemTypeFlag } from "@/constants/enum";
import { FileText, Folder } from "lucide-react";
import { useMemo } from "react";
import { PropsFileExplorerTableList } from "./types";

const FileExplorerTableList = ({
  isLoading,
  data,
}: PropsFileExplorerTableList) => {
  const tableHeaders = ["Name", "Created by", "Date", "File Size"];

  const tableBodyData = useMemo(() => {
    if (!data?.data) return [];

    return data.data.map(
      ({ id, createdAt, createdBy, itemTypeFlag, name }) => ({
        id,
        cells: [
          {
            id,
            title: (
              <div className="flex gap-2 items-center">
                {itemTypeFlag === ItemTypeFlag.FOLDERS ? (
                  <Folder color="#f7ac55" />
                ) : (
                  <FileText color="#75a3ff" />
                )}
                <h1>{name}</h1>
              </div>
            ),
            ...(itemTypeFlag === ItemTypeFlag.FOLDERS && {
              directionLink: `/${id}`,
            }),
          },
          {
            id: `${id}-createdBy`,
            title: <span>{createdBy}</span>,
          },
          {
            id: `${id}-createdAt`,
            title: <span>{createdAt}</span>,
          },
          {
            id: `${id}-fileSize`,
            title: (
              <span>
                {itemTypeFlag === ItemTypeFlag.FOLDERS ? "-" : "1 KB"}
              </span>
            ),
          },
        ],
      }),
    );
  }, [data]);

  const hasData = data?.data?.length !== 0;

  return (
    <div className="shadow-xl my-5">
      {hasData ? (
        <Table
          tableHeader={tableHeaders}
          tableBody={tableBodyData}
          isLoading={isLoading}
        />
      ) : (
        <TableEmpty tableHeader={tableHeaders} />
      )}
    </div>
  );
};

export default FileExplorerTableList;
