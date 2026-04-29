
  # Global Student Startup Foundation

  This is a code bundle for Global Student Startup Foundation. The original project is available at https://www.figma.com/design/jsJAXBni7R4PHK8IAHKgKm/Global-Student-Startup-Foundation.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## Deploy to GitHub Pages

  This project is configured for GitHub Pages using hash-based routing and relative asset paths.

  1. Install dependencies: `pnpm install`
  2. Build the site: `pnpm build`
  3. Deploy: `pnpm deploy`

  The GitHub Actions workflow in `.github/workflows/deploy.yml` also builds and publishes the `/dist` folder to the `gh-pages` branch on pushes to `main`.
  