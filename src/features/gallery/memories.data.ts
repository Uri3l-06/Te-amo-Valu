export type ChatMessage = {
  from: 'valery' | 'creator'
  text: string
}

export type ChatSection = {
  section: string
  messages: ChatMessage[]
}

export type MemoryType = 'photo' | 'chat' | 'text'

export type MemoryItem = {
  id: string
  slug: string
  type: MemoryType
  title: string
  date: string
  shortFeeling: string
  longText: string
  imagePath: string | null
  soundtrackPath: string
  soundtrackTitle: string
  category: string
  featured: boolean
  immersive: boolean
  surpriseEligible: boolean
  displayOrder: number
  chatSections?: ChatSection[]
  chatMessages?: ChatMessage[]
}

export const memories: MemoryItem[] = [
  {
    id: 'memory-001',
    slug: 'primer-mensajito',
    type: 'chat',
    title: 'El primer mensajito',
    date: '4 de mayo del 2025, 12:08 a.m.',
    shortFeeling: 'El inicio, de mi historia con el amor de mi vida.',
    longText: `Muchos dicen que los primeros mensajes son insignificantes en el momento, como si no fueran tan importantes porque la persona todavía no es lo suficientemente especial para ti, pero yo no puedo estar más en desacuerdo, porque ese mensaje tuyo a las 12:08 a.m., un 4 de mayo del 2025, fue una de las cosas más grandes que experimenté.

Tal vez para cualquiera era solo un mensajito, una notificación más o unas palabras sencillas después de una noche bonita, pero para mí no fue eso, para mí fue como si de pronto algo se hubiera encendido.

Estaba emocionado de que esa niña guapísima me hubiera buscado, esa niña del gorrito de fiesta, del vestido negro, del collar de perlas y las zapatillas blancas, esa niña que me había gustado tanto desde que la vi y que, sin saberlo, ya me había dejado con una emoción bien rara, de esas que no se saben explicar, pero se sienten en todo el cuerpo.

Debo confesarte, amor, que empecé a delulear jajajajaja, me emocioné muchísimo y no grité de alegría porque me da wewencha, pero por dentro sí estaba como niño chiquito, porque recuerdo esa sensación de coqueteo en el estómago, esa intriga bonita, esas ganas de saber más de ti, de hablar más contigo y de no dejar que la conversación se muriera rápido.

Y es curioso, porque a veces uno intenta hacerse el tranquilo, como si no le hubiera importado tanto, pero la verdad es que sí me importó, me importó demasiado.

Me quedé pensando en ese mensaje, en la forma en que me escribiste y en que te habías tomado el tiempo de buscarme, y aunque quizá para ti fue algo natural, para mí se sintió como una pequeña puerta abriéndose, una puertita chiquita, pero suficiente para que yo empezara a imaginar cosas que ni siquiera sabía si podían pasar.

Me llevo las emociones que me hiciste sentir con ese mensaje: la emoción, los nervios, la sonrisa tonta, la curiosidad y la ilusión, porque me llevo ese momento como algo muy bonito, ya que fui muy feliz, aunque quizá todavía no sabía bien cuánto iba a significar después.

Entonces, en mi mente, yo pensé que quizás te interesaba aunque fuera un poquito, y con ese poquito me bastó para empezar a pensar de más, porque así soy, porque me gana la emoción y porque cuando algo me importa empiezo a cuidar hasta el punto y la coma.

Cuando llegó el momento de dormir, no paraba de pensar qué escribirte, tenía que ser perfecto, pero sutil, para no espantarte, tenía que sonar bonito, pero no intenso, y tenía que dejar claro que me habías gustado sin verme como alguien que ya había construido una vida completa contigo en su cabeza… aunque, siendo sinceros, tal vez ya llevaba como cuatro minutos haciéndolo jajajajaja.

Entonces empecé con una verdad absoluta: “Me dio mucho gusto conocerte”, y es que, ¿a quién no le daría gusto conocer al amor de su vida?

No lo dije así en ese momento, claro, porque no podía y hubiera sido demasiado, pero por dentro sí se sentía grande, ya que conocerte no se sintió como algo cualquiera, sino como uno de esos momentos que pasan normal por fuera, pero por dentro se quedan haciendo eco.

Después tenía que continuar con algo que te dejara claro lo mucho que me interesabas, como si los halagos que te dije bailando no bastaran: “estás guapísima”, otra verdad absoluta, porque sí lo eres, mi amor, pero no solo guapísima así de “qué bonita se ve”, sino guapísima de una forma que se me quedó grabada, por cómo te veías, por cómo te movías, por cómo sonreías y por cómo hacías que todo alrededor se sintiera más especial sin siquiera intentarlo.

Pero te cuento que estuve a nada de no mandarlo, porque me dio fundillo, me dio miedo verme muy obvio, muy emocionado, muy yo, y también me dio miedo que pensaras “ay, este niño qué intenso” y que salieras corriendo antes de que siquiera empezara algo bonito.

Sin embargo, pensé en el futuro imaginario que había creado hacía cuatro minutos y dije: sí, vale la pena el riesgo, porque hay cosas que uno no manda solo por valentía, sino porque algo dentro te dice que, si no lo haces, te vas a quedar pensando en qué hubiera pasado.

Y por último cerré con: “pasa linda noche”, porque mi noche ya había sido demasiado linda, ya que había conocido a la niña del gorrito de fiesta, vestido negro, collar de perlas y zapatillas blancas, había hablado contigo, había bailado contigo y había sentido esa emoción bonita de querer acercarme más, pero también de querer cuidarte, de no incomodarte y de no invadir tu espacio.

Y luego me escribiste.

O sea, ¿yo?, ¿el que se le rompió el zapato?, ¿el que probablemente intentaba verse tranquilo mientras por dentro estaba todo emocionado?, ¿yo conocí a esa increíble mujer?

Simplemente increíble.

Por eso guardo tanto este recuerdo, no porque haya sido perfecto, sino porque fue real, porque tuvo pena, nervios, risa, mensajes sencillos y una emoción que empezó chiquita, pero se quedó viviendo bonito en mí.

Por algo lo tengo fijado en mi chat de Instagram, porque cada vez que te extraño vuelvo a leerlo, y no lo hago solo por nostalgia, sino porque ese mensaje me recuerda el inicio de una emoción muy bonita, me recuerda ese nervio, esa ilusión y esa sonrisa tonta que me sacaste sin darte cuenta.

A veces lo leo y pienso: qué loco que algo tan pequeño haya significado tanto para mí, pero así fue, ese mensajito se volvió una especie de recuerdo guardado, como una pruebita bonita de que hubo un momento en el que todo empezó a sentirse diferente.

Y si hoy lo vuelvo a leer, todavía puedo recordar exactamente lo que sentí: esa mezcla de sorpresa, ilusión y alegría de pensar que tal vez, solo tal vez, algo muy bonito estaba empezando contigo.`,
    imagePath: '/backgrounds/first-message-photo.jpg',
    soundtrackPath: '/soundtracks/primer-mensaje.mp3',
    soundtrackTitle: 'Primer mensajito',
    category: 'chat',
    featured: true,
    immersive: true,
    surpriseEligible: true,
    displayOrder: 1,
    chatSections: [
      {
        section: 'Cuando me escribiste despues de vernos',
        messages: [
          { from: 'valery', text: 'Holaaa perdon ya no me despedi bien de ti 🥺👊 nada mas me fui jeje, me caiste super bien 😌' },
          { from: 'creator', text: 'Justo, te vi rodeada de mucha gente y mejor me aleje poco a poco' },
          { from: 'valery', text: 'Perdón 😔' },
          { from: 'creator', text: 'No hay cuidado' },
          { from: 'valery', text: 'De la nada salia toda mi familia jaja' },
          { from: 'creator', text: 'Siiii los vi y mejor me aleje, pa no incomodarte' },
          { from: 'valery', text: 'Nah ntp son a todo dar jajaja' },
          { from: 'valery', text: 'Mis papis creo que si te conocen' },
          { from: 'valery', text: 'Los unicos chismosos son los de mi congre 🤡 pipipipi' },
        ],
      },
      {
        section: 'Cuando me anime a decirte algo bonito',
        messages: [
          { from: 'creator', text: 'No lo digo yo, lo dice la biblia 🤓☝️' },
          { from: 'creator', text: 'Le dices, haga caso si no lo acuso con Jehová ❤️' },
          { from: 'creator', text: 'Me dio mucho gusto conocerte, estas guapisima y pasa linda noche' },
          { from: 'valery', text: 'Ay muchas gracias 🙈 igual descansa, luego hablamos' },
        ],
      },
    ],
  },
  {
    id: 'memory-002',
    slug: 'tomaditos-de-la-mano',
    type: 'photo',
    title: 'Tomaditos de la mano',
    date: 'Uno de esos dias tranquilos que se vuelven favoritos',
    shortFeeling: 'Lo simple contigo tiene una manera muy bonita de quedarse.',
    longText:
      'No necesito que todo sea inmenso para sentirlo importante. A veces basta una caminata, una mano apretando la mia y esa paz bonita de saber que ese instante, por pequeno que sea, ya merecia un lugarcito propio.',
    imagePath: '/memories/tomaditos-de-la-mano.jpg',
    soundtrackPath: '/soundtracks/tomaditos.mp3',
    soundtrackTitle: 'Tomaditos de la mano',
    category: 'together',
    featured: true,
    immersive: true,
    surpriseEligible: true,
    displayOrder: 2,
  },
  {
    id: 'memory-003',
    slug: 'tu-sonrisa-que-abriga',
    type: 'photo',
    title: 'Tu sonrisa que abriga',
    date: 'Una tarde luminosa',
    shortFeeling: 'Tu sonrisa tiene esa costumbre linda de cambiarme el dia sin pedir permiso.',
    longText: '',
    imagePath: '/memories/tu-sonrisa.jpg',
    soundtrackPath: '/soundtracks/sonrisa.mp3',
    soundtrackTitle: 'Tu sonrisa',
    category: 'valery',
    featured: false,
    immersive: false,
    surpriseEligible: true,
    displayOrder: 3,
  },
  {
    id: 'memory-004',
    slug: 'despues-de-verte',
    type: 'text',
    title: 'Despues de verte',
    date: 'Esos regresos con el corazon calmado',
    shortFeeling: 'Hay dias que terminan suave solo porque estuviste en ellos.',
    longText:
      'Me gusta mucho esa sensacion de quedarme pensando en ti despues de vernos. No por nostalgia triste, sino por esa alegria tranquila que se queda flotando, como si el dia hubiera aprendido a respirar bonito.',
    imagePath: '/memories/despues-de-verte.jpg',
    soundtrackPath: '/soundtracks/dulce-tarde.mp3',
    soundtrackTitle: 'Despues de verte',
    category: 'special',
    featured: false,
    immersive: false,
    surpriseEligible: true,
    displayOrder: 4,
  },
  {
    id: 'memory-005',
    slug: 'la-foto-que-parece-abrazo',
    type: 'photo',
    title: 'La foto que parece abrazo',
    date: 'Un recuerdo con calorcito propio',
    shortFeeling: 'Hay fotos que no solo se miran, tambien se sienten.',
    longText:
      'Esta es de esas fotos que me gusta mirar despacio. Tiene algo suave, como si guardara una temperatura bonita. La siento parecida a un abrazo guardado en papel.',
    imagePath: '/memories/foto-abrazo.jpg',
    soundtrackPath: '/soundtracks/abrazo.mp3',
    soundtrackTitle: 'Abrazo guardado',
    category: 'together',
    featured: true,
    immersive: true,
    surpriseEligible: true,
    displayOrder: 5,
  },
  {
    id: 'memory-006',
    slug: 'tu-ladito-bonito',
    type: 'photo',
    title: 'Tu ladito bonito',
    date: 'Un momento solo tuyo',
    shortFeeling: 'Me encanta cuando la ternura te sale tan natural que hasta una foto la aprende.',
    longText: '',
    imagePath: '/memories/tu-ladito.jpg',
    soundtrackPath: '/soundtracks/rose-glow.mp3',
    soundtrackTitle: 'Rose glow',
    category: 'valery',
    featured: false,
    immersive: false,
    surpriseEligible: true,
    displayOrder: 6,
  },
  {
    id: 'memory-007',
    slug: 'lo-que-quiero-cuidar',
    type: 'text',
    title: 'Lo que quiero cuidar',
    date: 'Ahora mismo',
    shortFeeling: 'No todo lo valioso hace ruido; algunas cosas solo piden cuidado.',
    longText:
      'Quise hacer esta parte porque a veces me gusta recordar que no solo guardo recuerdos por lo bonitos que fueron, sino porque tambien me hablan de lo que quiero seguir cuidando contigo: la calma, la dulzura, la risa y esa confianza que se siente ligera.',
    imagePath: '/memories/placeholder-soft.jpg',
    soundtrackPath: '/soundtracks/cuidarte.mp3',
    soundtrackTitle: 'Lo que quiero cuidar',
    category: 'soft-moment',
    featured: true,
    immersive: true,
    surpriseEligible: true,
    displayOrder: 7,
  },
  {
    id: 'memory-008',
    slug: 'mini-sorpresita',
    type: 'text',
    title: 'Mini sorpresita',
    date: 'Para cualquier dia',
    shortFeeling: 'A veces solo queria dejarte una cosita dulce aqui.',
    longText: '',
    imagePath: null,
    soundtrackPath: '/soundtracks/placeholder.mp3',
    soundtrackTitle: 'Mini sorpresa',
    category: 'special',
    featured: false,
    immersive: false,
    surpriseEligible: true,
    displayOrder: 8,
  },
]
