import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/primitives";
import { InputIconProps } from "./types";

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
