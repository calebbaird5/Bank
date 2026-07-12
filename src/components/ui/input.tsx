import { cn } from "@/lib/utils";
import { Input as InputPrimitive } from "@base-ui/react/input";
import { cva, type VariantProps } from "class-variance-authority";

export const inputVariantsConfig = {
  variants: {
    size: {
      sm: "h-8 px-2.5 text-sm",
      md: "h-10 px-3 text-base",
      lg: "h-12 px-4 text-lg",
    },

    variant: {
      default:
        "border border-input bg-background text-foreground focus-visible:ring-2 focus-visible:ring-ring/50",
      underline:
        "border-b border-input bg-background text-foreground rounded-none focus-visible:ring-2 focus-visible:ring-ring/50",
      ghost:
        "border-transparent bg-transparent text-foreground focus-visible:ring-2 focus-visible:ring-ring/50",
    },
  },

  defaultVariants: {
    size: "md",
    variant: "default",
  },
} as const;

const inputConfig = { ...inputVariantsConfig };
const inputVariants = cva(
  "w-full min-w-0 rounded-lg transition-colors outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 mb-1 pb-1",
  inputConfig,
);

type InputProps = VariantProps<typeof inputVariants> &
  Omit<InputPrimitive.Props, "size">;
export function Input({
  className,
  type,
  variant,
  size,
  ...props
}: InputProps) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(inputVariants({ variant, size }), className)}
      {...props}
    />
  );
}
