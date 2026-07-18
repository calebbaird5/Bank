import { MoonStar } from "lucide-react";
import { Button } from "./ui/button";
import { useThemeMode } from "@/hooks/useThemeMode";

export default function Header() {
  const { toggleThemeMode } = useThemeMode();
  return (
    <div className="flex justify-between align-center p-2">
      <span className="w-15"></span>
      <h3 className="text-2xl text-primary">Bank</h3>
      <Button
        variant="ghost"
        color="secondary"
        className="w-15"
        onClick={toggleThemeMode}
      >
        <MoonStar />
      </Button>
    </div>
  );
}
