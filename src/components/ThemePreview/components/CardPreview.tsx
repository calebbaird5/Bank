import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CardPreview() {
  return (
    <div className="grid gap-6 p-6 md:grid-cols-2">
      {/* Default */}
      <Card>
        <CardHeader>
          <CardTitle>Default Card</CardTitle>
          <CardDescription>
            A standard card with header, content, and footer.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <p>
            Cards provide a flexible container for grouping related content.
          </p>
        </CardContent>

        <CardFooter>
          <Button size="sm">Action</Button>
        </CardFooter>
      </Card>

      {/* Small */}
      <Card size="sm">
        <CardHeader>
          <CardTitle>Small Card</CardTitle>
          <CardDescription>
            Uses reduced spacing with size="sm".
          </CardDescription>
        </CardHeader>

        <CardContent>
          <p>This card uses the smaller spacing variant.</p>
        </CardContent>
      </Card>

      {/* Action */}
      <Card>
        <CardHeader>
          <CardTitle>Card With Action</CardTitle>
          <CardDescription>Uses the CardAction slot.</CardDescription>

          <CardAction>
            <Button variant="outline" size="sm">
              Edit
            </Button>
          </CardAction>
        </CardHeader>

        <CardContent>
          <p>The action is positioned in the top-right corner.</p>
        </CardContent>
      </Card>

      {/* Footer */}
      <Card>
        <CardHeader>
          <CardTitle>Footer Example</CardTitle>
          <CardDescription>
            CardFooter adds a muted footer area.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <p>Footer content is separated with a border.</p>
        </CardContent>

        <CardFooter className="justify-between">
          <span className="text-muted-foreground">Secondary text</span>
          <Button size="sm">Continue</Button>
        </CardFooter>
      </Card>

      {/* Image support */}
      <Card>
        <img
          src="https://placehold.co/600x200"
          alt=""
          className="h-40 w-full object-cover"
        />

        <CardHeader>
          <CardTitle>Image Card</CardTitle>
          <CardDescription>
            Images automatically receive rounded corners.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <p>Supports images as first or last children.</p>
        </CardContent>
      </Card>

      {/* Custom styling */}
      <Card className="border-primary/40">
        <CardHeader>
          <CardTitle>Custom Class</CardTitle>
          <CardDescription>
            Components can be extended with className.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <p>Additional Tailwind classes can customize appearance.</p>
        </CardContent>
      </Card>
    </div>
  );
}
