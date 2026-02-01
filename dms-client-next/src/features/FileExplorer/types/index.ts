import { TResponsesFileExplorer } from "@/services/fileExplorer/type";
import { Dispatch, SetStateAction } from "react";

export type PropsFileExplorerCTAButton = {
  typeCTA: "upload-files" | "add-folder";
  onClick: () => void;
};

export type TypeRef = {
  handleOpenModal: (type: string, params?: string | null) => void;
};

export type PropsFileExplorerError = {
  error: {
    status: boolean;
    message: string;
  };
};

export type PropsFileExplorerSearchInput = {
  setSearch: Dispatch<SetStateAction<string>>;
};

export type PropsFileExplorerTableList = {
  data: TResponsesFileExplorer | undefined;
  isLoading: boolean;
};
