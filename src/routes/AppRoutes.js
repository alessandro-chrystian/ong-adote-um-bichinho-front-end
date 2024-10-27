import React, {Suspense, lazy} from 'react'
import { Routes, Route } from 'react-router-dom';
import Donate from '../pages/Donate';
import Login from '../pages/Login';
const Home = lazy(() => import('../pages/Home'))
const About = lazy(() => import('../pages/About'))
const Pets = lazy(() => import('../pages/Pets'))

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sobre' element={<About />} />
            <Route path='/pets' element={<Pets />} />
            <Route path='/doacao' element={<Donate />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    </Suspense>
      
)
}

export default AppRoutes