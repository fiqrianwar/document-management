import { Table } from "@/components/ui";
import { TResponsesFileExplorer } from "@/services/fileExplorer/type";
import { FileText, Folder } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";

const FileExplorerTableList = ({
  isLoading,
  data,
}: {
  data: TResponsesFileExplorer | undefined;
  isLoading: boolean;
}) => {
  const headerTable = ["Name", "Created by", "Date", "File Size"];

  const router = useRouter();
  const navigationDirect = useCallback(
    (item: string) => {
      router.push(`/${item}`);
    },
    [router],
  );

  const tableBodyData = useMemo(() => {
    return (
      data?.data.map(({ id, createdAt, createdBy, itemTypeFlag, name }) => ({
        id: id,
        cells: [
          {
            id: id,
            title: (
              <div className="flex gap-2 items-center">
                {itemTypeFlag === "F" ? (
                  <Folder color="#f7ac55" />
                ) : (
                  <FileText color="#75a3ff" />
                )}

                <h1>{name}</h1>
              </div>
            ),

            ...(itemTypeFlag === "F"
              ? {
                  onClick: () => {
                    navigationDirect(id);
                  },
                }
              : {}),
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
            title: <span>{itemTypeFlag === "F" ? "-" : "1 KB"}</span>,
          },
        ],
      })) ?? []
    );
  }, [data?.data, navigationDirect]);

  return (
    <div className="shadow-xl my-5">
      <Table
        tableHeader={headerTable}
        tableBody={tableBodyData}
        isLoading={isLoading}
      />
    </div>
  );
};

export default FileExplorerTableList;
