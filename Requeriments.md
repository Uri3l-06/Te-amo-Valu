# Especificación completa — App web para Valery

## 0. Propósito de este documento

Este documento contiene el contexto completo, requisitos, arquitectura, diseño, modelo de datos, flujo de pantallas, plan de implementación e instrucciones para crear una aplicación web llamada provisionalmente **“Un lugarcito para Val”**.

Este archivo será usado como guía para un agente de código, específicamente **OpenCode con Codex**, por lo tanto debe seguirse con precisión.

La aplicación no debe sentirse como una app corporativa ni como una landing page genérica. Debe sentirse como una experiencia emocional, elegante, cálida y moderna: una especie de **álbum digital de recuerdos**, con fotos, textos, chats recreados y soundtracks cortos por memoria.

---

# 1. Concepto general

## 1.1 Idea principal

Crear una aplicación web romántica y elegante para Valery, pensada como un regalo.

La app debe hacer que Valery:

- se emocione al verla;
- recuerde momentos bonitos;
- sienta cuánto le importa al creador;
- perciba intención, cuidado y dedicación;
- sienta que está entrando a un lugar íntimo y especial.

La app debe girar alrededor de recuerdos, no solo de imágenes sueltas. Cada recuerdo debe sentirse como una pequeña pieza emocional.

## 1.2 Nombre provisional

Nombre principal sugerido:

```text
Un lugarcito para Val
```

Otros nombres posibles, solo como referencia:

```text
La casita de nuestros recuerdos
Nuestro lugarcito
Para Valita
```

Para efectos del proyecto usar:

```text
Un lugarcito para Val
```

---

# 2. Principios de diseño emocional

La app debe sentirse:

- romántica;
- elegante;
- cálida;
- premium;
- moderna;
- íntima;
- emocional;
- suave;
- visualmente cuidada.

Debe evitar sentirse:

- infantil;
- exageradamente cursi;
- saturada de corazones;
- llena de glitter;
- genérica;
- corporativa;
- como una app bancaria o de dashboard;
- como una plantilla barata.

## 2.1 Estilo visual

Usar una estética clara, cálida y premium. La paleta debe mezclar tonos café, latte, crema y blush romántico.

Paleta sugerida:

```text
Cream:        #F8F1E7
Latte:        #D8BFA5
Soft Mocha:   #9B7653
Deep Coffee:  #4A3328
Blush:        #D9A6A6
Warm White:   #FFFDF9
```

La intención visual es una mezcla entre:

```text
café cálido + amor romántico + elegancia moderna
```

## 2.2 UI general

Usar:

- bordes redondeados;
- sombras suaves;
- transiciones sutiles;
- texturas tipo papel cuando aplique;
- polaroids elegantes;
- animaciones suaves;
- diseño responsive;
- composición limpia.

Evitar:

- rojo intenso dominante;
- corazones excesivos;
- íconos infantiles;
- animaciones pesadas;
- efectos demasiado brillantes;
- fuentes cursivas difíciles de leer.

---

# 3. Stack técnico requerido

Usar:

```text
Vite
React
Tailwind CSS
React Router
```

No implementar todavía:

```text
backend
base de datos
login real
autenticación
panel administrativo
subida dinámica de archivos
servicios externos
```

La app debe trabajar con datos locales en archivos `.js`.

---

# 4. Flujo principal de experiencia

El flujo principal debe ser:

```text
Portada emocional / Home
↓
Pantalla separada de menú tipo polaroid
↓
Secciones principales:
  - Galería
  - Carta
  - Sorpresa
```

La portada será el inicio oficial. No crear una home adicional redundante.

Rutas esperadas:

```text
/                  HomePage
/menu              MenuPage
/gallery           GalleryPage
/gallery/:slug     MemoryDetailPage
/letter            LetterPage
/surprise          SurprisePage
```

---

# 5. Requisitos funcionales

## RF-01 — Portada emocional / Inicio

La aplicación debe iniciar con una portada emocional.

Debe incluir:

- imagen de fondo de la pareja tomándose de la mano;
- tratamiento visual abstracto/elegante;
- mensaje emocional breve para Valery;
- botón principal para entrar;
- estética cálida y premium.

La imagen de fondo debe sentirse presente. No debe quedar tan oscurecida o difuminada que se pierda.

El peso visual debe ser balanceado:

```text
imagen + texto
```

Pero la foto de fondo no debe olvidarse.

## 5.1.1 Texto sugerido para portada

Usar como placeholder inicial:

```text
Hola, Valita.

Hice este lugarcito porque hay recuerdos que no me gusta dejar perderse, y porque contigo hasta los momentos simples se sienten como algo que vale la pena guardar.

Quise hacerte una casita pequeña, bonita y nuestra, para que puedas entrar cuando quieras recordar un poquito de todo lo lindo que hemos vivido.
```

Este texto puede ajustarse después, pero debe mantener el tono:

- íntimo;
- tierno;
- emocional;
- no desesperado;
- no dependiente;
- cálido.

## 5.1.2 Botón principal

Texto del botón:

```text
Abrir nuestro lugarcito
```

El botón debe navegar a:

```text
/menu
```

---

## RF-02 — Pantalla de menú tipo polaroid

Después de la portada debe aparecer una pantalla separada de menú.

Esta pantalla debe sentirse como “abrir algo especial”.

El menú debe usar polaroids elegantes minimalistas, no botones tradicionales.

Secciones:

```text
Galería
Carta
Sorpresa
```

Cada polaroid debe mostrar:

- nombre de la sección;
- mini frase;
- pequeño dato o texto secundario;
- interacción suave en hover o tap.

Ejemplos de contenido:

```text
Galería
Momentitos que guardé contigo
15 recuerdos

Carta
Algo que quería darte con calma
Una carta para ti

Sorpresa
Un detallito diferente cada vez
A ver qué te toca hoy
```

## 5.2.1 Comportamiento del menú

En desktop:

- las polaroids pueden verse como un pequeño collage ordenado;
- puede haber rotaciones sutiles;
- hover suave;
- elevación ligera;
- aparición de datos secundarios.

En móvil:

- las polaroids deben apilarse o acomodarse de forma clara;
- tap debe mostrar la información o navegar;
- no debe perderse usabilidad.

---

## RF-03 — Galería de recuerdos

La galería es el corazón de la aplicación.

Debe mostrar entre 10 y 15 memorias.

Cada memoria debe representar una foto, un chat recreado o un texto especial.

Tipos permitidos:

```text
photo
chat
text
```

Distribución estimada inicial:

```text
8 fotos de la pareja juntos
5 fotos de Valery
algunas memorias tipo chat recreado
algunos textos especiales
```

## 5.3.1 Contenido visible en tarjeta de galería

Cada tarjeta debe mostrar:

- imagen o preview visual;
- título;
- fecha aproximada;
- frase corta;
- si aplica, botón para entrar a vista inmersiva.

No mostrar ícono musical en la tarjeta, aunque todas las memorias tengan soundtrack. Como todas tendrán soundtrack, el ícono musical sería ruido visual.

## 5.3.2 Jerarquía visual

La galería debe tener jerarquía por tamaño.

Algunas memorias marcadas como `featured: true` serán un poco más grandes que otras.

Importante:

- no exagerar tamaños;
- no crear una memoria principal fija al inicio;
- mantener balance estético;
- crear variedad visual sin desorden.

## 5.3.3 Memorias especiales

Algunas memorias serán especiales.

Aproximadamente:

```text
3 a 5 memorias especiales
```

Una memoria especial se marca con:

```js
immersive: true
```

Estas memorias deben tener una vista larga propia.

El texto del botón para abrir la vista inmersiva debe ser:

```text
Para más amor…
```

Respetar el uso del carácter de puntos suspensivos elegante `…`.

---

## RF-04 — Vista larga de memoria / MemoryDetailPage

Las memorias especiales deben abrir una página propia con scroll vertical.

Ruta:

```text
/gallery/:slug
```

La vista debe sentirse más emocional, inmersiva y cinematográfica.

Debe incluir:

1. imagen principal;
2. título;
3. fecha aproximada;
4. mini reproductor de audio;
5. frase emocional principal;
6. texto largo;
7. elementos decorativos visuales;
8. transiciones suaves;
9. botón para volver.

Solo debe haber una imagen principal por memoria especial. Sin embargo, el scroll debe sentirse completo usando:

- composición visual;
- texto;
- separadores;
- detalles decorativos;
- frases;
- espacio negativo elegante.

## 5.4.1 Botón de regreso

Texto del botón:

```text
Volver a la puertita de la casita
```

Este botón debe regresar a:

```text
/gallery
```

---

## RF-05 — Soundtrack por memoria

Todas las memorias deben tener soundtrack.

Cada soundtrack será un archivo MP3 recortado.

Duración aproximada:

```text
30 segundos
```

Los soundtracks estarán en:

```text
/public/soundtracks/
```

Ejemplo:

```text
/public/soundtracks/primer-mensaje.mp3
/public/soundtracks/foto-001.mp3
```

Cada memoria tendrá:

```js
soundtrackPath
soundtrackTitle
```

## 5.5.1 Reglas de audio

- El audio no debe reproducirse automáticamente sin interacción del usuario.
- Muchos navegadores bloquean autoplay con sonido.
- La reproducción debe iniciar cuando el usuario interactúe con el mini reproductor.
- Solo un audio puede sonar a la vez.
- Si otro audio empieza, el anterior debe detenerse.
- Si se cierra una memoria o se desmonta el componente, el audio debe detenerse.

---

## RF-06 — Mini reproductor de audio

Crear un componente reutilizable:

```text
AudioBubblePlayer
```

Debe ser pequeño, elegante y discreto.

Debe aparecer solo cuando se abre una memoria o en la vista detalle, no en todas las tarjetas de galería.

Controles mínimos:

```text
play / pause
mute / unmute
nombre del soundtrack
barra de progreso
```

El reproductor debe sentirse como una “burbujita” elegante.

Debe respetar la paleta cálida y premium.

No debe parecer un reproductor gigante de música.

---

## RF-07 — Chats recreados

Los chats no deben usarse como screenshots reales.

Deben recrearse visualmente mediante un componente.

Crear componente:

```text
ChatMemory
```

Debe mostrar mensajes tipo burbuja, pero con diseño elegante.

Debe usarse para:

```text
primer mensaje que Valery mandó
otra ocasión futura aún no definida
```

Los chats deben tener estilo visual diferente a las fotos, pero coherente con el diseño general.

No copiar visualmente WhatsApp de forma exacta. Inspirarse en burbujas de conversación, pero con estética propia.

---

## RF-08 — Carta

La carta debe sentirse lo más parecido posible a leer una carta real.

Ruta:

```text
/letter
```

Debe incluir:

- sobre cerrado inicial;
- interacción para abrir;
- animación o transición sutil;
- hoja tipo papel;
- textura cálida;
- sombras suaves;
- tipografía elegante y legible;
- experiencia íntima.

Crear componentes sugeridos:

```text
LetterPage
Envelope
```

El texto final de la carta será proporcionado después. Usar placeholder por ahora.

## 5.8.1 Recomendación tipográfica

No usar una fuente demasiado cursiva para todo el cuerpo, porque puede afectar legibilidad.

Usar:

- título con estilo manuscrito elegante;
- cuerpo con fuente legible;
- sensación de carta real.

---

## RF-09 — Sorpresa

Ruta:

```text
/surprise
```

La sección sorpresa debe mostrar contenido aleatorio.

Tipos permitidos:

```text
solo texto
foto + frase
```

No incluir soundtrack en sorpresa por ahora.

Debe evitar repetir el mismo contenido inmediatamente.

Debe usar solo memorias o elementos marcados como:

```js
surpriseEligible: true
```

Crear lógica reutilizable en:

```text
src/shared/utils/random.js
```

La sorpresa debe sentirse ligera, dulce y elegante.

---

# 6. Requisitos no funcionales

## RNF-01 — Responsive

La app debe funcionar bien en:

```text
desktop
tablet
móvil
```

Aunque el diseño sea premium y visual, debe cuidarse especialmente que en móvil:

- la portada se vea bien;
- las polaroids sean legibles;
- la galería no se rompa;
- la carta sea cómoda de leer;
- el mini reproductor no estorbe.

## RNF-02 — Rendimiento

La app debe estar preparada para fotos y audios.

Recomendaciones:

```text
imágenes comprimidas
preferir WebP/JPG optimizado
audios MP3 recortados
evitar archivos pesados
lazy loading para imágenes cuando aplique
```

## RNF-03 — Mantenibilidad

El código debe organizarse por features.

No poner todo en:

```text
App.jsx
```

Separar:

- páginas;
- componentes;
- datos;
- utilidades;
- componentes compartidos;
- lógica de audio.

## RNF-04 — Escalabilidad

La app debe quedar preparada para agregar funciones futuras, aunque no se implementen ahora.

Posibles futuras funcionalidades:

```text
timeline
calendario especial
mapa de lugares
audios personales
mensajes secretos
panel admin
login
```

No implementar todavía.

Solo dejar arquitectura limpia para que puedan agregarse después.

## RNF-05 — Privacidad

No hay pantalla de acceso simbólica.

La app se publicará en algún momento, no será solo local.

Por eso:

- no usar información excesivamente sensible;
- no subir fotos innecesariamente privadas;
- evitar exponer datos personales de terceros;
- usar nombres de archivos simples y no reveladores.

## RNF-06 — Accesibilidad mínima

Debe cuidarse:

- contraste suficiente;
- botones claros;
- navegación por teclado básica;
- textos legibles;
- estados hover/focus visibles;
- alt text para imágenes.

---

# 7. Modelo de datos

La entidad principal debe llamarse:

```text
MemoryItem
```

No llamarla `Photo`, porque no todas las memorias serán fotos.

Archivo sugerido:

```text
src/features/gallery/memories.data.js
```

## 7.1 Estructura de MemoryItem

```js
{
  id: "memory-001",
  slug: "primer-mensaje",
  type: "chat", // "photo" | "chat" | "text"
  title: "El primer mensajito",
  date: "Aproximadamente junio de 2025",
  shortFeeling: "Desde ahí algo empezó a sentirse distinto.",
  longText: "Aquí irá el texto largo de esta memoria.",
  imagePath: null,
  soundtrackPath: "/soundtracks/primer-mensaje.mp3",
  soundtrackTitle: "Nombre del soundtrack",
  category: "chat",
  featured: true,
  immersive: true,
  surpriseEligible: true,
  displayOrder: 1,
  chatMessages: [
    {
      from: "valery",
      text: "Aquí va el primer mensaje que ella mandó."
    }
  ]
}
```

## 7.2 Campos

### `id`

Identificador único interno.

Ejemplo:

```js
id: "memory-001"
```

### `slug`

Se usa para rutas.

Ejemplo:

```js
slug: "primer-mensaje"
```

Ruta resultante:

```text
/gallery/primer-mensaje
```

### `type`

Tipo de memoria:

```text
photo
chat
text
```

### `title`

Título visible de la memoria.

### `date`

Fecha aproximada.

Ejemplos:

```text
Aproximadamente junio de 2025
Un día bonito
Cuando empezamos a hablar más
```

No exigir fechas exactas.

### `shortFeeling`

Frase corta emocional.

Debe mostrarse en tarjeta.

### `longText`

Texto largo para memoria inmersiva.

Puede estar vacío si la memoria no es inmersiva.

### `imagePath`

Ruta de imagen.

Para fotos:

```js
imagePath: "/memories/foto-001.jpg"
```

Para chats puede ser `null`.

### `soundtrackPath`

Ruta del MP3.

Ejemplo:

```js
soundtrackPath: "/soundtracks/foto-001.mp3"
```

### `soundtrackTitle`

Nombre visible del soundtrack.

### `category`

Categoría interna, no visible.

Ejemplos:

```text
together
valery
chat
special
soft-moment
```

### `featured`

Indica si la tarjeta se ve un poco más grande.

### `immersive`

Indica si tiene página larga.

### `surpriseEligible`

Indica si puede salir en sorpresa.

### `displayOrder`

Controla orden visual.

### `chatMessages`

Solo para memorias tipo chat.

---

# 8. Datos placeholder sugeridos

Crear de 10 a 15 memorias placeholder.

Ejemplo mínimo:

```js
export const memories = [
  {
    id: "memory-001",
    slug: "primer-mensaje",
    type: "chat",
    title: "El primer mensajito",
    date: "Aproximadamente junio de 2025",
    shortFeeling: "Desde ahí algo empezó a sentirse distinto.",
    longText:
      "Hay mensajes que parecen simples, pero después uno entiende que marcaron el inicio de algo muy bonito.",
    imagePath: null,
    soundtrackPath: "/soundtracks/primer-mensaje.mp3",
    soundtrackTitle: "Soundtrack del primer mensajito",
    category: "chat",
    featured: true,
    immersive: true,
    surpriseEligible: true,
    displayOrder: 1,
    chatMessages: [
      {
        from: "valery",
        text: "Aquí irá el primer mensaje real que ella mandó."
      }
    ]
  },
  {
    id: "memory-002",
    slug: "tomados-de-la-mano",
    type: "photo",
    title: "Tomaditos de la mano",
    date: "Un día bonito",
    shortFeeling: "Esta foto me recuerda que hay momentos simples que se sienten enormes.",
    longText:
      "A veces una foto no necesita explicar demasiado. Solo verla me recuerda lo bonito que se siente caminar contigo, estar cerca y sentir que ese momento era nuestro.",
    imagePath: "/memories/foto-001.jpg",
    soundtrackPath: "/soundtracks/foto-001.mp3",
    soundtrackTitle: "Soundtrack de este recuerdo",
    category: "together",
    featured: true,
    immersive: true,
    surpriseEligible: true,
    displayOrder: 2
  },
  {
    id: "memory-003",
    slug: "tu-sonrisa",
    type: "photo",
    title: "Tu sonrisa",
    date: "Aproximadamente este año",
    shortFeeling: "Tu sonrisa tiene esa forma bonita de cambiarme el día.",
    longText: "",
    imagePath: "/memories/foto-002.jpg",
    soundtrackPath: "/soundtracks/foto-002.mp3",
    soundtrackTitle: "Soundtrack de tu sonrisa",
    category: "valery",
    featured: false,
    immersive: false,
    surpriseEligible: true,
    displayOrder: 3
  }
];
```

---

# 9. Estructura de carpetas requerida

Crear una estructura parecida a esta:

```text
src/
├── app/
│   ├── App.jsx
│   └── routes.jsx
│
├── layout/
│   ├── MainLayout.jsx
│   └── PolaroidMenu.jsx
│
├── features/
│   ├── home/
│   │   └── HomePage.jsx
│   │
│   ├── menu/
│   │   └── MenuPage.jsx
│   │
│   ├── gallery/
│   │   ├── GalleryPage.jsx
│   │   ├── MemoryCard.jsx
│   │   ├── MemoryDetailPage.jsx
│   │   ├── MemoryModal.jsx
│   │   ├── ChatMemory.jsx
│   │   └── memories.data.js
│   │
│   ├── letter/
│   │   ├── LetterPage.jsx
│   │   └── Envelope.jsx
│   │
│   └── surprise/
│       └── SurprisePage.jsx
│
├── shared/
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── SectionTitle.jsx
│   │   └── AudioBubblePlayer.jsx
│   │
│   └── utils/
│       ├── audioManager.js
│       └── random.js
│
├── main.jsx
└── index.css
```

También crear carpetas públicas:

```text
public/
├── memories/
│   ├── foto-001.jpg
│   ├── foto-002.jpg
│   └── placeholder.jpg
│
├── soundtracks/
│   ├── primer-mensaje.mp3
│   ├── foto-001.mp3
│   └── foto-002.mp3
│
└── backgrounds/
    └── hands-background.jpg
```

Usar placeholders si los archivos reales todavía no existen.

---

# 10. Componentes principales

## 10.1 HomePage

Responsabilidades:

- mostrar portada emocional;
- usar background image;
- mostrar texto para Valery;
- botón para ir a `/menu`.

Debe sentirse como inicio de regalo.

## 10.2 MenuPage

Responsabilidades:

- mostrar menú tipo polaroid;
- navegar a galería, carta y sorpresa;
- mostrar mini frases;
- mantener estética elegante.

## 10.3 GalleryPage

Responsabilidades:

- leer `memories.data.js`;
- ordenar por `displayOrder`;
- renderizar tarjetas;
- aplicar jerarquía visual con `featured`;
- abrir modal o ruta detalle según `immersive`.

## 10.4 MemoryCard

Responsabilidades:

- mostrar preview;
- manejar estilos para `photo`, `chat`, `text`;
- mostrar título, fecha y frase;
- si `immersive`, mostrar link “Para más amor…”.

## 10.5 MemoryDetailPage

Responsabilidades:

- leer `slug` desde React Router;
- buscar memoria;
- si no existe, mostrar estado de error elegante;
- mostrar vista inmersiva;
- incluir `AudioBubblePlayer`;
- permitir scroll;
- botón de regreso.

## 10.6 MemoryModal

Responsabilidades:

- mostrar vista compacta para memorias no inmersivas;
- incluir audio si se abre memoria;
- cerrar correctamente;
- detener audio al cerrar.

## 10.7 ChatMemory

Responsabilidades:

- representar chats recreados;
- usar burbujas de mensaje;
- diferenciar visualmente mensajes de Valery y del creador;
- mantener estética premium.

## 10.8 AudioBubblePlayer

Responsabilidades:

- reproducir soundtrack;
- pausar;
- silenciar;
- mostrar título;
- mostrar progreso;
- detener otros audios;
- detener al desmontarse.

## 10.9 LetterPage / Envelope

Responsabilidades:

- mostrar sobre cerrado;
- abrir carta con interacción;
- simular papel real;
- mostrar texto placeholder.

## 10.10 SurprisePage

Responsabilidades:

- elegir aleatoriamente sorpresa;
- evitar repetir la anterior;
- mostrar solo texto o foto + frase;
- usar `surpriseEligible`.

---

# 11. Lógica de audio

Crear un manager sencillo.

Archivo sugerido:

```text
src/shared/utils/audioManager.js
```

Objetivo:

- asegurar que solo un audio suene a la vez;
- pausar audio anterior cuando empieza uno nuevo;
- limpiar audio cuando se cierre vista/modal.

Pseudológica:

```js
let currentAudio = null;

export function registerPlayingAudio(audioElement) {
  if (currentAudio && currentAudio !== audioElement) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  currentAudio = audioElement;
}

export function clearCurrentAudio(audioElement) {
  if (currentAudio === audioElement) {
    currentAudio = null;
  }
}
```

El componente `AudioBubblePlayer` debe usar esta utilidad.

---

# 12. Lógica de sorpresa

Archivo sugerido:

```text
src/shared/utils/random.js
```

Debe incluir función para evitar repetir el mismo elemento inmediatamente.

Pseudológica:

```js
export function getRandomItemWithoutImmediateRepeat(items, lastItemId) {
  const availableItems = items.filter(item => item.id !== lastItemId);

  if (availableItems.length === 0) {
    return items[0];
  }

  const index = Math.floor(Math.random() * availableItems.length);
  return availableItems[index];
}
```

La sorpresa debe usar elementos con:

```js
surpriseEligible: true
```

---

# 13. Diseño por página

## 13.1 Home

Sensación:

```text
abrir un regalo
entrar a un lugar íntimo
emocional pero elegante
```

Elementos:

- background de manos;
- overlay cálido;
- card o bloque de texto;
- botón principal.

## 13.2 Menu

Sensación:

```text
puertitas de una casita emocional
polaroids cuidadas
navegación juguetona
```

No hacer menú horizontal tradicional como navbar de empresa.

## 13.3 Gallery

Sensación:

```text
álbum premium
recuerdos acomodados con intención
variedad visual
```

Usar grilla responsive.

## 13.4 Memory Detail

Sensación:

```text
mini historia
recuerdo profundo
scroll emocional
```

No llenar todo de elementos. Usar espacio, ritmo y texto.

## 13.5 Letter

Sensación:

```text
leer una carta real
abrir un sobre
momento íntimo
```

## 13.6 Surprise

Sensación:

```text
detalle ligero
algo inesperado
sonrisa rápida
```

---

# 14. Textos importantes

## 14.1 Botones definidos

```text
Abrir nuestro lugarcito
Para más amor…
Volver a la puertita de la casita
```

## 14.2 Frases placeholder para menú

```text
Galería
Momentitos que guardé contigo

Carta
Algo que quería darte con calma

Sorpresa
Un detallito diferente cada vez
```

---

# 15. Criterios de aceptación

La primera versión se considera correcta si cumple:

## General

- La app corre correctamente con Vite.
- Las rutas funcionan.
- El diseño respeta la estética cálida, premium y romántica.
- No parece una app corporativa.
- No está todo en `App.jsx`.

## Home

- Muestra portada emocional.
- Usa imagen de fondo.
- Tiene botón “Abrir nuestro lugarcito”.
- Navega a `/menu`.

## Menu

- Muestra polaroids elegantes.
- Permite navegar a galería, carta y sorpresa.
- Tiene hover/tap sutil.

## Gallery

- Muestra memorias desde `memories.data.js`.
- Soporta tipos `photo`, `chat`, `text`.
- Muestra título, fecha y frase corta.
- Aplica jerarquía visual con `featured`.
- No muestra ícono musical en tarjetas.
- Las memorias inmersivas tienen botón “Para más amor…”.

## Memory Detail

- Funciona con `/gallery/:slug`.
- Muestra una memoria según slug.
- Incluye mini reproductor.
- Tiene scroll.
- Tiene botón “Volver a la puertita de la casita”.
- Si el slug no existe, muestra error elegante.

## Audio

- No autoplay sin interacción.
- Play/pause funciona.
- Mute/unmute funciona.
- Progreso funciona.
- Solo un audio puede sonar a la vez.
- Audio se detiene al cerrar modal o salir de detalle.

## Chat

- Los chats se recrean visualmente.
- No usa screenshots.
- Tiene estilo distinto a fotos, pero coherente.

## Letter

- Muestra sobre.
- Permite abrir carta.
- Muestra papel/carta.
- Placeholder legible.

## Surprise

- Muestra texto o foto + frase.
- Usa solo elementos `surpriseEligible`.
- Evita repetición inmediata.

## Responsive

- Se ve bien en móvil.
- Se ve bien en desktop.
- No rompe layouts.

---

# 16. Plan de implementación para OpenCode/Codex

## Fase 1 — Crear proyecto base

1. Crear proyecto Vite + React.
2. Instalar Tailwind CSS.
3. Instalar React Router.
4. Configurar rutas.
5. Crear estructura de carpetas.
6. Crear paleta base en Tailwind o clases globales.

Resultado esperado:

```text
App base funcionando con rutas vacías.
```

---

## Fase 2 — Crear páginas principales

Crear:

```text
HomePage
MenuPage
GalleryPage
MemoryDetailPage
LetterPage
SurprisePage
```

Cada página debe renderizar algo básico.

Resultado esperado:

```text
Navegación funcional entre páginas.
```

---

## Fase 3 — Crear data model

Crear:

```text
src/features/gallery/memories.data.js
```

Con 10 a 15 memorias placeholder.

Cada memoria debe seguir el modelo `MemoryItem`.

Resultado esperado:

```text
La galería puede renderizar datos reales desde archivo.
```

---

## Fase 4 — Crear Home emocional

Implementar:

- background;
- overlay;
- texto;
- botón;
- navegación a `/menu`;
- responsive.

Resultado esperado:

```text
Portada emocional lista.
```

---

## Fase 5 — Crear menú polaroid

Implementar:

- polaroids elegantes;
- secciones Galería, Carta, Sorpresa;
- hover/tap;
- navegación.

Resultado esperado:

```text
Menú visual listo.
```

---

## Fase 6 — Crear galería

Implementar:

- `MemoryCard`;
- grid responsive;
- jerarquía con `featured`;
- soporte visual para photo/chat/text;
- botón “Para más amor…”;
- modal para no inmersivas o vista compacta.

Resultado esperado:

```text
Galería funcional.
```

---

## Fase 7 — Crear audio player

Implementar:

- `AudioBubblePlayer`;
- `audioManager.js`;
- play/pause;
- mute;
- progreso;
- detener audios previos.

Resultado esperado:

```text
Audio controlado correctamente.
```

---

## Fase 8 — Crear MemoryDetailPage

Implementar:

- búsqueda por slug;
- vista inmersiva;
- scroll;
- imagen principal;
- texto largo;
- audio player;
- botón de regreso.

Resultado esperado:

```text
Memorias especiales funcionales.
```

---

## Fase 9 — Crear ChatMemory

Implementar:

- burbujas elegantes;
- soporte para mensajes de Valery y creador;
- integración con tarjetas y detalle.

Resultado esperado:

```text
Chats recreados sin screenshots.
```

---

## Fase 10 — Crear carta

Implementar:

- sobre cerrado;
- animación/interacción de apertura;
- papel;
- texto placeholder;
- estética realista.

Resultado esperado:

```text
Carta visual lista.
```

---

## Fase 11 — Crear sorpresa

Implementar:

- random;
- evitar repetición;
- soportar texto o foto + frase;
- diseño elegante.

Resultado esperado:

```text
Sorpresa funcional.
```

---

## Fase 12 — Pulido

Revisar:

- responsive;
- spacing;
- sombras;
- colores;
- accesibilidad;
- errores;
- estados vacíos;
- archivos inexistentes;
- fallback de imágenes.

Resultado esperado:

```text
MVP completo y estable.
```

---

# 17. Instrucciones estrictas para el agente

El agente debe obedecer lo siguiente:

1. No poner toda la lógica en `App.jsx`.
2. No implementar backend.
3. No implementar login.
4. No usar base de datos.
5. No usar screenshots reales para chats.
6. No crear un diseño infantil.
7. No saturar con corazones.
8. No usar autoplay de audio sin interacción.
9. No permitir que varios audios suenen al mismo tiempo.
10. No romper responsive.
11. No eliminar la estructura por features.
12. No cambiar los textos clave definidos sin razón.
13. No agregar funcionalidades futuras todavía.
14. No convertir la app en una playlist.
15. No mostrar ícono musical en las tarjetas de galería.
16. No crear una memoria principal fija al inicio.
17. No usar colores fríos como base principal.
18. No usar UI corporativa tipo dashboard.

---

# 18. Prompt maestro para OpenCode/Codex

Usar este prompt completo después de crear o abrir el proyecto:

```text
You are a senior frontend engineer.

Build a scalable Vite + React + Tailwind CSS web app called "Un lugarcito para Val".

This is a personal romantic web experience for Valery. It is focused on memories, photos, recreated chat memories, emotional text, and a 30-second MP3 soundtrack for every memory.

The app must feel elegant, warm, romantic, premium, and modern. It must not look childish, corporate, generic, or overloaded with hearts/glitter.

Tech stack:
- Vite
- React
- Tailwind CSS
- React Router

Main routes:
- "/" => HomePage
- "/menu" => MenuPage
- "/gallery" => GalleryPage
- "/gallery/:slug" => MemoryDetailPage
- "/letter" => LetterPage
- "/surprise" => SurprisePage

Main user flow:
Home emotional cover page
→ separate polaroid menu page
→ Gallery / Letter / Surprise

Home page:
- Use a placeholder background image from "/backgrounds/hands-background.jpg".
- The background represents the couple holding hands.
- Make the background elegant and slightly abstract.
- The image should remain visually present.
- Add a warm emotional message for Valery.
- Add a main button: "Abrir nuestro lugarcito".
- The button navigates to "/menu".

Menu page:
- Create elegant minimalist polaroid cards.
- Each polaroid represents one section:
  - Galería
  - Carta
  - Sorpresa
- Each card shows section name, mini phrase, and small info text.
- Add subtle hover/tap interaction.
- The menu must feel playful but premium.

Gallery:
- Use a data file: src/features/gallery/memories.data.js
- Main entity: MemoryItem.
- Memory types: "photo", "chat", "text".
- Create 10 to 15 placeholder memories.
- Each memory must have:
  id, slug, type, title, date, shortFeeling, longText, imagePath, soundtrackPath, soundtrackTitle, category, featured, immersive, surpriseEligible, displayOrder.
- Chat memories may also include chatMessages.
- Gallery cards show image/preview, title, approximate date, and shortFeeling.
- Do not show a music icon on gallery cards.
- Use subtle size hierarchy based on featured.
- Do not create one fixed main highlighted memory at the top.
- If immersive is true, show a button/link with exactly this text: "Para más amor…".
- That button navigates to "/gallery/:slug".
- Non-immersive memories can open in a compact modal/view.

Memory detail page:
- For immersive memories.
- Route: "/gallery/:slug".
- Use vertical scroll.
- Show one main image or visual preview.
- Show title, approximate date, AudioBubblePlayer, main emotional phrase, long text, decorative visual elements, and a closing section.
- Add a back button with exactly this text: "Volver a la puertita de la casita".
- The page should feel emotional, cinematic, warm, and elegant.

Audio:
- Every memory has a soundtrackPath.
- Use MP3 placeholders from "/soundtracks/".
- Audio must not autoplay without user interaction.
- Create reusable component: AudioBubblePlayer.
- Controls:
  play/pause, mute/unmute, soundtrack title, progress bar.
- Only one audio can play at a time.
- If another audio starts, stop the previous one.
- Stop audio when component unmounts.
- Keep the player small and elegant, like a discreet bubble.

Chats:
- Do not use real screenshots.
- Create ChatMemory component.
- Recreate chats visually with elegant message bubbles.
- Chat memories must look different from photo memories but still match the warm premium theme.

Letter:
- Route: "/letter".
- Create an envelope opening experience.
- First show a closed envelope.
- After clicking, reveal a paper-like letter.
- The design should simulate reading a real physical letter.
- Use warm shadows, paper texture, and elegant readable typography.
- Use placeholder text for now.

Surprise:
- Route: "/surprise".
- Surprise can show:
  1. text only
  2. photo + phrase
- Do not include soundtrack in surprise for now.
- Use only memories where surpriseEligible is true.
- Avoid repeating the same surprise twice in a row.
- Keep it light, sweet, and elegant.

Design system:
- Use this warm premium palette:
  Cream #F8F1E7
  Latte #D8BFA5
  Soft Mocha #9B7653
  Deep Coffee #4A3328
  Blush #D9A6A6
  Warm White #FFFDF9
- Use rounded corners, soft shadows, subtle transitions.
- Avoid excessive hearts, glitter, childish icons, or corporate UI.
- Make it responsive for mobile and desktop.

Architecture:
- Use feature-based folders.
- Do not put everything inside App.jsx.
- Create reusable shared components.
- Keep data separate from UI.
- Make it easy to add future sections later.
- Do not implement backend, login, database, admin panel, or real authentication yet.

Create the initial full project structure, components, routes, placeholder data, utilities, and styling.
```

---

# 19. Prompts de refinamiento por módulo

Después de la primera generación, usar prompts pequeños.

## 19.1 Refinar galería

```text
Refine the GalleryPage and MemoryCard components.

Make the gallery feel like an elegant romantic album. Use subtle size hierarchy based on the featured field. Keep the layout responsive. Photo memories, chat memories, and text memories should have different visual treatments. Do not make the design childish. Keep the warm coffee/blush premium palette.
```

## 19.2 Refinar audio

```text
Improve the AudioBubblePlayer.

Requirements:
- Keep it small and elegant.
- Show play/pause, mute/unmute, soundtrack title, and progress.
- Prevent multiple audios from playing at the same time.
- Stop the current audio when the component unmounts.
- Do not autoplay audio without user interaction.
- Make the component visually match the warm premium theme.
```

## 19.3 Refinar carta

```text
Improve the LetterPage.

The letter should feel like opening a real physical letter. Start with a closed envelope. After clicking, reveal a paper-like letter with warm shadows, paper texture, and elegant readable typography. Keep the animation subtle and premium.
```

## 19.4 Refinar menú

```text
Improve the MenuPage.

Make the section menu look like elegant minimalist polaroids. Each polaroid should show the section name, a mini phrase, and a small info text. Add subtle hover/tap interactions. It should feel playful, romantic, and premium, not like a formal app menu.
```

## 19.5 Refinar responsive

```text
Review the full app for responsive behavior.

Make sure HomePage, MenuPage, GalleryPage, MemoryDetailPage, LetterPage, and SurprisePage work well on mobile and desktop. Do not change the visual identity. Fix spacing, font sizes, overflow, and tap targets.
```

---

# 20. Tabla de contenido que deberá llenar el creador

Antes de reemplazar placeholders, llenar esta tabla:

| ID | Tipo | Título | Fecha aprox. | Frase corta | Texto largo | Imagen | Soundtrack | Canción | Featured | Immersive | Surprise |
|---|---|---|---|---|---|---|---|---|---|---|---|
| memory-001 | chat | El primer mensajito | pendiente | pendiente | sí | no | primer-mensaje.mp3 | pendiente | sí | sí | sí |
| memory-002 | photo | pendiente | pendiente | pendiente | opcional | foto-001.jpg | foto-001.mp3 | pendiente | sí/no | sí/no | sí/no |
| memory-003 | photo | pendiente | pendiente | pendiente | opcional | foto-002.jpg | foto-002.mp3 | pendiente | sí/no | sí/no | sí/no |

Regla: empezar con 5 memorias reales antes de cargar las 15.

Carga inicial recomendada:

```text
1 chat recreado: primer mensaje
2 fotos de ustedes
1 foto de ella
1 sorpresa solo texto
```

---

# 21. Advertencias de implementación

## 21.1 Audio

El audio es una parte sensible. No implementar autoplay forzado.

Mal enfoque:

```text
abrir memoria y sonar automáticamente sin interacción
```

Buen enfoque:

```text
abrir memoria y mostrar reproductor listo para reproducir
```

## 21.2 Contenido

No cargar 15 memorias reales desde el inicio. Primero validar la app con placeholders y 5 memorias.

## 21.3 Diseño

No sobredecorar.

La app debe ser bonita por composición, color, tipografía, ritmo y detalles, no por saturación.

## 21.4 Responsive

No dejar móvil para el final. La app probablemente será vista en celular.

## 21.5 Privacidad

No usar fotos demasiado privadas si la app será publicada. Cualquiera con link podría verla si no hay autenticación real.

---

# 22. Definición de MVP

La primera versión mínima funcional debe incluir:

```text
Home emocional
Menú polaroid
Galería con memorias
AudioBubblePlayer
Memorias inmersivas
Chats recreados
Carta con sobre
Sorpresa
Responsive básico
```

No incluir:

```text
login
backend
base de datos
panel admin
timeline
calendario
mapa
subida de archivos
```

---

# 23. Resultado esperado

Al finalizar, debe existir una app funcional donde Valery pueda:

1. abrir la portada;
2. entrar al menú tipo polaroid;
3. visitar la galería;
4. abrir recuerdos;
5. reproducir soundtracks;
6. leer memorias especiales;
7. ver chats recreados;
8. abrir una carta tipo papel;
9. recibir una sorpresa aleatoria.

La app debe sentirse como una casita emocional de recuerdos, no como un sitio web genérico.

---

# 24. Resumen final para el agente

Construye una aplicación web React/Vite/Tailwind/React Router, escalable y modular, con diseño romántico-premium en tonos café/crema/blush.

La experiencia debe ser:

```text
abrir un regalo
entrar a un lugarcito
explorar recuerdos
leer una carta
recibir una sorpresa
```

Prioridad real:

1. experiencia emocional;
2. galería de recuerdos;
3. diseño elegante;
4. audio por memoria;
5. estructura escalable;
6. responsive;
7. mantenibilidad.

No sacrificar claridad técnica por decoración visual.   