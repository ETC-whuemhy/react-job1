import React from 'react'

// const hero = (props) => {first step}
// const hero = ({title, subtitle}) => destructuring

const Hero = ({title="Become a React Dev", subtitle="find the react job that fits your skill set"}) => {
  return (
    <section className='bg-indigo-700 py-20 mb-4'>

       <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

         <div className='text-center'>

          <h1 className='text-4xl font-extrabold text-white sm:text-5xl md:text-6xl'>
            {/* {Become a React Dev.} */}
            {title}
          </h1>

          <p className='my-4xl text-xl text-white'>
           {/* { find the react job that fits your skill set} */}
           {subtitle}
          </p>

         </div>
       </div>

    </section>

    
  )
}

export default Hero