
import type { Question } from '../data/questions'
import AnswerOption from './AnswerOption'

interface QuestionCardProps {
  question: Question
  questionNumber: number
  total: number
  selectedAnswer: number | null
  onSelectAnswer: (optionIndex: number) => void
}

function QuestionCard({
  question,
  questionNumber,
  total,
  selectedAnswer,
  onSelectAnswer,
}: QuestionCardProps) {
  return (
    <section
      key={question.id}
      className="animate-pop-in rounded-3xl border border-purple-200 bg-white/95 p-5 shadow-xl shadow-purple-900/10 backdrop-blur sm:p-7"
    >
      <div className="mb-4 flex items-center gap-3">
        <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-purple-700">
          Question {questionNumber} / {total}
        </span>
      </div>

      <h2 className="mb-6 text-lg font-semibold leading-snug text-red-700 sm:text-xl">
        {question.question}
      </h2>

      <div className="flex flex-col gap-3">
        {question.options.map((option, index) => (
          <AnswerOption
            key={option}
            index={index}
            label={option}
            selected={selectedAnswer === index}
            onSelect={() => onSelectAnswer(index)}
          />
        ))}
      </div>
    </section>
  )
}

export default QuestionCard
