import { useThemeMode } from "@/hooks/useThemeMode";
import { tokens } from "@/theme/generated-theme";
import { isToken } from "../../../../config/theme/types";

export function ColorPreview() {
  const { themeMode } = useThemeMode();

  const colors = tokens.colors[themeMode];

  return (
    <div className="min-h-screen bg-background text-foreground p-8 space-y-8">
      <h1 className="text-3xl font-bold">Theme Preview</h1>

      <section className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        {Object.entries(colors).map(([name, value]) => (
          <TokenPreview key={name} name={name} token={value} />
        ))}
      </section>
    </div>
  );
}

function TokenPreview({ name, token }: { name: string; token: unknown }) {
  if (isToken(token)) {
    return <ColorCard title={name} token={token} />;
  }

  if (typeof token === "object" && token !== null) {
    return (
      <>
        {Object.entries(token).map(([childName, childToken]) => (
          <TokenPreview
            key={`${name}-${childName}`}
            name={`${name}-${childName}`}
            token={childToken}
          />
        ))}
      </>
    );
  }

  return null;
}

function ColorCard({
  title,
  token,
}: {
  title: string;
  token: { value: string; hsl?: string; hex?: string; css: string };
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card text-card-foreground">
      <div
        className="h-24 w-full"
        style={{
          backgroundColor: `hsl(var(${token.css}))`,
        }}
      />

      <div className="space-y-1 p-4">
        <div className="font-medium capitalize">{title}</div>

        <div className="flex justify-between w-full">
          <div className="text-xs text-muted-foreground">{token.css}</div>

          {token.hex && (
            <div className="text-xs text-muted-foreground">{token.hex}</div>
          )}
        </div>
      </div>
    </div>
  );
}
