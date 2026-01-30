export type PropsButton = {
  label: string;
  variant:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost";
  onClick: () => void;
  icon?: React.ReactNode;
};
