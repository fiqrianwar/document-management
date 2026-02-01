import { NativeSelect, NativeSelectOption } from "@/components/primitives";
import React from "react";
import { NativeSelectProps, PropsDropdown } from "./types";

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
