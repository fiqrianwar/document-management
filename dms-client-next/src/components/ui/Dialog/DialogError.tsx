import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/primitives";
import React from "react";
import { Button } from "../Button";
import { RotateCcw, TriangleAlert } from "lucide-react";

const DialogError = ({
  error,
  errorMessage = "Network error. Please try again.",
  onClick,
}: {
  error: boolean;
  errorMessage: string;
  onClick: () => void;
}) => {
  return (
    <Dialog open={error}>
      <DialogContent className="sm:max-w-106.25" showCloseButton={false}>
        <DialogHeader>
          <DialogTitle />
          <DialogDescription />
        </DialogHeader>
        <div>
          <TriangleAlert
            className="w-full text-9xl text-red-800"
            width={100}
            height={100}
          />
          <h1 className="text-base text-center py-5">{errorMessage}</h1>
        </div>
        <DialogFooter>
          <div className="w-full">
            <Button
              variant="default"
              type="submit"
              label="Try Again"
              icon={<RotateCcw />}
              onClick={onClick}
            />
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogError;
