# Vercel Deploy Fix

- The project was using both `pnpm-lock.yaml` and `package-lock.json`.
- Vercel prefers a single lockfile and matching versions between lockfile and `package.json`.
- The following changes were made:
  - Updated `package.json` to match the versions in `pnpm-lock.yaml` (react 19, date-fns 4.1.0).
  - Added `.vercelignore` to ignore `pnpm-lock.yaml` (so Vercel will use npm or yarn, not pnpm).
  - Added `.npmrc` and `.yarnrc` to help avoid lockfile/engine issues.

## What to do next

- You can now deploy to Vercel and it will use `package-lock.json` (npm) for dependency resolution.
- If you want to use pnpm, delete `package-lock.json` and `node_modules`, keep only `pnpm-lock.yaml`, and deploy again.
- If you want to use npm, delete `pnpm-lock.yaml` and `node_modules`, keep only `package-lock.json`, and deploy again.

**Do not keep both lockfiles in the repo for production.**
