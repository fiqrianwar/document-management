export type PropsButton = {
  label: string;
  variant:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost";
  icon?: React.ReactNode;
  isLoading?: boolean;
};
