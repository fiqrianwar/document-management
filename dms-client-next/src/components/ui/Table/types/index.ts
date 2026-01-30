export type TableCellData = {
  id: string;
  title: React.ReactNode;
  onClick?: () => void;
};

export type PropsTable = {
  tableHeader: string[];
  tableBody: Array<{
    id: string;
    cells: TableCellData[];
  }>;
};
