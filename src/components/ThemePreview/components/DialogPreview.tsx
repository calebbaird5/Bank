import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

export default function DialogPreview() {
  const [controlledOpen, setControlledOpen] = useState(false);

  return (
    <div className="flex flex-wrap gap-8 p-6 justify-center">
      {/* Basic */}
      <section className="flex items-center gap-4">
        <Dialog>
          <DialogTrigger render={<Button />}>Open Dialog</DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Basic Dialog</DialogTitle>

              <DialogDescription>
                This is a basic dialog with a title and description.
              </DialogDescription>
            </DialogHeader>

            <p>Dialog content goes here.</p>
          </DialogContent>
        </Dialog>
      </section>

      {/* With footer */}
      <section>
        <Dialog>
          <DialogTrigger render={<Button />}>Dialog With Footer</DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Confirm Action</DialogTitle>

              <DialogDescription>
                The footer provides actions at the bottom of the dialog.
              </DialogDescription>
            </DialogHeader>

            <p>Are you sure you want to continue?</p>

            <DialogFooter>
              <DialogClose render={<Button />}>Cancel</DialogClose>

              <Button>Confirm</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </section>

      {/* Footer close button */}
      <section>
        <Dialog>
          <DialogTrigger render={<Button />}>Footer Close Button</DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Automatic Close Button</DialogTitle>

              <DialogDescription>
                DialogFooter can optionally add its own close button.
              </DialogDescription>
            </DialogHeader>

            <DialogFooter showCloseButton>
              <Button>Save</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </section>

      {/* No top-right close button */}
      <section>
        <Dialog>
          <DialogTrigger render={<Button />}>No Close Icon</DialogTrigger>

          <DialogContent showCloseButton={false}>
            <DialogHeader>
              <DialogTitle>Custom Close Handling</DialogTitle>

              <DialogDescription>
                The default close icon can be disabled.
              </DialogDescription>
            </DialogHeader>

            <DialogFooter>
              <DialogClose render={<Button />}>Done</DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </section>

      {/* Controlled */}
      <section className="flex items-center gap-4">
        <Button onClick={() => setControlledOpen(true)}>
          Open Controlled Dialog
        </Button>

        <Dialog open={controlledOpen} onOpenChange={setControlledOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Controlled Dialog</DialogTitle>

              <DialogDescription>
                This dialog is controlled with React state.
              </DialogDescription>
            </DialogHeader>

            <DialogFooter>
              <DialogClose render={<Button />}>Close</DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </section>
    </div>
  );
}
