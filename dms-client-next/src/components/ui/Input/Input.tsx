import React from "react";
import { Input as ShadcnInput } from "@/components/primitives";

const Input = ({ ...props }: React.ComponentProps<"input">) => {
  return <ShadcnInput {...props} />;
};

export default Input;
