import { cn } from "@/lib/utils";
import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center rounded-lg border font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 border-transparent",
  {
    variants: {
      variant: {
        solid: "",
        outline: "border-border bg-transparent",
        ghost: "border-transparent bg-transparent",
      },

      color: {
        primary: "",
        secondary: "",
        destructive: "",
      },

      size: {
        sm: "h-7 px-2 text-xs",
        default: "h-8 px-3 text-sm",
        lg: "h-9 px-4 text-base",
        icon: "size-8 p-0",
      },
    },

    compoundVariants: [
      {
        variant: "solid",
        color: "primary",
        class:
          "bg-primary text-primary-foreground hover:bg-primary-hover active:bg-primary-active",
      },
      {
        variant: "solid",
        color: "secondary",
        class:
          "bg-secondary text-secondary-foreground hover:bg-secondary-hover active:bg-secondary-active",
      },
      {
        variant: "solid",
        color: "destructive",
        class:
          "bg-destructive text-destructive-foreground hover:bg-destructive-hover active:bg-destructive-active",
      },

      {
        variant: "outline",
        color: "primary",
        class: "text-primary hover:bg-primary-subtle",
      },
      {
        variant: "outline",
        color: "secondary",
        class: "text-secondary hover:bg-secondary-subtle",
      },
      {
        variant: "outline",
        color: "destructive",
        class: "text-destructive hover:bg-destructive-subtle",
      },

      {
        variant: "ghost",
        color: "primary",
        class: "text-primary hover:bg-primary-subtle",
      },
      {
        variant: "ghost",
        color: "secondary",
        class: "text-secondary hover:bg-secondary-subtle",
      },
      {
        variant: "ghost",
        color: "destructive",
        class: "text-destructive hover:bg-destructive-subtle",
      },
    ],

    defaultVariants: {
      variant: "solid",
      color: "primary",
      size: "default",
    },
  },
);

type ButtonProps = ButtonPrimitive.Props & VariantProps<typeof buttonVariants>;

export function Button({
  className,
  variant,
  color,
  size,
  ...props
}: ButtonProps) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, color, size }), className)}
      {...props}
    />
  );
}
