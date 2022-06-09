
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';

import Resume  from './Pages/Resume';
import ContactMe from './Pages/ContactMe';
import Projects from './Pages/Projects/Projects';
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

function App() {
  return (
    <div>

     <Navbar></Navbar>
     
    <Routes>
         <Route path ="/" element={<Home></Home>}></Route>
         <Route path ="/about" element={<About></About>}></Route>
         <Route path ="/projects" element={<Projects></Projects>}></Route>
         <Route path ="/resume" element={<Resume></Resume>}></Route>
         <Route path ="/contact" element={<ContactMe></ContactMe>}></Route>
    </Routes>
      
    </div>
  );
}

export default App;
