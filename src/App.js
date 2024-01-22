import './App.css';
import ContactUs from './components/ContactUs';
import Home from './components/Home';
import Menu from './components/Menu';
import NavBar from './components/NavBar';
import { Route, Routes } from "react-router-dom";
import Stores from './components/Stores';
import Footer from './components/Footer';
import Aboutus from './components/Aboutus';

function App() {
  return (
    <div className="h-full w-full">
      <NavBar/>
      <Routes>
        <Route path="/menu" element={<Menu/>} />
        <Route path="/store" element={<Stores/>} />
        <Route path="/aboutus" element={<Aboutus/>} />
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
