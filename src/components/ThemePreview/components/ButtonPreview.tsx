import { Button, buttonVariantsConfig } from "@/components/ui/button";
import { keys } from "@/lib/utils";
import { ArrowBigRight } from "lucide-react";

export default function ButtonPreview() {
  const variants = keys(buttonVariantsConfig.variants.variant);
  const colors = keys(buttonVariantsConfig.variants.color);
  const sizes = keys(buttonVariantsConfig.variants.size);

  return (
    <div className="space-y-8">
      {variants.map((variant) => (
        <section key={variant} className="space-y-3">
          <h2 className="text-xl font-semibold capitalize text-center">
            {variant}
          </h2>

          <div className="flex flex-wrap gap-4 justify-center items-center">
            {colors.map((color) => (
              <Button
                key={`${variant}-${color}`}
                variant={variant}
                color={color}
              >
                {color}
              </Button>
            ))}
          </div>
        </section>
      ))}

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-center">Sizes</h2>

        <div className="flex flex-wrap gap-4 justify-center items-center">
          {sizes.map((size) => (
            <Button key={size} size={size}>
              {size === "icon" ? <ArrowBigRight /> : size}
            </Button>
          ))}
        </div>
      </section>
    </div>
  );
}
