# Netflix Clone

Production-ready Netflix-inspired streaming UI built with React, Vite, and the TMDB API.

## Features

- Featured hero banner powered by TMDB
- Multiple category rows with horizontal scrolling
- Trailer playback via YouTube
- Responsive layout for mobile, tablet, and desktop
- Graceful loading and error states
- Vercel-ready SPA routing configuration

## Tech Stack

- React 19
- Vite 6
- Axios
- Material UI icons
- TMDB API
- YouTube trailer integration

## Environment Variables

Create a `.env` file in the project root:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key_here
```

You can also use `VITE_API_KEY` for backward compatibility.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production output is generated in `dist/`.

## Vercel Deployment

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Set `VITE_TMDB_API_KEY` in the Vercel project environment variables.
4. Deploy with the default Vite build command:
   - Build command: `npm run build`
   - Output directory: `dist`

The included `vercel.json` rewrite keeps SPA routes working correctly.

## Notes

- Make sure your TMDB key is valid and has the required API access enabled.
- If the featured banner or rows fail to load, the app will show user-friendly fallback states instead of breaking.
