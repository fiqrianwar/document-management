import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/primitives";
import { ReactNode } from "react";

export type InputIconProps = {
  icon: ReactNode;
};

const InputIcon = ({
  icon,
  ...props
}: InputIconProps & React.ComponentProps<"input">) => {
  return (
    <InputGroup>
      <InputGroupInput id="inline-start-input" {...props} />
      <InputGroupAddon align="inline-end">{icon}</InputGroupAddon>
    </InputGroup>
  );
};

export default InputIcon;
