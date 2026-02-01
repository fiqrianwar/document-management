import {
  FieldDescription,
  FieldLabel,
  Field as ShadcnField,
} from "@/components/primitives";

import { PropsFieldForm } from "./types";

const FieldForm = ({
  nameField,
  descriptionField,
  children,
  error,
}: PropsFieldForm) => {
  return (
    <ShadcnField data-invalid={error}>
      <FieldLabel htmlFor="input-invalid">{nameField}</FieldLabel>
      {children}
      <FieldDescription>{descriptionField}</FieldDescription>
    </ShadcnField>
  );
};

export default FieldForm;
