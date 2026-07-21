import { MoonStar, Settings } from "lucide-react";
import { Button } from "./ui/button";
import { useThemeMode } from "@/hooks/useThemeMode";
import { useGameContext } from "@/context";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import PlayersMenu from "./PlayersMenu";

export default function Header() {
  const { toggleThemeMode } = useThemeMode();
  const { isStarted, endGame } = useGameContext();
  return (
    <div className="flex justify-center align-center p-2">
      {isStarted && <h3 className="text-2xl text-primary">Bank</h3>}
      <Popover>
        <PopoverTrigger
          render={<Button variant="ghost" size="icon" color="secondary" />}
          className="absolute top-2 right-2"
        >
          <Settings />
        </PopoverTrigger>
        <PopoverContent>
          {isStarted && (
            <Button variant="ghost" onClick={endGame}>
              Start Over
            </Button>
          )}

          {isStarted && (
            <Drawer>
              <DrawerTrigger render={<Button variant="ghost" />}>
                Edit Players
              </DrawerTrigger>
              <DrawerContent className="py-4">
                <PlayersMenu />
              </DrawerContent>
            </Drawer>
          )}
          <Button variant="ghost" onClick={toggleThemeMode}>
            Theme Mode
            <MoonStar className="ml-2" />
          </Button>
        </PopoverContent>
      </Popover>
    </div>
  );
}
