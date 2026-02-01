"use client";
import { DialogError } from "@/components/ui";

import { useRouter } from "next/navigation";
import { PropsFileExplorerError } from "./types";

const FileExplorerError = ({ error }: PropsFileExplorerError) => {
  const router = useRouter();

  const handleRestart = () => {
    router.refresh();
  };

  return (
    <DialogError
      error={error?.status}
      errorMessage={error?.message}
      onClick={handleRestart}
    />
  );
};

export default FileExplorerError;
