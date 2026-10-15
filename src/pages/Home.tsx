import { useNavigate } from 'react-router-dom'
import QuizHeader from '../components/QuizHeader'
import { useQuiz } from '../context/QuizContext'


 
function Home() {
  const navigate = useNavigate()
  const { questions, start } = useQuiz()

  const handleStart = () => {
    start()
    navigate('/quiz')
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl animate-fade-in-up">
        <div className="card text-center">
          <QuizHeader
            title="Quiz App"
            subtitle=" Made by Adams Divina"
          />

          <p className="mx-auto mb-8 max-w-md text-slate-600">
           Answer {questions.length} questions.
          </p>

          <button type="button" onClick={handleStart} className="btn-primary w-full sm:w-auto">
            Start Quiz
          </button>
        </div>
      </div>
    </main>
  )
}

export default Home
