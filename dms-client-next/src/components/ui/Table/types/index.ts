export type TableCellData = {
  id: string;
  title: React.ReactNode;
  // onClick?: () => void;
  directionLink?: string;
};

export type PropsTable = {
  tableHeader: string[];
  tableBody: Array<{
    id: string;
    cells: TableCellData[];
  }>;
  isLoading?: boolean;
};
