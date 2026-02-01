"use client";

import { PageContainer } from "@/components/layout";
import FileExplorerTableList from "./FileExplorerTableList";
import FileExplorerSearchInput from "./FileExplorerSearchInput";
import FileExplorerCTAButton from "./FileExplorerCTAButton";
import { useRef, useState } from "react";
import FileExplorerDialogForm from "./FileExplorerDialogForm";
import { useFetchFileExplorer } from "@/services/fileExplorer/fileExplorer";
import useDebounce from "@/hooks/useDebounce";
import FileExplorerError from "./FileExplorerError";
import Link from "next/link";
import { TypeRef } from "./types";

const FileExplorer = ({ params }: { params?: { folderPath?: string } }) => {
  const paramsFolder = params?.folderPath;

  const [search, setSearch] = useState("");

  const debouncedQuery = useDebounce(search, 300);

  const { data, isLoading, error } = useFetchFileExplorer(
    paramsFolder ? paramsFolder : null,
    debouncedQuery,
  );

  const refModal = useRef<TypeRef>(null!);

  return (
    <PageContainer>
      <div className="p-4">
        <div className="py-5 md:py-14 space-y-4">
          <div className="space-y-4 md:flex justify-between">
            <div className="space-y-4">
              <div>
                <Link href="/">
                  <h1 className="text-xl font-medium cursor-pointer">
                    Documents
                  </h1>
                </Link>
              </div>

              <FileExplorerSearchInput setSearch={setSearch} />
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

          <FileExplorerTableList data={data} isLoading={isLoading} />
        </div>
      </div>

      <FileExplorerDialogForm ref={refModal} />
      <FileExplorerError error={error} />
    </PageContainer>
  );
};

export default FileExplorer;
