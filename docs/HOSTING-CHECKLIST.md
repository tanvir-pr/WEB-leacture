# Hosting checklist (Step 9)

Use InfinityFree or nethely.hu as in the course Word docs.

## Before upload
1. `npm run build`
2. Do **not** upload `node_modules` (~large)
3. Do **not** commit/upload real passwords in Git — put them only in server `.env` / panel
4. Ensure PHP >= 8.2 on host

## What to upload
- Full Laravel project except `node_modules`
- `public/build` assets from Vite build must be included

## Document root
- Prefer pointing domain to `/public`
- Or use `.htaccess` rewrite from project root to `public` (course method A)

## Database on host
1. Create MySQL DB in hosting panel
2. Import/migrate: run `php artisan migrate --seed` via SSH if available, or export local SQL and import in phpMyAdmin
3. Set `.env` `DB_*` to host credentials
4. `APP_ENV=production`, `APP_DEBUG=false`, generate new `APP_KEY` if needed
5. `SESSION_DRIVER=file`

## After deploy — put into PDF documentation
- Live URL
- FTP login
- DB login
- Admin user login

## Note
Hosting credentials must appear in the **PDF documentation submitted to Teams**, not necessarily in the public GitHub README.
