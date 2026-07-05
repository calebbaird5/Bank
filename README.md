# Bank

A digital scorekeeper and companion app for the dice game **Bank**.

Keep track of rounds, scores, and the shared bank while you play. Designed to make game nights easier by eliminating paper score sheets and handling the game flow automatically.

## Features

- 🎲 Track the shared bank each round
- 👥 Support for multiple players
- 🏦 One-tap banking for players
- 📊 Automatic score tracking
- 🔄 Round management
- 📜 View current standings throughout the game
- 📱 Responsive interface for phones, tablets, and desktops

## Tech Stack

- ⚛️ React
- ⚡ Vite
- 🎨 Tailwind CSS
- 🧩 shadcn/ui
- 🟦 TypeScript

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
git clone <repository-url>
cd bank
npm install
```

### Run the Development Server

```bash
npm run dev
```

Open your browser to:

```
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Game Rules

The objective of Bank is to finish the game with the highest total score.

Each round begins with a shared bank that players can choose to claim on their turn instead of rolling.

General gameplay:

- Players take turns rolling two six-sided dice.
- The shared bank grows throughout the round.
- During the first three rolls of a round, rolling a **7** adds **70 points** to the bank.
- After the third roll:
  - Rolling **doubles** doubles the current bank.
  - Rolling a **7** immediately ends the round.
- On your turn, you may **Bank** instead of rolling, claiming the current bank and sitting out for the remainder of the round.
- After a fixed number of rounds, the player with the highest total score wins.

## Roadmap

- [ ] Player management
- [ ] Automatic scorekeeping
- [ ] Dice roller
- [ ] Round history
- [ ] Undo last action
- [ ] Persistent game saves
- [ ] Player statistics
- [ ] Multiplayer support
- [ ] Custom rule variations

## Scripts

| Command | Description |
| ------- | ----------- |
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |

## Contributing

Contributions, bug reports, and feature requests are welcome. Feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
