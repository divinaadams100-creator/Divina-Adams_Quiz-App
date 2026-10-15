import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import QuizHeader from '../components/QuizHeader'
import ResultCard from '../components/ResultCard'
import { useQuiz } from '../context/QuizContext'

/**
 * Result page: totals, correct / incorrect answers, score, percentage and actions.
 */
function Result() {
  const navigate = useNavigate()
  const { questions, score, finished, retake } = useQuiz()

  // Guard: only show results if the quiz was actually completed.
  useEffect(() => {
    if (!finished) {
      navigate('/', { replace: true })
    }
  }, [finished, navigate])

  if (!finished) return null

  const total = questions.length
  const correct = score
  const incorrect = total - correct
  const percentage = total === 0 ? 0 : Math.round((correct / total) * 100)

  const handleRetake = () => {
    retake()
    navigate('/quiz')
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl">
        <QuizHeader subtitle="Here is how you did on the quiz." />
        <ResultCard
          total={total}
          correct={correct}
          incorrect={incorrect}
          percentage={percentage}
          onRetake={handleRetake}
        />
      </div>
    </main>
  )
}

export default Result
