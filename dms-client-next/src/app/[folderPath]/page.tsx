import { FileExplorerFeatures } from "@/features";

const page = async ({ params }: { params: { folderPath?: string } }) => {
  const pathValue = await params;

  return <FileExplorerFeatures params={pathValue} />;
};

export default page;
