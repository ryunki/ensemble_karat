import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import About from './pages/About';

import './App.css';

import Footer from './components/Footer';


function App() {
  return (
    <>
      {/* <div className="bg-store"> */}
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> */}
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      {/* </div> */}
      <Footer/>
    </>
  
  );
}

export default App;
