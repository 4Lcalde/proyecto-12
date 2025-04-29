import { questions } from '../../data/questions/questions'

//? ESTOY BUSCANDO OBTENER LOS ELEMENTOS ALEATORIOS DE LAS PREGUNTAS

export const questionsSelect = (level) => {
  let selectedQuestions
  if (level === 'mixed' || level === 'free') {
    selectedQuestions = questions
  } else {
    selectedQuestions = questions.filter((question) => question.level === level)
  }
  console.log(selectedQuestions)

  const playerQuestions = new Set()
  const numberSelec = () => Math.floor(Math.random() * selectedQuestions.length)

  if (level === 'free') {
    while (playerQuestions.size < selectedQuestions.length) {
      const number = numberSelec()
      playerQuestions.add(selectedQuestions[number])
    }

    return [...playerQuestions]
  } else {
    while (playerQuestions.size < 15) {
      const number = numberSelec()
      playerQuestions.add(selectedQuestions[number])
    }
    return [...playerQuestions]
  }
}
