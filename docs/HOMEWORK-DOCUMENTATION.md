# Web Programming II — Lecture Homework Documentation

**Project:** Pizza Palace (Laravel + React/Inertia)  
**GitHub:** https://github.com/tanvir-pr/WEB-leacture  
**Database theme:** 02-Pizza (MySQL)

## Team

| Member | Neptun | GitHub | Steps |
|--------|--------|--------|-------|
| TANVIR HASAN | C0FMUG | tanvir-pr | 1–4 |
| Islam md Tariqul | WEP2KE | tariqul71 | 5–9 |

> Convert this Markdown to PDF (Word / browser Print → PDF). Filename example:  
> `IslamMdTariqul-WEP2KE.pdf` and `TANVIRHASAN-C0FMUG.pdf`  
> Both members submit the same documentation on Teams.

---

## 1. Project URL & access (fill after hosting)

| Item | Value |
|------|-------|
| Live site URL | _TODO after deploy_ |
| GitHub | https://github.com/tanvir-pr/WEB-leacture |
| FTP host | _TODO_ |
| FTP user | _TODO_ |
| FTP password | _TODO (do not commit secrets to Git)_ |
| MySQL host | _TODO_ |
| MySQL DB / user / password | _TODO_ |
| Admin login | `admin@pizza.local` / `password` (change on production) |

---

## 2. How the application works (screenshots)

Add screenshots locally when running `php artisan serve`:

1. **Mainpage** — Pizza Palace hero + intro  
2. **Database** — categories, pizzas, orders tables  
3. **Contact** — form + validation errors + success  
4. **Login / Register / Logout**  
5. **Messages** (registered user) — newest first with send time  
6. **Graph** — Chart.js doughnut + bar  
7. **CRUD** (admin) — create / edit / delete pizza  
8. **Menu visibility** — guest vs registered vs admin  

---

## 3. Requirement mapping (where implemented)

### Free responsive theme (2p)
- Custom responsive **Pizza Palace** layout (HTML5UP-inspired dark amber theme)
- Files: `resources/js/layouts/site-layout.tsx`, `resources/css/app.css`, `resources/js/pages/home.tsx`
- Creators Name + Neptun on every page footer via shared Inertia props

### Authentication + roles (2p, Mandatory)
- Laravel Fortify Auth (React starter): register / login / logout
- Roles: guest (visitor), `registered`, `admin`
- Migration: `2026_03_22_000001_add_role_to_users_table.php`
- Middleware: `App\Http\Middleware\EnsureUserRole`
- Menus in `site-layout.tsx`

### Mainpage (1p)
- `resources/js/pages/home.tsx`

### Database menu (3p)
- 3 tables: `categories`, `pizzas`, `orders`
- Migrations + `PizzaSeeder` + Eloquent models
- Page: `DatabaseController` + `resources/js/pages/database.tsx`

### Contact (2p) — Tariqul
- `ContactController`, `StoreContactMessageRequest` (server validation)
- Saves to `contact_messages`
- UI: `resources/js/pages/contact.tsx`

### Messages (2p) — Tariqul
- `MessageController` — `orderByDesc('created_at')`, shows `sent_at`
- Auth-only route in `routes/web.php`
- UI: `resources/js/pages/messages.tsx`

### Graph (3p) — Tariqul
- Chart.js via `chart.js` + `react-chartjs-2`
- `GraphController` aggregates pizza categories & top orders
- UI: `resources/js/pages/graph.tsx`

### CRUD (3p) — Tariqul
- Admin-only resource for **pizzas** table
- `PizzaCrudController` — create, read, update, delete
- UI: `resources/js/pages/crud.tsx`

### Hosting (2p, Mandatory)
- Follow course docs (InfinityFree / nethely)
- Before upload: `npm run build`, do **not** upload `node_modules`
- Point document root / `.htaccess` to `public`
- See `docs/HOSTING-CHECKLIST.md`

### GitHub (2p + 3p project method)
- Public repo with stepwise commits
- Steps 1–4 authored by tanvir-pr
- Steps 5–9 authored by tariqul71
- This document states who created which part

---

## 4. Local run

```bash
composer install
cp .env.example .env
php artisan key:generate
# configure MySQL in .env
php artisan migrate --seed
npm install
npm run build
php artisan serve
```

Test users after seed:
- Admin: `admin@pizza.local` / `password`
- Registered: `user@pizza.local` / `password`

---

## 5. Dynamic layout
Shared `SiteLayout` component wraps Mainpage, Database, Contact, Graph, Messages, CRUD — one nav + one footer (component-based dynamic layout).
