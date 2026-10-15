import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ProgressBar from '../components/ProgressBar'
import QuestionCard from '../components/QuestionCard'
import QuizHeader from '../components/QuizHeader'
import { useQuiz } from '../context/QuizContext'

function Quiz() {
  const navigate = useNavigate()
  const {
    questions,
    currentQuestionIndex,
    currentQuestion,
    selectedAnswers,
    score,
    isCurrentAnswered,
    isLastQuestion,
    answer,
    next,
    finish,
  } = useQuiz()

  useEffect(() => {
    if (!currentQuestion) {
      navigate('/', { replace: true })
    }
  }, [currentQuestion, navigate])

  if (!currentQuestion) return null

  const handleNext = () => {
    if (isLastQuestion) {
      finish()
      navigate('/result')
      return
    }
    next()
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl">
        <QuizHeader subtitle="Choose the best answer for each question." />

        <div className="mb-4">
          <ProgressBar
            current={currentQuestionIndex + 1}
            total={questions.length}
            score={score}
          />
        </div>

        <QuestionCard
          question={currentQuestion}
          questionNumber={currentQuestionIndex + 1}
          total={questions.length}
          selectedAnswer={selectedAnswers[currentQuestionIndex]}
          onSelectAnswer={answer}
        />

        <div className="mt-6 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="btn-secondary px-4 py-2 text-sm"
          >
            Quit
          </button>

          <button
            type="button"
            onClick={handleNext}
            disabled={!isCurrentAnswered}
            className="btn-primary"
          >
            {isLastQuestion ? 'Finish Quiz' : 'Next'}
          </button>
        </div>
      </div>
    </main>
  )
}

export default Quiz
