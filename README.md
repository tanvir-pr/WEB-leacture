# WEB-leacture — Web Programming II Homework (Laravel)

Laravel + React (Inertia) Auth starter. Theme database: **02-Pizza** (MySQL).

## Team split

| Member | Neptun | GitHub | Steps | Responsibility |
|--------|--------|--------|-------|----------------|
| **TANVIR HASAN** | C0FMUG | `tanvir-pr` | 1–4 | Setup, theme/layout, Auth roles/menus, Database menu + migrations/seeders |
| **Islam md Tariqul** | WEP2KE | `tariqul71` | 5–9 | Contact, Messages, Graph (Chart.js), Admin CRUD, Hosting + PDF docs |

## Local setup

1. PHP >= 8.2, MySQL (XAMPP), Node.js
2. `composer install`
3. Copy `.env.example` → `.env`, set MySQL, `php artisan key:generate`
4. `php artisan migrate --seed`
5. `npm install && npm run build`
6. `php artisan serve`

## Admin login (after seed)

- Email: `admin@pizza.local`
- Password: `password`

## GitHub

- Repo: https://github.com/tanvir-pr/WEB-leacture
- Public repo required for grading
- Commits for Steps 1–4 are by Tanvir only
