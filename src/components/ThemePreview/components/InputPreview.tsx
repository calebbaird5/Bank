import { Input, inputVariantsConfig } from "@/components/ui/input";
import { keys } from "@/lib/utils";

const sizes = keys(inputVariantsConfig.variants.size) as Array<
  keyof typeof inputVariantsConfig.variants.size
>;

const variants = keys(inputVariantsConfig.variants.variant) as Array<
  keyof typeof inputVariantsConfig.variants.variant
>;

export default function InputPreview() {
  return (
    <div className="flex flex-wrap gap-8 p-6 justify-center">
      {/* Sizes */}
      <section className="flex flex-col gap-4">
        <h2 className="text-lg font-medium text-center">Sizes</h2>

        {sizes.map((size) => (
          <Input key={size} size={size} placeholder={`${size} input`} />
        ))}
      </section>

      {/* Variants */}
      <section className="flex flex-col gap-4">
        <h2 className="text-lg font-medium text-center">Variants</h2>

        {variants.map((variant) => (
          <Input
            key={variant}
            variant={variant}
            placeholder={`${variant} input`}
          />
        ))}
      </section>

      {/* States */}
      <section className="flex flex-col gap-4">
        <h2 className="text-lg font-medium">States</h2>

        <Input placeholder="Disabled input" disabled />

        <Input placeholder="Password input" type="password" />

        <Input defaultValue="Input with value" />
      </section>
    </div>
  );
}
