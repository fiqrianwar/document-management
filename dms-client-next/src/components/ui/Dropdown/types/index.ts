export type NativeSelectProps = Omit<React.ComponentProps<"select">, "size"> & {
  size?: "sm" | "default";
};

export type PropsDropdown = {
  itemDropdown: Array<{
    value: string;
    name: string;
  }>;
};
