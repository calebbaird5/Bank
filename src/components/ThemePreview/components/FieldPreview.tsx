import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field";
import { Checkbox } from "@/components/ui/checkbox";

export default function FieldPreview() {
  return (
    <div className="flex max-w-2xl flex-col gap-8 p-6">
      {/* Basic vertical fields */}
      <FieldSet>
        <FieldLegend>Account Information</FieldLegend>

        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="name">Name</FieldLabel>
            <Input id="name" placeholder="Enter your name" />
            <FieldDescription>
              Your display name will be visible to other users.
            </FieldDescription>
          </Field>

          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input id="email" placeholder="email@example.com" />
          </Field>
        </FieldGroup>
      </FieldSet>

      {/* Horizontal */}
      <FieldSet>
        <FieldLegend>Horizontal Layout</FieldLegend>

        <FieldGroup>
          <Field orientation="horizontal">
            <FieldLabel htmlFor="username">Username</FieldLabel>

            <FieldContent>
              <Input id="username" placeholder="username" />
              <FieldDescription>Must be unique.</FieldDescription>
            </FieldContent>
          </Field>
        </FieldGroup>
      </FieldSet>

      {/* Responsive */}
      <FieldSet>
        <FieldLegend>Responsive Layout</FieldLegend>

        <FieldGroup>
          <Field orientation="responsive">
            <FieldLabel htmlFor="address">Address</FieldLabel>

            <FieldContent>
              <Input id="address" placeholder="123 Main St" />
              <FieldDescription>
                Stacks on mobile and aligns horizontally on larger screens.
              </FieldDescription>
            </FieldContent>
          </Field>
        </FieldGroup>
      </FieldSet>

      {/* Checkbox field */}
      <FieldSet>
        <FieldLegend variant="label">Preferences</FieldLegend>

        <FieldGroup>
          <Field>
            <FieldLabel>
              <Checkbox />

              <FieldContent>
                <FieldTitle>Enable notifications</FieldTitle>

                <FieldDescription>
                  Receive updates about your account.
                </FieldDescription>
              </FieldContent>
            </FieldLabel>
          </Field>
        </FieldGroup>
      </FieldSet>

      {/* Radio group */}
      <FieldSet>
        <FieldLegend>Theme</FieldLegend>

        <FieldGroup>
          <RadioGroup defaultValue="system">
            <Field orientation="horizontal">
              <FieldLabel htmlFor="system">
                <RadioGroupItem value="system" id="system" />
              </FieldLabel>

              <FieldContent>
                <FieldTitle>System</FieldTitle>
                <FieldDescription>Follow your device theme.</FieldDescription>
              </FieldContent>
            </Field>

            <Field orientation="horizontal">
              <FieldLabel htmlFor="light">
                <RadioGroupItem value="light" id="light" />
              </FieldLabel>

              <FieldContent>
                <FieldTitle>Light</FieldTitle>
              </FieldContent>
            </Field>
          </RadioGroup>
        </FieldGroup>
      </FieldSet>

      {/* Separator */}
      <FieldGroup>
        <FieldSeparator>Advanced Options</FieldSeparator>

        <Field>
          <FieldLabel htmlFor="advanced">Advanced Setting</FieldLabel>
          <Input id="advanced" placeholder="Value" />
        </Field>
      </FieldGroup>

      {/* Errors */}
      <FieldSet>
        <FieldLegend>Validation</FieldLegend>

        <FieldGroup>
          <Field data-invalid="true">
            <FieldLabel htmlFor="invalid">Username</FieldLabel>

            <Input
              id="invalid"
              aria-invalid="true"
              placeholder="Invalid value"
            />

            <FieldError
              errors={[
                { message: "Username is required." },
                { message: "Username must be at least 3 characters." },
              ]}
            />
          </Field>
        </FieldGroup>
      </FieldSet>
    </div>
  );
}
