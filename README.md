# TERRA CHONTAL — sitio web gastronómico

Sitio estático construido con HTML5, CSS3 y JavaScript. No necesita PHP, base de datos ni servidor. Preparado para GitHub Pages.

## Abrir en Windows
1. Descarga y descomprime `terra-chontal.zip`.
2. Abre la carpeta `terra-chontal`.
3. Haz doble clic en `index.html` para verlo en tu navegador.
4. Para editarlo, abre la carpeta en Visual Studio Code.

## Publicar gratis en GitHub Pages
1. Inicia sesión en GitHub y crea un repositorio nuevo, por ejemplo `terra-chontal`.
2. Sube todos los archivos y la carpeta `assets` conservando la estructura.
3. En el repositorio entra a **Settings → Pages**.
4. En **Build and deployment**, selecciona **Deploy from a branch**.
5. Elige la rama `main` y la carpeta `/ (root)`, guarda.
6. Espera a que GitHub muestre la dirección pública del sitio en esa misma sección.

## Editar contenido
- `index.html`: textos institucionales, historia, contacto, horarios y estructura de secciones.
- `style.css`: colores, tipografías, tamaños, espaciados y diseño responsive. Variables de color al inicio del archivo.
- `data.js`: platillos, descripciones, precios de ejemplo, especialidades, datos curiosos y biografías del equipo.
- `script.js`: filtros del menú, fichas emergentes, galería, selector de equipo, navegación móvil y formulario de reservación.
- `assets/hero-terra-chontal.png`: imagen principal generada para el proyecto.

## Importante antes de publicar
- Los precios están marcados como **precios de ejemplo** porque el material original no especificó importes. Ajusta `data.js` con los precios reales o académicos que quieras presentar.
- El formulario de reservación valida los campos y abre un correo dirigido a `terrachontal@gmail.com` mediante `mailto:`. El visitante debe pulsar **Enviar** en su aplicación de correo. Un sitio estático no puede enviar correos por sí solo sin un servicio externo.
- Dirección, teléfono, WhatsApp, horarios y redes son datos de demostración; sustitúyelos por los reales.
- Las fotografías interiores y gastronómicas de tarjetas/galería se cargan desde Unsplash y requieren conexión a internet. La imagen hero está guardada localmente en `assets`. Sustituye las fotos externas por fotografías propias si cuentas con ellas y revisa sus licencias/atribuciones.
- Las tarjetas del equipo usan avatares tipográficos porque no se adjuntaron retratos individuales. Reemplázalos por fotos autorizadas si las tienes.
- El archivo del logotipo UDEA no venía adjunto por separado. El pie incluye un marcador temporal; coloca el logo institucional oficial cuando lo tengas.
- La especialidad “Tortuga en Verde” está adaptada con robalo, tal como se describe en el contenido entregado, sin utilizar tortuga.

## Compatibilidad
El proyecto es un sitio estático: rutas relativas, sin claves API ni datos sensibles. Las fuentes web y las imágenes remotas necesitan internet; el resto del código se ejecuta en el navegador.

## Fotografías del equipo
Coloca las fotos autorizadas en `assets/equipo/` con los nombres indicados en `assets/equipo/INSTRUCCIONES.txt`. No necesitas editar `script.js`: las rutas ya están configuradas. Si falta una foto, se mostrarán las iniciales.
