import { NativeSelect, NativeSelectOption } from "@/components/primitives";
import React from "react";

type NativeSelectProps = Omit<React.ComponentProps<"select">, "size"> & {
  size?: "sm" | "default";
};

type PropsDropdown = {
  itemDropdown: Array<{
    value: string;
    name: string;
  }>;
};

const Dropdown = ({
  itemDropdown,
  ...props
}: PropsDropdown & NativeSelectProps) => {
  return (
    <NativeSelect {...props}>
      {itemDropdown.map(({ name, value }) => (
        <NativeSelectOption key={value} value={value}>
          {name}
        </NativeSelectOption>
      ))}
    </NativeSelect>
  );
};

export default Dropdown;
