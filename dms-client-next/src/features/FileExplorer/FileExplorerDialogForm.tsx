"use client";

import { forwardRef, useImperativeHandle } from "react";
import { DialogForm, Dropdown, FieldForm, Input } from "@/components/ui";
import { TypeRef } from "./types";
import { useFileExplorerDialogForm } from "./hooks/useFileExplorerDialogForm";

const documentTypes = [
  { value: "unselect-document", name: "Select Document" },
  { value: "pdf", name: "PDF" },
  { value: "docx", name: "DOCX" },
  { value: "xlsx", name: "XLSX" },
  { value: "txt", name: "TXT" },
];

const FileExplorerDialogForm = forwardRef<TypeRef>((_, ref) => {
  const {
    openDialog,
    dialogType,
    isLoading,
    errors,
    register,
    handleSubmit,
    handleOpenModal,
    onSubmit,
    setOpenDialog,
  } = useFileExplorerDialogForm();

  useImperativeHandle(
    ref,
    () => ({
      handleOpenModal,
    }),
    [],
  );

  const dialogTitle = dialogType === "upload-files" ? "Documents" : "Folders";
  const fieldTitle = dialogType === "upload-files" ? "Document" : "Folder";

  return (
    <DialogForm
      onSubmit={handleSubmit(onSubmit)}
      dialogTitle={dialogTitle}
      open={openDialog}
      isLoading={isLoading}
      onOpenChange={() => setOpenDialog(isLoading ? true : false)}
    >
      <div className="space-y-5 p-4">
        <FieldForm
          error={!!errors.name}
          nameField={`${fieldTitle} Name`}
          descriptionField={errors.name?.message}
        >
          <Input
            aria-invalid={!!errors.name}
            {...register("name", { required: "Name is required" })}
          />
        </FieldForm>

        {dialogType === "upload-files" && (
          <FieldForm
            error={!!errors.documentType}
            nameField="Type Documents"
            descriptionField={errors?.documentType?.message}
          >
            <Dropdown
              aria-invalid={!!errors.documentType}
              {...register("documentType", {
                required: "Please select document type",
                validate: (value) => value !== "unselect-document",
              })}
              className="w-full"
              itemDropdown={documentTypes}
            />
          </FieldForm>
        )}

        <FieldForm
          error={!!errors.createdBy}
          nameField="Created By"
          descriptionField={errors.createdBy?.message}
        >
          <Input
            aria-invalid={!!errors.createdBy}
            {...register("createdBy", { required: "Created by is required" })}
          />
        </FieldForm>
      </div>
    </DialogForm>
  );
});

FileExplorerDialogForm.displayName = "FileExplorerDialogForm";
export default FileExplorerDialogForm;
