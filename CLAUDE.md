# Portfolio — bentos-next

## O que não dá pra derivar do código

### Bootstrap
Carregado client-side via `src/components/ui/bootstrapForBrowser.tsx` — propositalmente.
Não mover para import global no layout.

### i18n
Sem biblioteca externa. Todas as traduções PT/EN vivem em `src/context/LanguageContext.jsx`.

### Identidade (redesign phantom.land, jun/2026)
- Home = galeria 3D esférica (`SphereGallery`), sem hero/menu tradicional
- Estilos do chrome novo em `src/assets/css/phantom.css` (prefixo `ph-`); `style.css` permanece só para as páginas de projeto (`/works/[slug]`)
- `/gallery` e `/works` são redirects para `/` — links antigos dependem disso

### Arquivos
- Componentes em `.js`, não `.tsx` (exceto bootstrapForBrowser)
- Sem testes automatizados
- Sem banco de dados — portfólio estático + API de contato (Resend)

### Deploy
Vercel. Branch `main` → produção.
