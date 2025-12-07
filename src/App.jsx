import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home'
import ScrollToTop from 'react-scroll-to-top';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </BrowserRouter>
      <ScrollToTop className='lg:block hidden' width='38' height='20' smooth color='#1d1d1d'/>
    </div>
  )
}
export default App
