import { cn } from "@/lib/utils";
import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      color: {
        primary: "",
        secondary: "",
        destructive: "",
      },

      variant: {
        solid: "",
        outline: "",
        ghost: "",
        link: "",
      },

      size: {
        default: "h-8 gap-1.5 px-2.5",
        sm: "h-7 gap-1 px-2",
        lg: "h-9 gap-1.5 px-3",
        icon: "size-8",
      },
    },

    compoundVariants: [
      // PRIMARY
      {
        color: "primary",
        variant: "solid",
        className: "bg-primary text-primary-foreground hover:bg-primary/80",
      },
      {
        color: "primary",
        variant: "outline",
        className: "border-border bg-background hover:bg-muted text-foreground",
      },
      {
        color: "primary",
        variant: "ghost",
        className: "hover:bg-muted hover:text-foreground",
      },

      // SECONDARY
      {
        color: "secondary",
        variant: "solid",
        className:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      },

      // DESTRUCTIVE
      {
        color: "destructive",
        variant: "solid",
        className:
          "bg-destructive text-destructive-foreground hover:bg-destructive/80",
      },
      {
        color: "destructive",
        variant: "ghost",
        className:
          "text-destructive hover:bg-destructive/10 hover:text-destructive",
      },
    ],

    defaultVariants: {
      color: "primary",
      variant: "solid",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "solid",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
