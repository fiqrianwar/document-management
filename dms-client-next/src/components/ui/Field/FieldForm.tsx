import React from "react";
import {
  FieldDescription,
  FieldLabel,
  fieldVariants,
  Field as ShadcnField,
} from "@/components/primitives";
import { VariantProps } from "class-variance-authority";

const FieldForm = ({
  nameField,
  descriptionField,
  children,
  error,
}: {
  nameField: string;
  descriptionField?: string;
  error: boolean;
  children: React.ReactNode;
}) => {
  return (
    <ShadcnField data-invalid={error}>
      <FieldLabel htmlFor="input-invalid">{nameField}</FieldLabel>
      {children}
      <FieldDescription>{descriptionField}</FieldDescription>
    </ShadcnField>
  );
};

export default FieldForm;
