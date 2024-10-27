import React, {Suspense, lazy} from 'react'
const Hero = lazy(() => import('../components/Hero'))
const HelpUs = lazy(() => import('../components/HelpUs'))
const Contact = lazy(() => import('../components/Contact'))

const Home = () => {
  return (
    <main className='gap-14 flex flex-col'>
      <Suspense fallback={<div>Loading Hero...</div>}>
        <Hero />
      </Suspense>
      <Suspense fallback={<div>Loading HelpUs...</div>}>
        <HelpUs />
      </Suspense>
      <Suspense fallback={<div>Loading Contact...</div>}>
        <Contact />
      </Suspense>
    </main>    
  )
}

export default Home