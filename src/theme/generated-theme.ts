/* AUTO-GENERATED FILE. DO NOT EDIT. */

export const theme = {
  "colors": {
    "light": {
      "background": "44 87% 94%",
      "foreground": "192 13% 40%",
      "border": "44 20% 82%",
      "input": "44 20% 82%",
      "ring": "205 69% 49%",
      "primary": {
        "DEFAULT": "205 69% 49%",
        "foreground": "44 87% 94%",
        "hover": "205 69% 43%",
        "active": "205 69% 36%",
        "muted": "205 40% 70%",
        "subtle": "205 50% 90%"
      },
      "secondary": {
        "DEFAULT": "175 59% 40%",
        "foreground": "44 87% 94%",
        "hover": "175 59% 34%",
        "active": "175 59% 28%",
        "subtle": "175 40% 88%"
      },
      "muted": {
        "DEFAULT": "44 25% 88%",
        "foreground": "192 13% 52%",
        "hover": "44 25% 84%",
        "active": "44 25% 78%"
      },
      "accent": {
        "DEFAULT": "68 100% 30%",
        "foreground": "44 87% 94%",
        "hover": "68 100% 25%",
        "active": "68 100% 20%",
        "subtle": "68 50% 88%"
      },
      "destructive": {
        "DEFAULT": "1 71% 52%",
        "foreground": "44 87% 94%",
        "hover": "1 71% 46%",
        "active": "1 71% 40%",
        "subtle": "1 60% 90%"
      },
      "surface": {
        "DEFAULT": "44 35% 96%",
        "hover": "44 30% 90%"
      },
      "card": {
        "DEFAULT": "44 35% 91%",
        "foreground": "192 100% 15%"
      },
      "popover": {
        "DEFAULT": "44 35% 91%",
        "foreground": "192 100% 15%"
      },
      "selection": "44 20% 82%"
    },
    "dark": {
      "background": "192 100% 11%",
      "foreground": "194 13% 52%",
      "border": "192 50% 22%",
      "input": "192 50% 22%",
      "ring": "205 80% 60%",
      "primary": {
        "DEFAULT": "205 80% 60%",
        "foreground": "192 100% 11%",
        "hover": "205 80% 66%",
        "active": "205 80% 52%",
        "muted": "205 40% 45%",
        "subtle": "205 40% 20%"
      },
      "secondary": {
        "DEFAULT": "175 59% 45%",
        "foreground": "192 100% 11%",
        "hover": "175 59% 52%",
        "active": "175 59% 38%",
        "subtle": "175 40% 18%"
      },
      "muted": {
        "DEFAULT": "192 50% 18%",
        "foreground": "194 13% 65%",
        "hover": "192 50% 23%",
        "active": "192 50% 28%"
      },
      "accent": {
        "DEFAULT": "68 100% 40%",
        "foreground": "192 100% 11%",
        "hover": "68 100% 48%",
        "active": "68 100% 32%",
        "subtle": "68 40% 16%"
      },
      "destructive": {
        "DEFAULT": "1 71% 55%",
        "foreground": "192 100% 11%",
        "hover": "1 71% 62%",
        "active": "1 71% 45%",
        "subtle": "1 45% 18%"
      },
      "surface": {
        "DEFAULT": "192 90% 15%",
        "hover": "192 80% 19%"
      },
      "card": {
        "DEFAULT": "192 70% 17%",
        "foreground": "194 13% 65%"
      },
      "popover": {
        "DEFAULT": "192 70% 19%",
        "foreground": "194 13% 65%"
      },
      "selection": "192 50% 22%"
    }
  },
  "font": {
    "sans": "\"Geist Variable\", sans-serif",
    "heading": "\"Geist Variable\", sans-serif"
  },
  "radius": {
    "DEFAULT": "0.625rem",
    "VARIANTS": [
      {
        "name": "sm",
        "multiplier": 0.6
      },
      {
        "name": "md",
        "multiplier": 0.8
      },
      {
        "name": "lg",
        "base": true
      },
      {
        "name": "xl",
        "multiplier": 1.4
      },
      {
        "name": "2xl",
        "multiplier": 1.8
      },
      {
        "name": "3xl",
        "multiplier": 2.2
      },
      {
        "name": "4xl",
        "multiplier": 2.6
      }
    ]
  }
} as const;

export const tokens = {
  "colors": {
    "light": {
      "background": {
        "value": "44 87% 94%",
        "hsl": "44 87% 94%",
        "hex": "#fdf6e2",
        "css": "--color-background"
      },
      "foreground": {
        "value": "192 13% 40%",
        "hsl": "192 13% 40%",
        "hex": "#596e73",
        "css": "--color-foreground"
      },
      "border": {
        "value": "44 20% 82%",
        "hsl": "44 20% 82%",
        "hex": "#dad5c8",
        "css": "--color-border"
      },
      "input": {
        "value": "44 20% 82%",
        "hsl": "44 20% 82%",
        "hex": "#dad5c8",
        "css": "--color-input"
      },
      "ring": {
        "value": "205 69% 49%",
        "hsl": "205 69% 49%",
        "hex": "#278bd3",
        "css": "--color-ring"
      },
      "primary": {
        "DEFAULT": {
          "value": "205 69% 49%",
          "hsl": "205 69% 49%",
          "hex": "#278bd3",
          "css": "--color-primary"
        },
        "foreground": {
          "value": "44 87% 94%",
          "hsl": "44 87% 94%",
          "hex": "#fdf6e2",
          "css": "--color-primary-foreground"
        },
        "hover": {
          "value": "205 69% 43%",
          "hsl": "205 69% 43%",
          "hex": "#227ab9",
          "css": "--color-primary-hover"
        },
        "active": {
          "value": "205 69% 36%",
          "hsl": "205 69% 36%",
          "hex": "#1c669b",
          "css": "--color-primary-active"
        },
        "muted": {
          "value": "205 40% 70%",
          "hsl": "205 40% 70%",
          "hex": "#94b8d1",
          "css": "--color-primary-muted"
        },
        "subtle": {
          "value": "205 50% 90%",
          "hsl": "205 50% 90%",
          "hex": "#d9e8f2",
          "css": "--color-primary-subtle"
        }
      },
      "secondary": {
        "DEFAULT": {
          "value": "175 59% 40%",
          "hsl": "175 59% 40%",
          "hex": "#2aa298",
          "css": "--color-secondary"
        },
        "foreground": {
          "value": "44 87% 94%",
          "hsl": "44 87% 94%",
          "hex": "#fdf6e2",
          "css": "--color-secondary-foreground"
        },
        "hover": {
          "value": "175 59% 34%",
          "hsl": "175 59% 34%",
          "hex": "#248a81",
          "css": "--color-secondary-hover"
        },
        "active": {
          "value": "175 59% 28%",
          "hsl": "175 59% 28%",
          "hex": "#1d726b",
          "css": "--color-secondary-active"
        },
        "subtle": {
          "value": "175 40% 88%",
          "hsl": "175 40% 88%",
          "hex": "#d4edeb",
          "css": "--color-secondary-subtle"
        }
      },
      "muted": {
        "DEFAULT": {
          "value": "44 25% 88%",
          "hsl": "44 25% 88%",
          "hex": "#e8e4d9",
          "css": "--color-muted"
        },
        "foreground": {
          "value": "192 13% 52%",
          "hsl": "192 13% 52%",
          "hex": "#758e95",
          "css": "--color-muted-foreground"
        },
        "hover": {
          "value": "44 25% 84%",
          "hsl": "44 25% 84%",
          "hex": "#e0dbcc",
          "css": "--color-muted-hover"
        },
        "active": {
          "value": "44 25% 78%",
          "hsl": "44 25% 78%",
          "hex": "#d5cdb9",
          "css": "--color-muted-active"
        }
      },
      "accent": {
        "DEFAULT": {
          "value": "68 100% 30%",
          "hsl": "68 100% 30%",
          "hex": "#859900",
          "css": "--color-accent"
        },
        "foreground": {
          "value": "44 87% 94%",
          "hsl": "44 87% 94%",
          "hex": "#fdf6e2",
          "css": "--color-accent-foreground"
        },
        "hover": {
          "value": "68 100% 25%",
          "hsl": "68 100% 25%",
          "hex": "#6f8000",
          "css": "--color-accent-hover"
        },
        "active": {
          "value": "68 100% 20%",
          "hsl": "68 100% 20%",
          "hex": "#586600",
          "css": "--color-accent-active"
        },
        "subtle": {
          "value": "68 50% 88%",
          "hsl": "68 50% 88%",
          "hex": "#ecf0d1",
          "css": "--color-accent-subtle"
        }
      },
      "destructive": {
        "DEFAULT": {
          "value": "1 71% 52%",
          "hsl": "1 71% 52%",
          "hex": "#dc312e",
          "css": "--color-destructive"
        },
        "foreground": {
          "value": "44 87% 94%",
          "hsl": "44 87% 94%",
          "hex": "#fdf6e2",
          "css": "--color-destructive-foreground"
        },
        "hover": {
          "value": "1 71% 46%",
          "hsl": "1 71% 46%",
          "hex": "#c92522",
          "css": "--color-destructive-hover"
        },
        "active": {
          "value": "1 71% 40%",
          "hsl": "1 71% 40%",
          "hex": "#ae201e",
          "css": "--color-destructive-active"
        },
        "subtle": {
          "value": "1 60% 90%",
          "hsl": "1 60% 90%",
          "hex": "#f5d7d6",
          "css": "--color-destructive-subtle"
        }
      },
      "surface": {
        "DEFAULT": {
          "value": "44 35% 96%",
          "hsl": "44 35% 96%",
          "hex": "#f8f6f1",
          "css": "--color-surface"
        },
        "hover": {
          "value": "44 30% 90%",
          "hsl": "44 30% 90%",
          "hex": "#ede9de",
          "css": "--color-surface-hover"
        }
      },
      "card": {
        "DEFAULT": {
          "value": "44 35% 91%",
          "hsl": "44 35% 91%",
          "hex": "#f0ece0",
          "css": "--color-card"
        },
        "foreground": {
          "value": "192 100% 15%",
          "hsl": "192 100% 15%",
          "hex": "#003d4d",
          "css": "--color-card-foreground"
        }
      },
      "popover": {
        "DEFAULT": {
          "value": "44 35% 91%",
          "hsl": "44 35% 91%",
          "hex": "#f0ece0",
          "css": "--color-popover"
        },
        "foreground": {
          "value": "192 100% 15%",
          "hsl": "192 100% 15%",
          "hex": "#003d4d",
          "css": "--color-popover-foreground"
        }
      },
      "selection": {
        "value": "44 20% 82%",
        "hsl": "44 20% 82%",
        "hex": "#dad5c8",
        "css": "--color-selection"
      }
    },
    "dark": {
      "background": {
        "value": "192 100% 11%",
        "hsl": "192 100% 11%",
        "hex": "#002d38",
        "css": "--color-background"
      },
      "foreground": {
        "value": "194 13% 52%",
        "hsl": "194 13% 52%",
        "hex": "#758d95",
        "css": "--color-foreground"
      },
      "border": {
        "value": "192 50% 22%",
        "hsl": "192 50% 22%",
        "hex": "#1c4954",
        "css": "--color-border"
      },
      "input": {
        "value": "192 50% 22%",
        "hsl": "192 50% 22%",
        "hex": "#1c4954",
        "css": "--color-input"
      },
      "ring": {
        "value": "205 80% 60%",
        "hsl": "205 80% 60%",
        "hex": "#47a7eb",
        "css": "--color-ring"
      },
      "primary": {
        "DEFAULT": {
          "value": "205 80% 60%",
          "hsl": "205 80% 60%",
          "hex": "#47a7eb",
          "css": "--color-primary"
        },
        "foreground": {
          "value": "192 100% 11%",
          "hsl": "192 100% 11%",
          "hex": "#002d38",
          "css": "--color-primary-foreground"
        },
        "hover": {
          "value": "205 80% 66%",
          "hsl": "205 80% 66%",
          "hex": "#63b4ee",
          "css": "--color-primary-hover"
        },
        "active": {
          "value": "205 80% 52%",
          "hsl": "205 80% 52%",
          "hex": "#2395e7",
          "css": "--color-primary-active"
        },
        "muted": {
          "value": "205 40% 45%",
          "hsl": "205 40% 45%",
          "hex": "#457aa1",
          "css": "--color-primary-muted"
        },
        "subtle": {
          "value": "205 40% 20%",
          "hsl": "205 40% 20%",
          "hex": "#1f3647",
          "css": "--color-primary-subtle"
        }
      },
      "secondary": {
        "DEFAULT": {
          "value": "175 59% 45%",
          "hsl": "175 59% 45%",
          "hex": "#2fb6ab",
          "css": "--color-secondary"
        },
        "foreground": {
          "value": "192 100% 11%",
          "hsl": "192 100% 11%",
          "hex": "#002d38",
          "css": "--color-secondary-foreground"
        },
        "hover": {
          "value": "175 59% 52%",
          "hsl": "175 59% 52%",
          "hex": "#3ccdc1",
          "css": "--color-secondary-hover"
        },
        "active": {
          "value": "175 59% 38%",
          "hsl": "175 59% 38%",
          "hex": "#289a91",
          "css": "--color-secondary-active"
        },
        "subtle": {
          "value": "175 40% 18%",
          "hsl": "175 40% 18%",
          "hex": "#1c403d",
          "css": "--color-secondary-subtle"
        }
      },
      "muted": {
        "DEFAULT": {
          "value": "192 50% 18%",
          "hsl": "192 50% 18%",
          "hex": "#173c45",
          "css": "--color-muted"
        },
        "foreground": {
          "value": "194 13% 65%",
          "hsl": "194 13% 65%",
          "hex": "#9aacb1",
          "css": "--color-muted-foreground"
        },
        "hover": {
          "value": "192 50% 23%",
          "hsl": "192 50% 23%",
          "hex": "#1d4c58",
          "css": "--color-muted-hover"
        },
        "active": {
          "value": "192 50% 28%",
          "hsl": "192 50% 28%",
          "hex": "#245d6b",
          "css": "--color-muted-active"
        }
      },
      "accent": {
        "DEFAULT": {
          "value": "68 100% 40%",
          "hsl": "68 100% 40%",
          "hex": "#b1cc00",
          "css": "--color-accent"
        },
        "foreground": {
          "value": "192 100% 11%",
          "hsl": "192 100% 11%",
          "hex": "#002d38",
          "css": "--color-accent-foreground"
        },
        "hover": {
          "value": "68 100% 48%",
          "hsl": "68 100% 48%",
          "hex": "#d4f500",
          "css": "--color-accent-hover"
        },
        "active": {
          "value": "68 100% 32%",
          "hsl": "68 100% 32%",
          "hex": "#8da300",
          "css": "--color-accent-active"
        },
        "subtle": {
          "value": "68 40% 16%",
          "hsl": "68 40% 16%",
          "hex": "#353918",
          "css": "--color-accent-subtle"
        }
      },
      "destructive": {
        "DEFAULT": {
          "value": "1 71% 55%",
          "hsl": "1 71% 55%",
          "hex": "#de3d3b",
          "css": "--color-destructive"
        },
        "foreground": {
          "value": "192 100% 11%",
          "hsl": "192 100% 11%",
          "hex": "#002d38",
          "css": "--color-destructive-foreground"
        },
        "hover": {
          "value": "1 71% 62%",
          "hsl": "1 71% 62%",
          "hex": "#e35c59",
          "css": "--color-destructive-hover"
        },
        "active": {
          "value": "1 71% 45%",
          "hsl": "1 71% 45%",
          "hex": "#c42421",
          "css": "--color-destructive-active"
        },
        "subtle": {
          "value": "1 45% 18%",
          "hsl": "1 45% 18%",
          "hex": "#431a19",
          "css": "--color-destructive-subtle"
        }
      },
      "surface": {
        "DEFAULT": {
          "value": "192 90% 15%",
          "hsl": "192 90% 15%",
          "hex": "#043b49",
          "css": "--color-surface"
        },
        "hover": {
          "value": "192 80% 19%",
          "hsl": "192 80% 19%",
          "hex": "#0a4857",
          "css": "--color-surface-hover"
        }
      },
      "card": {
        "DEFAULT": {
          "value": "192 70% 17%",
          "hsl": "192 70% 17%",
          "hex": "#0d3e4a",
          "css": "--color-card"
        },
        "foreground": {
          "value": "194 13% 65%",
          "hsl": "194 13% 65%",
          "hex": "#9aacb1",
          "css": "--color-card-foreground"
        }
      },
      "popover": {
        "DEFAULT": {
          "value": "192 70% 19%",
          "hsl": "192 70% 19%",
          "hex": "#0f4552",
          "css": "--color-popover"
        },
        "foreground": {
          "value": "194 13% 65%",
          "hsl": "194 13% 65%",
          "hex": "#9aacb1",
          "css": "--color-popover-foreground"
        }
      },
      "selection": {
        "value": "192 50% 22%",
        "hsl": "192 50% 22%",
        "hex": "#1c4954",
        "css": "--color-selection"
      }
    }
  },
  "font": {
    "sans": {
      "value": "\"Geist Variable\", sans-serif",
      "css": "---font-sans"
    },
    "heading": {
      "value": "\"Geist Variable\", sans-serif",
      "css": "---font-heading"
    }
  },
  "radius": {
    "DEFAULT": {
      "value": "0.625rem",
      "css": "---radius"
    },
    "sm": {
      "css": "---radius-sm"
    },
    "md": {
      "css": "---radius-md"
    },
    "lg": {
      "css": "---radius-lg"
    },
    "xl": {
      "css": "---radius-xl"
    },
    "2xl": {
      "css": "---radius-2xl"
    },
    "3xl": {
      "css": "---radius-3xl"
    },
    "4xl": {
      "css": "---radius-4xl"
    }
  }
} as const;
