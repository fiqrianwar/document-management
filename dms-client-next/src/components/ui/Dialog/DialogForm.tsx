import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/primitives";
import React from "react";
import { Button } from "../Button";
import { Dialog as DialogPrimitive } from "radix-ui";
import { PropsDialogForm } from "./types";

const DialogForm = ({
  children,
  dialogTitle,
  onSubmit,
  ...props
}: PropsDialogForm & React.ComponentProps<typeof DialogPrimitive.Root>) => {
  return (
    <Dialog {...props}>
      <DialogContent className="sm:max-w-106.25">
        <form onSubmit={onSubmit}>
          <DialogHeader>
            <DialogTitle className="font-bold">{dialogTitle}</DialogTitle>
            <DialogDescription />
          </DialogHeader>
          {children}
          <DialogFooter>
            <div>
              <DialogClose asChild>
                <Button variant="outline" label="cancel" />
              </DialogClose>
            </div>
            <div>
              <Button variant="default" type="submit" label="Save changes" />
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DialogForm;
