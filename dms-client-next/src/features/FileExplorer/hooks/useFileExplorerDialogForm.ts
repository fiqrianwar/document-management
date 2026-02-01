import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { documentsService } from "@/services/documents/documents";
import { foldersService } from "@/services/folders/folders";
import { useFetchFileExplorer } from "@/services/fileExplorer/fileExplorer";
import { ApiErrorResponse } from "@/services/type";
import { FormValues } from "../types";

export const useFileExplorerDialogForm = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogType, setDialogType] = useState<string>("");
  const [paramsPath, setParamsPath] = useState<string | null>(null);

  const { mutate, isLoading } = useFetchFileExplorer(paramsPath ?? null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const handleOpenModal = (type: string, params?: string | null) => {
    setDialogType(type);
    setParamsPath(params ?? null);
    setOpenDialog(true);
  };

  const handleCloseModal = () => setOpenDialog(false);

  const onSubmit = async (data: FormValues) => {
    try {
      if (dialogType === "upload-files") {
        const result = await documentsService.create({
          name: data.name,
          createdBy: data.createdBy,
          documentType: data.documentType,
          folderId: paramsPath ?? null,
        });
        toast.success(result?.message, { position: "top-center" });
      } else {
        const result = await foldersService.create({
          name: data.name,
          createdBy: data.createdBy,
          parentId: paramsPath ?? null,
        });
        toast.success(result?.message, { position: "top-center" });
      }

      handleCloseModal();
      mutate();
      reset();
    } catch (e) {
      const error = e as ApiErrorResponse;
      toast.error(error?.message, { position: "top-center" });
    }
  };

  return {
    openDialog,
    dialogType,
    isLoading,
    errors,
    register,
    handleSubmit,
    handleOpenModal,
    handleCloseModal,
    onSubmit,
    setOpenDialog,
  };
};
