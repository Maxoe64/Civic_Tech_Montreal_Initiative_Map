# Civic Tech Montreal Initiative Map

An interactive map showcasing civic technology initiatives across Montreal. Explore community-driven projects, open data efforts, and civic engagement programs by neighbourhood.

## Features

- Interactive Leaflet map centered on Montreal
- Initiative markers with category-based colour coding
- Filter initiatives by category (Open Data, Community Engagement, Transportation, Environment, Digital Inclusion)
- Popup details with descriptions, status, and links
- Responsive design for desktop and mobile
- Search by initiative name or neighbourhood

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── public/              # Static assets
├── src/
│   ├── data/            # Initiative dataset
│   ├── js/              # JavaScript modules
│   │   ├── map.js       # Map initialization and controls
│   │   ├── markers.js   # Marker creation and popups
│   │   └── filters.js   # Category filtering logic
│   ├── css/
│   │   └── style.css    # Application styles
│   └── main.js          # Entry point
├── index.html           # HTML shell
└── vite.config.js       # Vite configuration
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

MIT
