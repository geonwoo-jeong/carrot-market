import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className='flex flex-col space-y-5 bg-slate-400 py-20 px-10'>
      <div className='rounded-2xl bg-white p-10 shadow-xl'>
        <span className='text-3xl font-semibold'>Select Item</span>
        <div>
          <span className='text-gray-500'>Grey Chair</span>
          <span>$19</span>
        </div>
        <div>
          <span>Grey Chair</span>
          <span>$19</span>
        </div>
      </div>
      <div className='rounded-2xl bg-white p-10 shadow-xl'></div>
      <div className='rounded-2xl bg-white p-10 shadow-xl'></div>
      <div className='rounded-2xl bg-white p-10 shadow-xl'></div>
    </div>
  )
}

export default Home
