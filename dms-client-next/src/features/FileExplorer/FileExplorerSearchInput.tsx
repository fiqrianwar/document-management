import { SearchIcon } from "lucide-react";
import { InputIcon } from "@/components/ui";

const FileExplorerSearchInput = () => {
  return (
    <div>
      <InputIcon
        icon={<SearchIcon className="text-primary" />}
        placeholder="Search..."
      />
    </div>
  );
};

export default FileExplorerSearchInput;
