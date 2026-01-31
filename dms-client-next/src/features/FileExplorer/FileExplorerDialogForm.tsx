"use client";
import { DialogForm, Input } from "@/components/ui";
import { documentsService } from "@/services/documents/documents";
import { useFetchFileExplorer } from "@/services/fileExplorer/fileExplorer";
import { foldersService } from "@/services/folders/folders";

import { forwardRef, useImperativeHandle, useState } from "react";
import { useForm } from "react-hook-form";

export type TypeRef = {
  handleOpenModal: (type: string, params?: string | null) => void;
};

type FormValues = {
  name: string;
  createdBy?: string;
  documentType?: string;
  folderId?: string;
  parentId?: string;
};

const FileExplorerDialogForm = forwardRef<TypeRef>((_, ref) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogType, setDialogType] = useState("");
  const [paramsPath, setParamsPath] = useState<string | null>(null);

  const { mutate } = useFetchFileExplorer(paramsPath ? paramsPath : null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const handleOpenModal = (type: string, params?: string | null) => {
    setDialogType(type);
    setParamsPath(params ? (params as string) : null);
    setOpenDialog(true);
  };

  useImperativeHandle(
    ref,
    () => ({
      handleOpenModal,
    }),
    [],
  );

  const dialogTitle = dialogType === "upload-files" ? "Documents" : "Folders";
  const fieldTitle = dialogType === "upload-files" ? "Document" : "Folder";

  const onSubmit = async (data: FormValues) => {
    if (dialogType === "upload-files") {
      await documentsService.create({
        name: data.name,
        createdBy: data.createdBy,
        documentType: data.documentType,
        folderId: paramsPath ? paramsPath : null,
      });
    } else {
      await foldersService.create({
        name: data.name,
        createdBy: data.createdBy,
        parentId: paramsPath ? paramsPath : null,
      });
    }

    reset();
    mutate();
    setOpenDialog(false);
  };

  return (
    <DialogForm
      onSubmit={handleSubmit(onSubmit)}
      dialogTitle={dialogTitle}
      open={openDialog}
      onOpenChange={() => setOpenDialog(false)}
    >
      <div className="space-y-5 p-4">
        <div className="space-y-2">
          <h1 className="font-medium">{fieldTitle} Name</h1>
          <Input {...register("name", { required: "Name is required" })} />
        </div>

        {dialogType === "upload-files" && (
          <div className="space-y-2">
            <h1 className="font-medium">Type Documents</h1>
            <Input
              {...register("documentType", {
                required: "Document Type is required",
              })}
            />
          </div>
        )}

        <div className="space-y-2">
          <h1 className="font-medium">Created By</h1>
          <Input
            {...register("createdBy", { required: "Created By is required" })}
          />
        </div>
      </div>
    </DialogForm>
  );
});

FileExplorerDialogForm.displayName = "FileExplorerDialogForm";
export default FileExplorerDialogForm;
