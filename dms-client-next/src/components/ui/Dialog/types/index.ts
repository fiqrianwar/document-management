import { ReactNode } from "react";

export type PropsDialogForm = {
  children: ReactNode;
  dialogTitle: string;
  onSubmit: React.SubmitEventHandler<HTMLFormElement>;
};
