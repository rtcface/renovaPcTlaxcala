# Guía de Despliegue - RenovaPC Tlaxcala

## Despliegue Rápido en Netlify

### Paso 1: Preparar el Repositorio

Asegúrate de que tu código esté en un repositorio Git (GitHub, GitLab, Bitbucket):

```bash
git add .
git commit -m "Preparar para deploy"
git push origin main
```

### Paso 2: Conectar con Netlify (Interfaz Web)

1. Ve a [app.netlify.com](https://app.netlify.com) e inicia sesión
2. Haz clic en **"Add new site"** → **"Import an existing project"**
3. Selecciona tu proveedor de Git (GitHub, GitLab, etc.)
4. Autoriza a Netlify y selecciona tu repositorio
5. Netlify detectará automáticamente la configuración desde `netlify.toml`

### Paso 3: Verificar Configuración

Netlify debería detectar automáticamente:
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Node version**: `20`

Si no se detecta automáticamente, configura manualmente:
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Node version**: `20`

### Paso 4: Variables de Entorno (Opcional)

Si necesitas configurar la URL del sitio manualmente:

1. En Netlify, ve a **Site settings** → **Environment variables**
2. Haz clic en **"Add variable"**
3. Agrega:
   - **Key**: `SITE_URL`
   - **Value**: Tu dominio (ej: `https://renovapctlaxcala.netlify.app`)

**Nota**: Netlify proporciona automáticamente la URL, así que normalmente no necesitas configurar esto.

### Paso 5: Desplegar

1. Haz clic en **"Deploy site"**
2. Espera a que termine el build (puede tardar 2-5 minutos)
3. Una vez completado, tu sitio estará disponible en la URL proporcionada por Netlify

## Despliegue con CLI de Netlify

### Instalación

```bash
npm install -g netlify-cli
```

### Inicializar Proyecto

```bash
# Iniciar sesión
netlify login

# Inicializar proyecto (solo primera vez)
netlify init
```

Durante la inicialización:
- Selecciona "Create & configure a new site"
- Elige un nombre para tu sitio o déjalo en blanco para un nombre aleatorio
- Configura el build command: `npm run build`
- Configura el publish directory: `dist`

### Desplegar

```bash
# Preview (para probar antes de producción)
netlify deploy

# Producción
netlify deploy --prod
```

## Verificar el Despliegue

Después del despliegue:

1. Visita la URL proporcionada por Netlify
2. Verifica que todas las páginas carguen correctamente:
   - `/` - Página principal
   - `/servicios` - Servicios
   - `/nosotros` - Sobre nosotros
   - `/contacto` - Contacto

3. Verifica que los estilos y colores se vean correctos
4. Prueba el formulario de contacto (si está configurado)

## Actualizaciones Futuras

Cada vez que hagas push a tu repositorio:

```bash
git add .
git commit -m "Descripción de cambios"
git push origin main
```

Netlify detectará automáticamente los cambios y desplegará una nueva versión.

## Troubleshooting

### Error: Build failed

1. Revisa los logs de build en Netlify
2. Verifica que todas las dependencias estén instaladas
3. Asegúrate de que Node.js versión 20 esté configurada

### Error: Function timeout

- El proyecto usa SSR, verifica que el adaptador de Netlify esté correctamente configurado
- Revisa que `netlify.toml` tenga la configuración correcta

### Variables de entorno no funcionan

- Asegúrate de que las variables estén configuradas en Netlify
- Verifica que los nombres de las variables coincidan exactamente

## Recursos Adicionales

- [Documentación de Astro + Netlify](https://docs.astro.build/en/guides/integrations-guide/netlify/)
- [Documentación de Netlify](https://docs.netlify.com/)
- [Netlify Community](https://answers.netlify.com/)

