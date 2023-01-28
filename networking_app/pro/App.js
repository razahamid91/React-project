
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutUs from './components/AboutUs/AboutUs';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
// import Login from './components/Login/Login';

function App() {
  return (

    <BrowserRouter>

    <div className='app'>
      <Header/>
      <div className='app-body'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/profile' element={<h1>Profile Page</h1>} />
        </Routes>
      </div>
    </div>
    
    
      </BrowserRouter>
    
    
  );
}

export default App;
