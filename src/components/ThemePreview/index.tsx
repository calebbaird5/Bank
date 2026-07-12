import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useThemeMode } from "@/hooks/useThemeMode";
import { MoonStar } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "../ui/button";
import ButtonPreview from "./components/ButtonPreview";
import CardPreview from "./components/CardPreview";
import { ColorPreview } from "./components/ColorPreview";
import FieldPreview from "./components/FieldPreview";
import InputPreview from "./components/InputPreview";
import DialogPreview from "./components/DialogPreview";
import DrawerPreview from "./components/DrawerPreview";

interface Tab {
  value: string;
  component: ReactNode;
  label?: string;
}
const tabs: Tab[] = [
  { value: "button", component: <ButtonPreview /> },
  { value: "card", component: <CardPreview /> },
  { value: "drawer", component: <DrawerPreview /> },
  { value: "dialog", component: <DialogPreview /> },
  { value: "input", component: <InputPreview /> },
  { value: "field", component: <FieldPreview /> },
  { value: "colors", component: <ColorPreview /> },
];

export default function ThemePreview() {
  const { toggleThemeMode } = useThemeMode();

  return (
    <div className="min-h-screen bg-background text-foreground p-8 space-y-8 relative">
      <h1 className="text-3xl font-bold text-foreground text-center">
        Theme Preview
      </h1>

      <Button
        onClick={toggleThemeMode}
        variant="ghost"
        className="absolute top-8 right-4"
      >
        <MoonStar />
      </Button>

      <Tabs defaultValue={tabs[0].value}>
        <TabsList className="flex w-full ">
          {tabs.map((tab, i) => (
            <TabsTrigger key={i} value={tab.value} className="capitalize">
              {tab.label ?? tab.value}
            </TabsTrigger>
          ))}
        </TabsList>

        {tabs.map((tab, i) => (
          <TabsContent key={i} value={tab.value} className="mt-6">
            {tab.component}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
