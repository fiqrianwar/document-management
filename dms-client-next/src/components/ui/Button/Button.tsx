import { Button as ShadcnButton } from "../../primitives/Button";
import { Spinner } from "../Spinner";
import { PropsButton } from "./types";

const Button = ({
  icon,
  label,
  variant,
  isLoading = false,
  ...props
}: PropsButton & React.ComponentProps<"button">) => {
  const isOutline = variant === "outline" ? "text-primary" : "text-white";

  return (
    <>
      <ShadcnButton className="w-full" variant={variant} {...props}>
        {icon}
        {!isLoading ? (
          <h1 className={isOutline}>{label}</h1>
        ) : (
          <>
            <Spinner className="" />
            <span>Loading...</span>
          </>
        )}
      </ShadcnButton>
    </>
  );
};

export default Button;
