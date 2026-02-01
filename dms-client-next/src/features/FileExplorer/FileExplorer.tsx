"use client";

import { useRef } from "react";
import Link from "next/link";

import { PageContainer } from "@/components/layout";
import FileExplorerTableList from "./FileExplorerTableList";
import FileExplorerSearchInput from "./FileExplorerSearchInput";
import FileExplorerCTAButton from "./FileExplorerCTAButton";
import FileExplorerDialogForm from "./FileExplorerDialogForm";
import FileExplorerError from "./FileExplorerError";

import { TypeRef } from "./types";
import { useFileExplorer } from "./hooks/useFileExplorer";

const FileExplorer = ({ params }: { params?: { folderPath?: string } }) => {
  const folderPath = params?.folderPath;

  const { setSearch, data, isLoading, error } = useFileExplorer(folderPath);

  const refModal = useRef<TypeRef>(null);

  const handleOpenModal = (type: "upload-files" | "add-folder") => {
    refModal.current?.handleOpenModal(type, folderPath);
  };

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
                onClick={() => handleOpenModal("upload-files")}
              />
              <FileExplorerCTAButton
                typeCTA="add-folder"
                onClick={() => handleOpenModal("add-folder")}
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
