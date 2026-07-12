import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp } from "lucide-react";

const directionIcons = [
  { direction: "up", icon: <ArrowDown /> },
  { direction: "down", icon: <ArrowUp /> },
  { direction: "left", icon: <ArrowRight /> },
  { direction: "right", icon: <ArrowLeft /> },
] as const;

export default function DrawerPreview() {
  return (
    <div className="flex flex-wrap justify-center gap-8 p-6">
      {/* Default */}
      <section>
        <Drawer>
          <DrawerTrigger render={<Button />}>Open Default Drawer</DrawerTrigger>

          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Default Drawer</DrawerTitle>

              <DrawerDescription>
                A standard modal drawer that slides from the bottom.
              </DrawerDescription>
            </DrawerHeader>

            <div className="p-4">
              <p>Drawer content goes here.</p>
            </div>

            <DrawerFooter>
              <DrawerClose render={<Button />}>Close</DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </section>

      {/* Swipe handle */}
      <section>
        <Drawer showSwipeHandle>
          <DrawerTrigger render={<Button />}>Swipe Handle</DrawerTrigger>

          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Swipe Handle Enabled</DrawerTitle>

              <DrawerDescription>
                Shows the draggable swipe indicator.
              </DrawerDescription>
            </DrawerHeader>

            <div className="p-4">
              <p>The handle appears at the edge of the drawer.</p>
            </div>
          </DrawerContent>
        </Drawer>
      </section>

      {/* Snap points */}
      <section>
        <Drawer showSwipeHandle snapPoints={[0.25, 0.5, 1]}>
          <DrawerTrigger render={<Button />}>Snap Points</DrawerTrigger>

          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Snap Point Drawer</DrawerTitle>

              <DrawerDescription>
                This drawer can snap between multiple heights.
              </DrawerDescription>
            </DrawerHeader>

            <div className="p-4">
              <p>Try dragging the drawer between snap points.</p>
            </div>
          </DrawerContent>
        </Drawer>
      </section>

      {/* Non-modal */}
      <section>
        <Drawer modal={false}>
          <DrawerTrigger render={<Button />}>Non Modal Drawer</DrawerTrigger>

          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Non Modal</DrawerTitle>

              <DrawerDescription>
                The page remains interactive behind the drawer.
              </DrawerDescription>
            </DrawerHeader>

            <div className="p-4">Background interaction is allowed.</div>
          </DrawerContent>
        </Drawer>
      </section>

      {/* Direction */}
      <section className="flex flex-wrap gap-3">
        {directionIcons.map(({ direction, icon }) => (
          <Drawer key={direction} swipeDirection={direction} showSwipeHandle>
            <DrawerTrigger render={<Button />}>{icon}</DrawerTrigger>

            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>{direction} Drawer</DrawerTitle>

                <DrawerDescription>
                  Drawer swipes from the {direction}.
                </DrawerDescription>
              </DrawerHeader>

              <div className="p-4">Content area</div>
            </DrawerContent>
          </Drawer>
        ))}
      </section>
    </div>
  );
}
