import { Link } from 'react-router-dom'

interface ResultCardProps {
  total: number
  correct: number
  incorrect: number
  percentage: number
  onRetake: () => void
}

function getFeedback(percentage: number) {
  if (percentage >= 90) return { title: 'Outstanding! 🏆', tone: 'text-emerald-600', ring: 'ring-emerald-400' }
  if (percentage >= 75) return { title: 'Great job! 🎉', tone: 'text-emerald-600', ring: 'ring-emerald-400' }
  if (percentage >= 50) return { title: 'Good effort! 👍', tone: 'text-amber-600', ring: 'ring-amber-400' }
  return { title: 'Keep practicing! 💪', tone: 'text-rose-600', ring: 'ring-rose-400' }
}


function ResultCard({ total, correct, incorrect, percentage, onRetake }: ResultCardProps) {
  const feedback = getFeedback(percentage)

  const stats = [
    { label: 'Total Questions', value: total, color: 'text-slate-700' },
    { label: 'Correct Answers', value: correct, color: 'text-emerald-600' },
    { label: 'Incorrect Answers', value: incorrect, color: 'text-rose-600' },
    { label: 'Final Score', value: `${correct}/${total}`, color: 'text-indigo-600' },
  ]

  return (
    <div className="animate-pop-in rounded-3xl border border-white/60 bg-white/90 p-6 text-center shadow-xl shadow-slate-900/5 backdrop-blur sm:p-8">
      <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">
        Quiz Complete
      </p>
      <h2 className={`mt-2 text-2xl font-extrabold sm:text-3xl ${feedback.tone}`}>
        {feedback.title}
      </h2>

      <div className="my-8 flex justify-center">
        <div
          className={`flex h-40 w-40 flex-col items-center justify-center rounded-full bg-white ring-8 ${feedback.ring} ring-opacity-30`}
        >
          <span className="text-4xl font-extrabold text-slate-800">{percentage}%</span>
          <span className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-400">
            Your Score
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-slate-100 bg-slate-50/80 px-4 py-4"
          >
            <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
            <p className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <button type="button" onClick={onRetake} className="btn-primary w-full sm:w-auto">
          Retake Quiz
        </button>
        <Link to="/" className="btn-secondary w-full sm:w-auto">
          Return Home
        </Link>
      </div>
    </div>
  )
}

export default ResultCard
