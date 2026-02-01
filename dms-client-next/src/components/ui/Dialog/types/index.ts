import { ReactNode } from "react";

export type PropsDialogForm = {
  children: ReactNode;
  dialogTitle: string;
  isLoading?: boolean;
  onSubmit: React.SubmitEventHandler<HTMLFormElement>;
};

export type PropsDialogError = {
  error: boolean;
  errorMessage: string;
  onClick: () => void;
};
