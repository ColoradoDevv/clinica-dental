# VitalDent - Clínica Dental

Landing page profesional para clínica dental, diseñada para convertir visitantes en pacientes.

![VitalDent Preview](./public/logo.svg)

## 🦷 Características

- **Diseño moderno y profesional** - Enfocado en familias y confianza
- **Optimizado para conversión** - CTAs prominentes hacia WhatsApp
- **Responsive** - Funciona en móvil, tablet y desktop
- **Animaciones suaves** - Con Framer Motion
- **SEO optimizado** - Meta tags y estructura semántica

## 🛠️ Tecnologías

- [Astro](https://astro.build/) - Framework web
- [React](https://react.dev/) - Componentes interactivos
- [Tailwind CSS v4](https://tailwindcss.com/) - Estilos utilitarios
- [Framer Motion](https://www.framer.com/motion/) - Animaciones
- [Lucide React](https://lucide.dev/) - Iconos

## 🚀 Inicio Rápido

```bash
# Instalar dependencias
npm install

# Desarrollo local
npm run dev

# Construir para producción
npm run build

# Previsualizar build
npm run preview
```

## 📁 Estructura del Proyecto

```
clinica-dental/
├── public/
│   ├── favicon.svg
│   └── logo.svg
├── src/
│   ├── assets/images/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── Team.jsx
│   │   ├── Testimonials.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
└── package.json
```

## ⚙️ Configuración

### WhatsApp
Actualiza el número de teléfono en los componentes:
```jsx
href="https://wa.me/TU_NUMERO_AQUI"
```

### Imágenes
Reemplaza las imágenes en `src/assets/images/`:
- `hero-smile.jpg` - Imagen principal del hero
- `dra-elena.png` - Foto del equipo médico

### Colores
Los colores principales se pueden ajustar en `global.css`:
```css
:root {
    --color-primary: #0891b2; /* Cyan */
}
```

## 📦 Deploy

### Vercel
```bash
npm run build
# Deploy carpeta dist/
```

### Netlify
Conecta el repositorio y configura:
- Build command: `npm run build`
- Publish directory: `dist`

## 📄 Licencia

MIT License - Ver [LICENSE](./LICENSE)

---

Desarrollado por ColoradoDevv para VitalDent
