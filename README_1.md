# Virtual Mannequin API - Proyecto Completo

## Stack
FastAPI + Supabase (DB + Storage) + rembg (fondo transparente) + WeShop AI (opcional try-on)

## Setup en 3 minutos

1. Clonar y instalar
   pip install -r requirements.txt

2. Configurar .env
   cp .env.example .env
   # Pon tus keys de Supabase

3. Correr
   uvicorn app.main:app --reload --port 8000

Docs automaticas en http://localhost:8000/docs

## Estructura DB Supabase (SQL)
```sql
create table wardrobe_items (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users,
  category text, -- tops, bottoms, shoes, accessories
  image_url text,
  z_index int default 20,
  created_at timestamp default now()
);

create table outfits (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users,
  name text,
  layers jsonb, -- [{item_id, x, y, z_index, scale}]
  mannequin_id text,
  created_at timestamp default now()
);

-- Storage bucket: wardrobe (public)
```

## Frontend
El canvas que te hice ya consume /api/v1/outfits.
Solo cambia la URL base a tu API.

## Deploy gratis
- Backend: Render.com / Railway / Fly.io
- Supabase: ya es cloud
- Frontend: Vercel

## Siguiente paso
Conecta tu frontend drag&drop a POST /wardrobe/upload