import { Button } from "@/components/ui";

import { ArrowUpToLine, Plus } from "lucide-react";
import { PropsHomeCTAButton } from "./types";

const HomeCTAButton = ({ variant, onClick }: PropsHomeCTAButton) => {
  switch (variant) {
    case "upload-files":
      return (
        <>
          <Button className="w-full" variant="outline" onClick={onClick}>
            <ArrowUpToLine className="text-primary" />
            <h1 className="text-primary">Upload Files</h1>
          </Button>
        </>
      );
    default:
      return (
        <>
          <Button className="w-full" onClick={onClick}>
            <Plus />
            Add new folder
          </Button>
        </>
      );
  }
};

export default HomeCTAButton;
