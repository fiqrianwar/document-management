import { SearchIcon } from "lucide-react";
import { InputIcon } from "@/components/ui";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

const FileExplorerSearchInput = ({
  setSearch,
}: {
  setSearch: Dispatch<SetStateAction<string>>;
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value.trim() || "");
  };

  return (
    <div>
      <InputIcon
        icon={<SearchIcon className="text-primary" />}
        placeholder="Search..."
        onChange={handleChange}
      />
    </div>
  );
};

export default FileExplorerSearchInput;
