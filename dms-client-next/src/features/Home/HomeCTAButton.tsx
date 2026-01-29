import { Button } from "@/components/ui";

import { ArrowUpToLine, Plus } from "lucide-react";
import { PropsHomeCTAButton } from "./types";

const HomeCTAButton = ({ variant, onClick }: PropsHomeCTAButton) => {
  switch (variant) {
    case "upload-files":
      return (
        <div className="w-full">
          <Button className="w-full" variant="outline" onClick={onClick}>
            <ArrowUpToLine className="text-primary" />
            <h1 className="text-primary">Upload Files</h1>
          </Button>
        </div>
      );
    default:
      return (
        <div className="w-full">
          <Button onClick={onClick} className="w-full">
            <Plus />
            Add new folder
          </Button>
        </div>
      );
  }
};

export default HomeCTAButton;
