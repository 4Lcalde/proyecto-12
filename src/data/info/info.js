export const selectDificulty = [
  { value: '', text: 'Seleccionar' },
  { value: 'mixed', text: 'Mixto' },
  { value: 'easy', text: 'Fácil' },
  { value: 'medium', text: 'Medio' },
  { value: 'hard', text: 'Dificil' }
]

export const rules = [
  {
    text: 'Cada ronda consta de 15 preguntas aleatorias en función de la dificultad que hayas elegido',
    index: 1
  },
  { text: 'Tienes 10 segundos para responder cada pregunta', index: 2 },
  { text: 'Las respuestas correctas sumarán un punto a tu marcador', index: 3 },
  { text: 'Las respuestas incorrectas no restan puntos', index: 4 },
  {
    text: 'Solo tienes una oportunidad para contestar cada pregunta',
    index: 5
  },
  { text: 'Si sales de la partida tendrás que comenzar de nuevo', index: 6 }
]
