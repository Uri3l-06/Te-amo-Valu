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
    longText:
      'Muchos dicen que los primeros mensajes son insignificantes en el momento, como si no fueran tan importantes porque la persona todavia no es lo suficientemente especial para ti. Pero no puedo estar más en desacuerdo, porque ese mensaje tuyo a las 12:08 a.m., un 4 de mayo del 2025, fue una de las cosas mas grandes que experimente. Estaba emocionado de que esa niña guapisima me hubiera buscado.\n\nDebo confesarte amor, que empeze a delulear jajajajaja. Me emocione muchisimo. No grite de alegria porque me da wewencha, pero recuerdo esa sensacion de coqueteo en el estomago, ese sentimiento de intriga y esas ganas de tener más de ti.\n\nMe llevo las emociones que me hiciste sentir con ese mensaje. Fui muy feliz.\n\nEntonces, en mi mente, yo pense que quizas te interesaba aunque fuera un poquito. Cuando llegaba el momento de dormir, no paraba de pensar que escribirte. Tenia que ser perfecto, pero sutil, para no espantarte.\n\nEntonces empece con una verdad absoluta: "Me dio mucho gusto conocerte". Y es que, a quien no le daria gusto conocer al amor de su vida?\n\nDespúes tenias que continuar con algo que te dejará claro lo mucho que me interesabas, como si los halagos que te dije bailando no bastaran: "estas guapisima". Otra verdad absoluta, porque si lo eres, mi amor.\n\nPero te cuento que estuve a nada de no mandarlo. Me dio fundillo. Sin embargo, pense en el futuro imaginario que habia creado hace cuatro minutos y dije: si, vale la pena el riesgo.\n\nY por último cerre con: "pasa linda noche", porque mi noche ya habia sido demasiado linda. Habia conocido a la nina del gorrito de fiesta, vestido negro, collar de perlas y zapatillas blancas.\n\nO sea, yo? El que se le rompio el zapato? Conoci a esa increible mujer?\n\nSimplemente increible.',
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
