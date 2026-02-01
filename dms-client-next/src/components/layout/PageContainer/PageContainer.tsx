import { PropsPageContainer } from "./types";

const PageContainer = ({ children }: PropsPageContainer) => {
  return <div className="mx-auto max-w-7xl ">{children}</div>;
};

export default PageContainer;
