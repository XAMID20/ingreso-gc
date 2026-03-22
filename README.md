# Ingreso GC – DM Forma
## Plataforma web de preparación oposición Guardia Civil

**Versión:** 1.0 · **Año:** 2025 · **Actualizable anualmente**

---

## 📁 Estructura de archivos

```
/
├── index.html              ← Página principal (Home)
├── guardia-civil.html      ← Historia, funciones, especialidades y valores
├── proceso-selectivo.html  ← Todas las fases del proceso (con tabs)
├── normativa.html          ← Temario oficial + marco legal
├── faq.html                ← 20 preguntas frecuentes con buscador
├── actualidad.html         ← Noticias sobre convocatoria
├── login.html              ← Acceso alumnos y profesores
├── panel-alumno.html       ← Panel privado del alumno
├── panel-profesor.html     ← Panel administrativo del profesor
├── css/
│   └── styles.css          ← Estilos compartidos
└── js/
    └── main.js             ← JavaScript compartido (Auth, Progreso, Nav)
```

---

## 🚀 Publicar en GitHub Pages

### Paso 1: Crear repositorio
1. Ve a https://github.com y crea una cuenta si no tienes
2. Haz clic en **"New repository"**
3. Nombre sugerido: `ingreso-gc`
4. Selecciona **Public**
5. Haz clic en **"Create repository"**

### Paso 2: Subir los archivos
**Opción A – Interfaz web (recomendada):**
1. Abre el repositorio creado
2. Haz clic en **"uploading an existing file"**
3. Arrastra TODOS los archivos y carpetas (`css/`, `js/`, todos los `.html`)
4. Haz clic en **"Commit changes"**

**Opción B – Git por terminal:**
```bash
git clone https://github.com/TU-USUARIO/ingreso-gc.git
# Copia todos los archivos en la carpeta
git add .
git commit -m "Versión 1.0 - Fase 1 completa"
git push origin main
```

### Paso 3: Activar GitHub Pages
1. Ve a **Settings** del repositorio
2. Menú izquierdo: **Pages**
3. Source: **Deploy from a branch**
4. Branch: **main** · Folder: **/ (root)**
5. Haz clic en **Save**
6. Espera 1-2 minutos
7. Tu web estará en: `https://TU-USUARIO.github.io/ingreso-gc/`

---

## 🔑 Acceso a la plataforma (demo)

| Rol | Usuario | Contraseña |
|-----|---------|------------|
| Alumno | `alumno` | `1234` |
| Profesor | `profesor` | `1234` |

> **Nota:** El sistema de login usa `localStorage`. Los datos se guardan en el navegador del usuario. Para un sistema de login real (con base de datos) consulta la sección de Roadmap v2.0.

---

## 📅 Actualización anual (cada convocatoria)

### Cuando salga nueva convocatoria:

#### 1. Actualizar datos en `normativa.html`
Localiza el bloque con los datos de convocatoria y actualiza:
```html
<!-- Busca estas líneas y actualiza los datos -->
Resolución 160/38240/2025  → número de la nueva resolución
BOE nº 128, 28 mayo 2025   → nuevo BOE
3.118 plazas               → nuevas plazas
```

#### 2. Actualizar `index.html`
En la sección `.hero__eyebrow` y en la sección de convocatoria:
```html
<!-- Actualiza estas cifras -->
<span>Convocatoria 2026 activa · BOE nº XXX</span>
```

#### 3. Actualizar `proceso-selectivo.html`
Tabla de marcas físicas en la sección `#fase-fisicas`.

#### 4. Añadir nuevas preguntas al banco
En `panel-alumno.html`, localiza el array `BANCO` y añade nuevas preguntas siguiendo el formato:
```javascript
{
  id: 21,              // ID único (siguiente al último)
  tema: 15,            // Número de tema
  preg: 'Enunciado...',
  ops: ['A', 'B', 'C', 'D'],
  ok: 1,               // Índice de la respuesta correcta (0-3)
  exp: 'Explicación de la respuesta correcta con referencia a la norma...'
}
```

#### 5. Si cambia el temario
Actualizar el array `TEMAS` en `panel-alumno.html` y el grid de `normativa.html`.

---

## 📄 Documentos de referencia utilizados

| Documento | Fecha | Uso |
|-----------|-------|-----|
| Resolución 160/38240/2025 | 23 mayo 2025 | Convocatoria 2025 · Datos y plazas |
| BOE nº 128 | 28 mayo 2025 | Publicación oficial convocatoria |
| Resolución 3 octubre 2022 | 3 oct. 2022 | Temario oficial vigente 25 temas |
| Simulacro examen GC 2024 (Aspirantes.es) | 30 jul. 2024 | Banco de preguntas tipo test |

---

## ✅ Funcionalidades incluidas (v1.0)

**Área pública:**
- [x] Home con estadísticas, proceso selectivo y convocatoria 2025
- [x] Historia, funciones, especialidades y valores de la GC
- [x] Proceso selectivo con tabs por fase (requisitos, concurso, teórico, psicotécnica, físicas, entrevista, médico)
- [x] Tabla de marcas físicas 2025 oficial
- [x] Normativa con temario completo 25 temas y marco legal
- [x] FAQ con buscador y 20 preguntas (accordion)
- [x] Actualidad con noticias de la convocatoria

**Área privada:**
- [x] Login con localStorage (demo)
- [x] Panel alumno: inicio, temario con marcado de progreso, tests, recursos, foro
- [x] Tests con banco de 20 preguntas, temporizador, corrección, penalización y revisión
- [x] Panel profesor: resumen, alumnos, banco de preguntas, material, foro, convocatoria, config

**Técnico:**
- [x] Diseño responsive completo (móvil + escritorio)
- [x] SEO optimizado (meta tags, H1-H3, estructura semántica)
- [x] CSS compartido con variables para fácil personalización
- [x] Sin dependencias externas (solo Google Fonts)
- [x] Listo para GitHub Pages / Netlify

---

## 🗺️ Roadmap v2.0

- [ ] Integración Firebase / Supabase (login real, base de datos)
- [ ] Banco de preguntas ampliado (+400 preguntas por tema)
- [ ] Sistema de tests con historial y estadísticas reales
- [ ] Exportación de resultados a PDF
- [ ] Calculadora de nota de concurso-oposición
- [ ] Sistema de notificaciones por email
- [ ] PWA (Progressive Web App) para móvil
- [ ] Contenido desarrollado para cada uno de los 25 temas (Fase 2)

---

## 🎨 Personalización rápida

### Cambiar colores (css/styles.css)
```css
:root {
  --verde:        #1b5e35;   /* Verde principal */
  --dorado:       #c8960c;   /* Dorado/acento */
  --negro:        #111827;   /* Negro footer */
}
```

### Cambiar nombre de la plataforma
Busca y reemplaza `IngresoGC` y `DM Forma` en todos los archivos HTML.

---

## 📞 Soporte

Plataforma privada. No afiliada a la Guardia Civil ni al Ministerio del Interior.
Contenido basado en normativa oficial pública (BOE).

**Autor:** DM Forma · Preparación oposición Guardia Civil
