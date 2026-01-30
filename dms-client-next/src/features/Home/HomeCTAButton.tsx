import { Button } from "@/components/ui";
import { ArrowUpToLine, Plus } from "lucide-react";
import { PropsHomeCTAButton } from "./types";

const HomeCTAButton: React.FC<PropsHomeCTAButton> = ({ typeCTA, onClick }) => {
  const config = {
    "upload-files": {
      label: "Upload Files",
      icon: <ArrowUpToLine className="text-primary" />,
      variant: "outline" as const,
    },
    "add-folder": {
      label: "Add new folder",
      icon: <Plus />,
      variant: "default" as const,
    },
  };

  const { label, icon, variant: btnVariant } = config[typeCTA];

  return (
    <div className="w-full">
      <Button
        label={label}
        icon={icon}
        onClick={onClick}
        variant={btnVariant}
      />
    </div>
  );
};

export default HomeCTAButton;
