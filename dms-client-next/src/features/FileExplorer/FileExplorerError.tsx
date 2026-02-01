"use client";
import { DialogError } from "@/components/ui";
import React from "react";

import { useRouter } from "next/navigation";

const FileExplorerError = ({
  error,
}: {
  error: {
    status: boolean;
    message: string;
  };
}) => {
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
