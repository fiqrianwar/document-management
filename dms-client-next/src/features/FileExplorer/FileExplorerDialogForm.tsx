"use client";
import { DialogForm, Dropdown, FieldForm, Input } from "@/components/ui";
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

  const dropdownData = [
    {
      value: "unselect-document",
      name: "Select Document",
    },
    {
      value: "pdf",
      name: "PDF",
    },
    {
      value: "word",
      name: "WORD",
    },
  ];

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
          <FieldForm
            error={errors.name ? true : false}
            nameField={`${fieldTitle} Name`}
            descriptionField={errors.name?.message}
          >
            <Input
              aria-invalid={errors.name ? true : false}
              {...register("name", { required: "Name is required" })}
            />
          </FieldForm>
        </div>

        {dialogType === "upload-files" && (
          <div className="space-y-3">
            <FieldForm
              error={errors.documentType ? true : false}
              nameField="Type Documents"
              descriptionField={
                errors.documentType && "Please select document type"
              }
            >
              <Dropdown
                aria-invalid={errors.documentType ? true : false}
                {...register("documentType", {
                  required: "Please select document type",
                  validate: (value) => value !== "unselect-document",
                })}
                className="w-full"
                itemDropdown={dropdownData}
              />
            </FieldForm>
          </div>
        )}

        <div className="space-y-2">
          <FieldForm
            error={errors.createdBy ? true : false}
            nameField="Created By"
            descriptionField={errors.createdBy?.message}
          >
            <Input
              aria-invalid={errors.createdBy ? true : false}
              {...register("createdBy", { required: "Created by is required" })}
            />
          </FieldForm>
        </div>
      </div>
    </DialogForm>
  );
});

FileExplorerDialogForm.displayName = "FileExplorerDialogForm";
export default FileExplorerDialogForm;
