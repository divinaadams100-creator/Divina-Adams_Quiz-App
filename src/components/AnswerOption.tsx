interface AnswerOptionProps {
  
  label: string

  index: number
 
  selected: boolean
 
  onSelect: () => void
  
  disabled?: boolean
}

const LETTERS = ['A', 'B', 'C', 'D']


function AnswerOption({
  label,
  index,
  selected,
  onSelect,
  disabled = false,
}: AnswerOptionProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      disabled={disabled}
      aria-pressed={selected}
      className={[
        'group flex w-full items-center gap-4 rounded-2xl border-2 px-4 py-3 text-left transition-all duration-200',
        'focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-200',
        selected
          ? 'border-indigo-500 bg-indigo-50 shadow-md shadow-indigo-500/10'
          : 'border-slate-200 bg-white hover:-translate-y-0.5 hover:border-indigo-300 hover:bg-indigo-50/40 hover:shadow-md',
        disabled ? 'cursor-not-allowed opacity-70' : 'cursor-pointer',
      ].join(' ')}
    >
      <span
        className={[
          'flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors',
          selected
            ? 'bg-indigo-600 text-white'
            : 'bg-slate-100 text-slate-500 group-hover:bg-indigo-100 group-hover:text-indigo-600',
        ].join(' ')}
      >
        {LETTERS[index] ?? index + 1}
      </span>
      <span
        className={[
          'text-sm font-medium sm:text-base',
          selected ? 'text-indigo-900' : 'text-slate-700',
        ].join(' ')}
      >
        {label}
      </span>
    </button>
  )
}

export default AnswerOption
