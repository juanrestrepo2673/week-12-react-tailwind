import './App.css'

function App() {

  return (
    <>
      <div className=' h-24 text-white rounded-lg
			bg-blue
			dark:bg-slate-800 rounded
			flex items-center justify-center 
			md:bg-purple
			lg:bg-orange
			hover:scale-110
			
			'>
        My Content
      </div>

      <div className="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt className="text-base leading-7 text-gray-600">Assets under holding</dt>
        <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">$119 trillion</dd>
      </div>
    </>
  )
}

export default App
