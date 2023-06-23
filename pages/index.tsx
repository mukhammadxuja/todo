import type { NextPage } from 'next'
import Menu from '../components/Menu/Menu'

const Home: NextPage = () => {
  return (
    <div className='bg-slate-200 min-h-screen text-slate-600 dark:bg-slate-900 dark:text-slate-400 xl:text-base sm:text-sm text-xs'>
      <Menu />
    </div>
  )
}

export default Home
