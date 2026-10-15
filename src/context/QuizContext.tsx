
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { questions as questionData, type Question } from '../data/questions'

interface QuizContextValue {
  questions: Question[]
  currentQuestionIndex: number
  selectedAnswers: (number | null)[]
  score: number
  finished: boolean
  currentQuestion: Question | null
  isCurrentAnswered: boolean
  isLastQuestion: boolean
  start: () => void
  answer: (optionIndex: number) => void
  next: () => void
  finish: () => void
  retake: () => void
  reset: () => void
}

const QuizContext = createContext<QuizContextValue | undefined>(undefined)

const emptyAnswers = (count: number): (number | null)[] =>
  Array(count).fill(null)

export function QuizProvider({ children }: { children: ReactNode }) {
  const questions = questionData

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    emptyAnswers(questions.length),
  )
  const [finished, setFinished] = useState(false)

  const score = useMemo(
    () =>
      selectedAnswers.reduce<number>(
        (total, answerIndex, questionIndex) =>
          answerIndex === questions[questionIndex].answer
            ? total + 1
            : total,
        0,
      ),
    [selectedAnswers, questions],
  )

  const currentQuestion = finished
    ? null
    : questions[currentQuestionIndex] ?? null

  const isCurrentAnswered = selectedAnswers[currentQuestionIndex] !== null
  const isLastQuestion = currentQuestionIndex === questions.length - 1

  const start = useCallback(() => {
    setSelectedAnswers(emptyAnswers(questions.length))
    setCurrentQuestionIndex(0)
    setFinished(false)
  }, [questions.length])

  const answer = useCallback(
    (optionIndex: number) => {
      setSelectedAnswers((previous) => {
        const updated = [...previous]
        updated[currentQuestionIndex] = optionIndex
        return updated
      })
    },
    [currentQuestionIndex],
  )

  const next = useCallback(() => {
    setCurrentQuestionIndex((index) =>
      Math.min(index + 1, questions.length - 1),
    )
  }, [questions.length])

  const finish = useCallback(() => setFinished(true), [])

  const retake = useCallback(() => start(), [start])

  const reset = useCallback(() => {
    setSelectedAnswers(emptyAnswers(questions.length))
    setCurrentQuestionIndex(0)
    setFinished(false)
  }, [questions.length])

  const value: QuizContextValue = {
    questions,
    currentQuestionIndex,
    selectedAnswers,
    score,
    finished,
    currentQuestion,
    isCurrentAnswered,
    isLastQuestion,
    start,
    answer,
    next,
    finish,
    retake,
    reset,
  }

  return (
    <QuizContext.Provider value={value}>
      {children}
    </QuizContext.Provider>
  )
}

export function useQuiz(): QuizContextValue {
  const context = useContext(QuizContext)

  if (!context) {
    throw new Error('useQuiz must be used within a QuizProvider')
  }

  return context
}
