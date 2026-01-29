type Props = {
  children: React.ReactNode;
  className?: string;
};

import React from "react";

const PageContainer = ({ children }: Props) => {
  return <div className="mx-auto max-w-7xl ">{children}</div>;
};

export default PageContainer;
