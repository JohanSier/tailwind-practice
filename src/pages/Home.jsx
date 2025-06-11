import React from 'react'

const Home = () => {
    let date = new Date()

  return (
    <main className='w-full h-full box-border relative'>
      <span className='text-xl'>“La luz es la mensajera del universo.”<br/> — James Clerk Maxwell</span>
      <span className='absolute top-0 right-0 block m-3 text-xl'>{date.toLocaleDateString('en-GB')}</span>
      
      <section className='relative w-full h-[85vh] flex flex-col justify-center items-center overflow-hidden'>
        <h1 className='text-6xl font-semibold'>Fisica 3 - Libro Digital</h1>
        <h2 className='text-3xl font-regular mt-4'> - Hecho Por - </h2>
        <h3 className='text-4xl font-semibold mt-4'>Johan Sierra</h3>
        {/* <img /> */}
      </section>
    </main>
  )
}

export default Home
