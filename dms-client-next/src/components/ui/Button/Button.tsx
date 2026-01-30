import { Button as ShadcnButton } from "../../primitives/Button";
import { PropsButton } from "./types";

const Button = ({ icon, label, onClick, variant }: PropsButton) => {
  const isOutline = variant === "outline" ? "text-primary" : "text-white";

  return (
    <>
      <ShadcnButton className="w-full" variant={variant} onClick={onClick}>
        {icon}
        <h1 className={isOutline}>{label}</h1>
      </ShadcnButton>
    </>
  );
};

export default Button;
