# RenovaPC Tlaxcala - Sitio Web

Sitio web oficial de RenovaPC Tlaxcala, especializado en optimización, limpieza y mantenimiento de computadoras.

## Características

- **Servicios de Optimización**: Optimización de equipos, limpieza profesional, cambio de disco SSD e instalación de Windows
- **Diseño Responsive**: Adaptado para todos los dispositivos móviles y desktop
- **SEO Optimizado**: Meta tags y estructura optimizada para motores de búsqueda
- **Performance**: Construido con Astro para máxima velocidad

## Tech Stack

- **Astro 5** con SSR (Server-Side Rendering)
- **Netlify** para hosting y deployment
- **React 19** con componentes interactivos
- **TailwindCSS 4** para estilos
- **TypeScript** para type safety

## Desarrollo Local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir índice de búsqueda (si es necesario)
npm run build:search-index

# Verificar código
npm run check
npm run fix

# Construir para producción
npm run build

# Preview local de producción
npm run preview
```

## Despliegue en Netlify

### Opción 1: Despliegue desde Git (Recomendado)

1. **Preparar el repositorio**:
   - Asegúrate de que tu código esté en GitHub, GitLab o Bitbucket
   - El proyecto ya incluye `netlify.toml` con la configuración necesaria

2. **Conectar con Netlify**:
   - Inicia sesión en [Netlify](https://app.netlify.com)
   - Haz clic en "Add new site" → "Import an existing project"
   - Conecta tu repositorio de Git

3. **Configuración automática**:
   - Netlify detectará automáticamente la configuración desde `netlify.toml`
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: `20` (configurado automáticamente)

4. **Variables de entorno (opcional)**:
   - Si necesitas configurar `SITE_URL` manualmente:
     - Ve a Site settings → Environment variables
     - Agrega `SITE_URL` con tu dominio (ej: `https://renovapctlaxcala.netlify.app`)

5. **Desplegar**:
   - Haz clic en "Deploy site"
   - Netlify construirá y desplegará tu sitio automáticamente

### Opción 2: Despliegue con CLI de Netlify

```bash
# Instalar CLI de Netlify globalmente
npm install -g netlify-cli

# Iniciar sesión en Netlify
netlify login

# Inicializar proyecto (solo la primera vez)
netlify init

# Desplegar preview
netlify deploy

# Desplegar a producción
netlify deploy --prod
```

### Configuración de Build

El proyecto está configurado con:

- **Node.js**: Versión 20 (especificada en `.nvmrc`)
- **Build command**: `npm run build` (incluye construcción del índice de búsqueda)
- **Publish directory**: `dist`
- **SSR**: Habilitado con adaptador de Netlify

### Archivos de Configuración

- `netlify.toml`: Configuración principal de Netlify
  - Comando de build
  - Headers de seguridad
  - Cache para assets estáticos
  - Redirecciones para SSR

- `astro.config.mjs`: Configuración de Astro
  - Adaptador de Netlify configurado
  - SSR habilitado
  - Integraciones (MDX, React, Sitemap)

### Variables de Entorno en Netlify

El proyecto detecta automáticamente la URL de Netlify. Si necesitas configurar manualmente:

1. Ve a **Site settings** → **Environment variables**
2. Agrega:
   - `SITE_URL`: URL completa de tu sitio (ej: `https://renovapctlaxcala.netlify.app`)

### Headers de Seguridad

El proyecto incluye headers de seguridad configurados en `netlify.toml`:
- X-Frame-Options
- X-XSS-Protection
- X-Content-Type-Options
- Referrer-Policy

### Cache de Assets

Los assets estáticos (imágenes, CSS, JS) están configurados con cache de 1 año para mejor performance.

## Estructura del Proyecto

```
renovaPcTlaxcala/
├── public/          # Assets estáticos (imágenes, favicon, etc.)
├── src/
│   ├── components/  # Componentes Astro y React
│   ├── content/     # Contenido (blogs, cards, slides)
│   ├── layouts/     # Layouts de página
│   ├── pages/       # Páginas del sitio
│   ├── styles/      # Estilos globales
│   └── consts.ts    # Constantes del sitio
├── astro.config.mjs # Configuración de Astro
├── netlify.toml     # Configuración de Netlify
└── package.json     # Dependencias y scripts
```

## Páginas Principales

- `/` - Página de inicio con hero section y servicios destacados
- `/servicios` - Detalle de todos los servicios ofrecidos
- `/nosotros` - Información sobre RenovaPC Tlaxcala
- `/contacto` - Formulario de contacto y enlaces a redes sociales

## Colores Corporativos

- **Azul fuerte**: `#003399` (HSL: 220 100% 30%)
- **Oro**: `#FFD700` (HSL: 51 100% 50%)

## Soporte

Para más información sobre el despliegue en Netlify, consulta:
- [Documentación oficial de Astro + Netlify](https://docs.astro.build/en/guides/integrations-guide/netlify/)
- [Documentación de Netlify](https://docs.netlify.com/)
