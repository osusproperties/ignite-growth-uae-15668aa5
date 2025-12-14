# Cloudflare Deployment Guide

This guide summarizes the steps to deploy this Vite + React application on Cloudflare (Pages or Workers) and configure DNS and SSL for a production-ready setup.

## 1. Prerequisites
- A Cloudflare account (free tier is sufficient for Pages)
- Your domain added to Cloudflare and using Cloudflare nameservers
- Node.js LTS installed locally (to build)

## 2. DNS Configuration
1. In Cloudflare dashboard, go to `Websites` → select your domain → `DNS`.
2. Add an `A` record if hosting via your own server:
   - Name: `@` (root) or `www`
   - IPv4: your server IP
   - Proxy status: `Proxied` (orange cloud) to use Cloudflare CDN/SSL
3. If deploying to Cloudflare Pages with a custom domain:
   - Create a `CNAME` record:
     - Name: `www` (or the subdomain you want)
     - Target: your Cloudflare Pages hostname (e.g., `your-project.pages.dev`)
     - Proxy status: `Proxied`
4. Wait for DNS to propagate (usually minutes, up to 24h).

## 3. SSL/TLS Setup
1. In Cloudflare dashboard → `SSL/TLS` → `Overview`:
   - Set `SSL/TLS encryption mode` to `Full` or `Full (strict)`.
   - Use `Full (strict)` if your origin has a valid certificate.
2. Under `Edge Certificates`:
   - Ensure `Always Use HTTPS` is ON.
   - Enable `Automatic HTTPS Rewrites`.
   - Confirm a universal edge certificate is active.
3. For origin servers (if not using Pages):
   - Install an origin certificate from Cloudflare (`Origin Server` tab) and configure on your web server.

## 4. Deploy with `wrangler` (primary)
1. Install Wrangler:
   ```bash
   npm install -g wrangler
   ```
2. Authenticate:
   ```bash
   wrangler login
   ```
3. Build and publish to Cloudflare Pages:
   ```bash
   npm run build
   wrangler pages publish ./dist --project-name <your-project>
   ```

Notes:
- `wrangler.toml` includes `pages_build_output_dir = "dist"` to simplify publishing.
- After the first publish, add a custom domain in the Pages project and follow CNAME instructions (see DNS section).

## 5. Performance & Caching
- In `Caching`:
  - Set `Cache Level` to `Standard`.
  - Enable `Always Online` if desired.
- Add Page Rules (or Rules → `URL patterns`) for:
  - `/*` → `Cache Everything` (static sites); consider setting `Edge Cache TTL`.
- Use `Image Resizing` or `Polish` (paid) for optimized images.

## 6. Security Settings
- Enable `DDoS protection` (automatic on Cloudflare).
- Turn on `Bot Fight Mode` if appropriate.
- Configure `WAF` managed rules; add custom rules for admin routes.
- Set `Rate Limiting` for APIs if applicable.

## 7. Build & Environment Variables
- In Pages project settings → `Environment Variables`:
  - Add any `VITE_...` variables required at build-time.
- For Supabase or other integrations, prefer server-side secrets in Workers or Cloudflare Secrets.

## 8. Verification Checklist
- DNS records resolve to Cloudflare (orange cloud proxied).
- Site loads on `https://` with valid certificate.
- Pages deployment green and build output in `dist`.
- Custom domain mapped and reachable.
- Essential routes/components render correctly.

## 9. Rollback & Observability
- Use Pages deployments history to roll back to previous builds.
- Enable `Analytics` (Web Analytics) in Cloudflare.
- Monitor `Logs` for Workers if using them.

## 10. Local Commands
```bash
# Install deps
npm install

# Dev server
npm run dev

# Build for production
npm run build

# Preview dist locally
npm run preview
```

## Appendix: SSL Modes
- `Flexible`: Not recommended; origin can be plain HTTP.
- `Full`: Encrypts to origin; cert may be self-signed.
- `Full (strict)`: Requires valid cert at origin; most secure.
