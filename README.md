# Ignite Growth UAE — Vite + React + Tailwind

## Development

Requirements: Node.js LTS and npm.

```sh
# Clone the repository
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Start the dev server
npm run dev

# Build production assets
npm run build

# Preview the production build locally
npm run preview
```

Tech stack:
- Vite, React, TypeScript
- Tailwind CSS, shadcn/ui

## Deployment (Cloudflare with Wrangler)

See deployment steps in DEPLOYMENT_CLOUDFLARE.md (Wrangler-focused). TL;DR:

```sh
# Install wrangler (if not already)
npm i -g wrangler

# Authenticate
wrangler login

# Build and publish to Cloudflare Pages via Wrangler
npm run build
wrangler pages publish ./dist --project-name <your-project-name>
```

For DNS, SSL/TLS, caching, and security configuration details, refer to DEPLOYMENT_CLOUDFLARE.md.
