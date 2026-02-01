import { ReactNode } from "react";

export type PropsDialogForm = {
  children: ReactNode;
  dialogTitle: string;
  isLoading?: boolean;
  onSubmit: React.SubmitEventHandler<HTMLFormElement>;
};
