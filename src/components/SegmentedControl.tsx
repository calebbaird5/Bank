import * as React from "react";
import { ToggleGroup } from "@base-ui/react/toggle-group";
import { Toggle } from "@base-ui/react/toggle";
import { Button, type ButtonProps } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { cn } from "@/lib/utils";

type SegmentedControlVariants = Pick<ButtonProps, "variant" | "color" | "size">;

export type SegmentedControlProps = Omit<
  React.ComponentProps<typeof ToggleGroup>,
  "value" | "onValueChange"
> &
  SegmentedControlVariants & {
    value?: string;
    onValueChange?: (value: string) => void;
    orientation?: "horizontal" | "vertical";
  };

const SegmentedControlContext = React.createContext<
  SegmentedControlVariants | undefined
>(undefined);

export function SegmentedControl({
  className,
  variant,
  color,
  size,
  orientation = "horizontal",
  value,
  onValueChange,
  children,
  ...props
}: SegmentedControlProps) {
  return (
    <SegmentedControlContext.Provider value={{ variant, color, size }}>
      <ToggleGroup
        data-slot="segmented-control"
        {...props}
        value={value ? [value] : []}
        onValueChange={(values) => onValueChange?.(values[0])}
        className={cn(className)}
      >
        <ButtonGroup orientation={orientation} className="w-full">
          {children}
        </ButtonGroup>
      </ToggleGroup>
    </SegmentedControlContext.Provider>
  );
}

export type SegmentedControlItemProps = React.ComponentProps<typeof Toggle>;

export function SegmentedControlItem({
  className,
  children,
  ...props
}: SegmentedControlItemProps) {
  const variants = React.useContext(SegmentedControlContext);

  return (
    <Toggle
      {...props}
      render={(buttonProps, state) => {
        const { color: _color, ...restButtonProps } = buttonProps;

        return (
          <Button
            {...restButtonProps}
            {...variants}
            variant={state.pressed ? "solid" : "outline"}
            className={cn("flex-1", state.pressed && "z-10", className)}
          >
            {children}
          </Button>
        );
      }}
    />
  );
}
