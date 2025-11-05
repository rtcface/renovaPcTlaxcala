
# Documento Técnico - Sitio Web RenovaPC Tlaxcala

## 1. Información General
**Nombre del Negocio:** RenovaPC Tlaxcala  
**Colores Corporativos:** Azul fuerte (#003399) y Oro (#FFD700)  
**Estilo Visual:** Tecnológico y moderno  
**Ubicación:** Calle 4 Ed. 42 Depto B, Felipe Santiago Xicoténcatl, 90030 Tlaxcala de Xicohténcatl, Tlax.  
**Redes Sociales:** WhatsApp, Facebook, Instagram  
**Servicios Principales:** Mantenimiento, limpieza, cambio de disco, instalación de Windows, optimización de equipos.  

---

## 2. Estructura del Sitio (para plantilla Astro)

### 2.1. Página de Inicio (`index.astro`)
**Objetivo:** Presentar la marca, los servicios principales y generar confianza inmediata.  
**Secciones:**
- **Hero Section:**  
  - Título: “¡Renueva tu PC y dale una segunda vida!”  
  - Subtítulo: “En RenovaPC Tlaxcala optimizamos, limpiamos e instalamos Windows para que tu equipo funcione como nuevo.”  
  - CTA: “Contáctanos por WhatsApp”  

- **Servicios Destacados:**  
  - Tarjetas con íconos para cada servicio:  
    - 💻 Optimización de equipos  
    - 🧹 Limpieza profesional  
    - 💽 Cambio de disco (HDD a SSD)  
    - 🪟 Instalación de Windows  
  - Texto breve por servicio (máx. 30 palabras).  

- **Testimonios de Clientes:**  
  - Sección con tres opiniones reales o simuladas.  
  - Formato tipo “cards” con nombre, foto y comentario.  

- **Contacto Rápido:**  
  - Botón flotante de WhatsApp  
  - Formulario simple con nombre, correo y mensaje.  

---

### 2.2. Página de Servicios (`servicios.astro`)
**Objetivo:** Mostrar detalles de cada servicio ofrecido.  
**Contenido recomendado:**
- **Optimización de equipos:**  
  “Mejoramos el rendimiento de tu PC eliminando procesos innecesarios y optimizando el sistema operativo.”  
- **Limpieza profesional:**  
  “Desarmamos y limpiamos tu computadora para mejorar la ventilación y evitar sobrecalentamientos.”  
- **Cambio de disco:**  
  “Reemplazamos tu disco duro por un SSD para aumentar la velocidad hasta 10 veces.”  
- **Instalación de Windows:**  
  “Instalamos versiones actualizadas y seguras de Windows con todos los controladores esenciales.”  

---

### 2.3. Página de Contacto (`contacto.astro`)
**Objetivo:** Facilitar la comunicación directa con el negocio.  
**Elementos:**  
- Formulario de contacto funcional (nombre, correo, mensaje).  
- Botones con enlaces directos:  
  - WhatsApp: `https://wa.me/52461715930`  
  - Facebook e Instagram (URLs a definir).  
- Mapa con ubicación (usar iframe de Google Maps).  

---

### 2.4. Página “Sobre Nosotros” (`nosotros.astro`)
**Objetivo:** Humanizar la marca y generar confianza local.  
**Contenido sugerido:**  
- Breve historia de la empresa:  
  “RenovaPC Tlaxcala nació con la misión de ayudar a las personas a aprovechar al máximo sus equipos de cómputo, ofreciendo soluciones accesibles y de calidad.”  
- Valores: Confianza, calidad, servicio local.  
- Imagen del equipo o del taller.  

---

## 3. SEO y Meta Tags
```html
<title>RenovaPC Tlaxcala | Optimización y Mantenimiento de Computadoras</title>
<meta name="description" content="RenovaPC Tlaxcala optimiza, limpia y repara computadoras para que funcionen como nuevas. ¡Dale una segunda vida a tu equipo!">
<meta name="keywords" content="Mantenimiento PC, Optimización, Limpieza de computadoras, Cambio de disco SSD, Instalación de Windows, Tlaxcala, RenovaPC">
<meta name="author" content="RenovaPC Tlaxcala">
```

---

## 4. Lista de Tags (para redes y SEO)
`#RenovaPC #TlaxcalaTech #PCRepair #Optimización #CambioDeDisco #InstalaciónWindows #LimpiezaPC #ReparaciónComputadoras #SoporteTécnico #HardwareUpgrade #PCPerformance`

---

## 5. Recomendaciones Técnicas (para el developer)
- **Framework:** Astro  
- **Lenguajes:** HTML, CSS, JavaScript (TailwindCSS recomendado).  
- **Integraciones sugeridas:**  
  - Formspree o Netlify Forms para el formulario de contacto.  
  - Google Maps Embed para ubicación.  
  - WhatsApp API para contacto directo.  
- **Estructura de componentes:**  
  - `/components/Header.astro`  
  - `/components/Footer.astro`  
  - `/components/ServiceCard.astro`  
  - `/pages/index.astro`, `/pages/servicios.astro`, `/pages/contacto.astro`, `/pages/nosotros.astro`  

---

## 6. Llamado a la Acción Final
> “No compres una PC nueva, ¡revívela con RenovaPC Tlaxcala!”

---

**Documento creado por:** ChatGPT (Prompt Engineer)  
**Fecha:** Octubre 2025  
