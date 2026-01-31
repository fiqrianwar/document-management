"use client";

import { PageContainer } from "@/components/layout";

import FileExplorerTableList from "./FileExplorerTableList";
import FileExplorerSearchInput from "./FileExplorerSearchInput";
import FileExplorerCTAButton from "./FileExplorerCTAButton";
import { FileText, Folder } from "lucide-react";
import { useCallback, useMemo, useRef } from "react";
import FileExplorerDialogForm, { TypeRef } from "./FileExplorerDialogForm";
import { useFetchFileExplorer } from "@/services/fileExplorer/fileExplorer";
import { useRouter } from "next/navigation";

const FileExplorer = ({ params }: { params?: { folderPath?: string } }) => {
  const paramsFolder = params?.folderPath;

  const { data, isLoading, error } = useFetchFileExplorer(
    paramsFolder ? paramsFolder : null,
  );

  const router = useRouter();

  const navigationDirect = useCallback(
    (item: string) => {
      router.push(`/${item}`);
    },
    [router],
  );

  const transformData = useMemo(() => {
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
            title: <span>{new Date(createdAt).toLocaleDateString()}</span>,
          },
        ],
      })) ?? []
    );
  }, [data?.data, navigationDirect]);

  const refModal = useRef<TypeRef>(null!);

  return (
    <PageContainer>
      <div className="p-4">
        <div className="py-5 md:py-14 space-y-4">
          <div className="space-y-4 md:flex justify-between">
            <div className="space-y-4">
              <h1 className="text-xl font-medium">Documents</h1>
              <FileExplorerSearchInput />
            </div>
            <div className="space-y-4 md:flex md:gap-3">
              <FileExplorerCTAButton
                typeCTA="upload-files"
                onClick={() =>
                  refModal.current.handleOpenModal("upload-files", paramsFolder)
                }
              />

              <FileExplorerCTAButton
                typeCTA="add-folder"
                onClick={() =>
                  refModal.current.handleOpenModal("add-folder", paramsFolder)
                }
              />
            </div>
          </div>

          <FileExplorerTableList tableBody={transformData} />
        </div>
      </div>

      <FileExplorerDialogForm ref={refModal} />
    </PageContainer>
  );
};

export default FileExplorer;
