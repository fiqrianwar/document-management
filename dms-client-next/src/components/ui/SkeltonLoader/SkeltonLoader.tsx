import { cn } from "@/lib/utils";

function SkeletonLoader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-muted rounded-md animate-pulse", className)}
      {...props}
    />
  );
}

export default SkeletonLoader;
