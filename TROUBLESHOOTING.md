# Troubleshooting - Error 404 en Netlify

## Problema: "Page not found" después del deploy

Si después de desplegar tu sitio en Netlify recibes un error 404, sigue estos pasos:

### 1. Verificar que el adaptador de Netlify esté correctamente configurado

El adaptador de Astro Netlify debe generar automáticamente:
- El archivo `_redirects` en `dist/`
- Las funciones de Netlify en `dist/.netlify/functions/`

**Solución**: No modifiques manualmente el archivo `_redirects`. El adaptador lo genera automáticamente.

### 2. Verificar la configuración de build

En `netlify.toml` debe estar configurado:

```toml
[build]
  command = "npm run build"
  publish = "dist"
```

### 3. Verificar que se use npm en lugar de pnpm

Si tu proyecto usa `pnpm` localmente pero Netlify usa `npm`, asegúrate de que:

- El script `prebuild` en `package.json` use `npm run` en lugar de `pnpm run`
- O configura Netlify para usar `pnpm` agregando:
  ```toml
  [build.environment]
    NPM_FLAGS = "--legacy-peer-deps"
  ```

### 4. Verificar los logs de build en Netlify

1. Ve a tu sitio en Netlify
2. Haz clic en "Deploys"
3. Selecciona el último deploy
4. Revisa los logs para ver si hay errores durante el build

Busca específicamente:
- ✅ "Build completed successfully"
- ✅ Mención de funciones de Netlify generadas
- ❌ Errores relacionados con `_redirects`
- ❌ Errores relacionados con funciones de Netlify

### 5. Verificar que las funciones se hayan generado

Después del build, en Netlify:

1. Ve a "Functions" en el menú de tu sitio
2. Deberías ver una función llamada `entry` o similar
3. Si no aparece, el adaptador no se está ejecutando correctamente

### 6. Verificar el archivo _redirects

El adaptador de Astro Netlify genera automáticamente un archivo `dist/_redirects` con contenido similar a:

```
/*    /.netlify/functions/entry   200
```

Para verificar:
1. En Netlify, ve a "Deploys"
2. Selecciona el deploy más reciente
3. Haz clic en "Browse deploy"
4. Busca el archivo `_redirects` en la raíz
5. Verifica que tenga el contenido correcto

### 7. Verificar variables de entorno

Si el problema persiste, verifica:

1. Ve a **Site settings** → **Environment variables**
2. Verifica que no haya variables que puedan estar causando conflictos
3. Si usas `SITE_URL`, asegúrate de que esté configurada correctamente

### 8. Limpiar y reconstruir

A veces Netlify puede tener caché de builds anteriores:

1. En Netlify, ve a **Site settings** → **Build & deploy**
2. Haz clic en **"Clear cache and retry deploy"**
3. O haz un nuevo deploy desde tu repositorio

### 9. Verificar la configuración de Astro

En `astro.config.mjs`:

```javascript
export default defineConfig({
  output: "server",  // ✅ Debe ser "server" para SSR
  adapter: netlify({
    edgeMiddleware: false,
  }),
  // ...
});
```

### 10. Probar localmente con preview

Antes de desplegar, prueba localmente:

```bash
npm run build
npm run preview
```

Si funciona localmente pero no en Netlify, el problema es específico de la configuración de Netlify.

## Soluciones Comunes

### Si el problema persiste después de verificar todo lo anterior:

1. **Eliminar y recrear el sitio en Netlify**:
   - A veces es más rápido eliminar y volver a crear el sitio
   - Asegúrate de tener una copia de seguridad del código

2. **Verificar la versión de Node.js**:
   - Netlify debe usar Node.js 20 (especificado en `.nvmrc`)
   - Verifica en **Site settings** → **Build & deploy** → **Environment**

3. **Contactar soporte de Netlify**:
   - Si nada funciona, contacta al soporte de Netlify con:
     - Los logs de build
     - La configuración de `netlify.toml`
     - La versión de Astro y el adaptador

## Checklist de Verificación

Antes de hacer un nuevo deploy, verifica:

- [ ] `package.json` tiene `"build": "astro build"` (sin comandos adicionales de _redirects)
- [ ] `netlify.toml` tiene `publish = "dist"`
- [ ] `astro.config.mjs` tiene `output: "server"`
- [ ] `astro.config.mjs` tiene `adapter: netlify()`
- [ ] El build se completa sin errores
- [ ] Las funciones de Netlify aparecen después del build
- [ ] El archivo `_redirects` se genera automáticamente

