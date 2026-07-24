# Guía Deploy - 5 minutos

## 1. Backend en Render (gratis)
1. Sube este proyecto a GitHub: git init, git add ., git push
2. Ve a render.com -> New Web Service -> Conecta tu repo
3. Render detecta render.yaml automatico
4. En Environment agrega:
   SUPABASE_URL, SUPABASE_KEY, WESHOP_API_KEY (opcional)
5. Deploy. Te dará URL tipo https://virtual-mannequin-api.onrender.com

## 2. Frontend en Vercel (gratis)
1. Usa el demo que te hice o tu React app
2. En vercel.com -> Import Project
3. Pon variable: VITE_API_URL=https://tu-backend.onrender.com
4. Deploy

## 3. Supabase
- Crea proyecto en supabase.com
- Storage -> New Bucket -> wardrobe (public)
- SQL Editor -> pega el SQL del README

Listo! Tu API queda en /docs