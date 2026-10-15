interface QuizHeaderProps {
  title?: string
  subtitle?: string
}


function QuizHeader({ title = 'Quiz App \nni Adams Divina', subtitle }: QuizHeaderProps) {
  return (
    <header className="mb-6 text-center">
      <h1 className="bg-gradient-to-r from-indigo-600 to-black bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl">
        {title}
      </h1>
      {subtitle && <p className="mt-2 text-sm text-slate-500 sm:text-base font-blue-100 text-white-500 p-2 rounded-lg to-text-indigo-600 bg-gradient-to-r from-indigo-600 to-black bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl">
        {subtitle}
      </p>}
    </header>
  )
}

export default QuizHeader
