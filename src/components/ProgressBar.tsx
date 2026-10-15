interface ProgressBarProps {
 
  current: number
  
  total: number
  
  score: number
}

function ProgressBar({ current, total, score }: ProgressBarProps) {
  const percentage = Math.round((current / total) * 100)

  return (
    <div className="w-full">
      <div className="mb-2 flex items-center justify-between text-sm font-medium text-slate-600">
        <span>
          Question {current} of {total}
        </span>
        <span className="rounded-full bg-emerald-100 px-3 py-1 text-emerald-700">
          Score: {score}
        </span>
      </div>

      <div
        className="h-2.5 w-full overflow-hidden rounded-full bg-slate-200"
        role="progressbar"
        aria-valuenow={percentage}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Quiz progress"
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}

export default ProgressBar
