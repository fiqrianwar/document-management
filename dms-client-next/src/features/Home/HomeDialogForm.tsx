import { DialogForm, Input } from "@/components/ui";

import { forwardRef, useImperativeHandle, useState } from "react";
import { useForm } from "react-hook-form";

export type TypeRef = {
  handleOpenModal: (type: string) => void;
};

type FormValues = {
  name: string;
  createdBy?: string;
  documentType?: string;
};

const HomeDialogForm = forwardRef<TypeRef>((_, ref) => {
  const [openDialog, setOpenDialog] = useState(false);

  const [dialogType, setDialogType] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const handleOpenModal = (type: string) => {
    setDialogType(type);
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

  const onSubmit = (data: FormValues) => {
    console.log(data);
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
          <h1 className="font-medium">Folder Name</h1>
          <Input {...register("name", { required: "Name is required" })} />
        </div>

        <div className="space-y-2">
          <h1 className="font-medium">Created By</h1>
          <Input
            {...register("createdBy", { required: "Created By is required" })}
          />
        </div>

        {dialogType === "upload-files" && (
          <div className="space-y-2">
            <h1 className="font-medium">Type File</h1>
            <Input
              {...register("documentType", {
                required: "Document Type is required",
              })}
            />
          </div>
        )}
      </div>
    </DialogForm>
  );
});

HomeDialogForm.displayName = "HomeDialogForm";
export default HomeDialogForm;
