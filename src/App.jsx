import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './routes/Home';


export const App = () => {
  return (
    <>
      <Home/>
      <Routes>
        <Route path='/PORTAFOLIO-UDD/' element={<Home />} />
        <Route path='/PORTAFOLIO-UDD/*' element={<Navigate to='/' />} />       
      </Routes>
    </>
  )
}