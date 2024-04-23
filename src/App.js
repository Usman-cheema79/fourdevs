import { BrowserRouter, Routes, Route } from 'react-router-dom';import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Project from './Pages/Project';
import Services from './Pages/Services';
import Contact from "./Pages/Contact";
import Singleblog from "./Pages/Singleblog";
import Login from "./Pages/Login";
import NewBlog from './Pages/NewBlog';
function App() {
  return (
    <> 
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Project' element={<Project/>}/>
    <Route path='/Services' element={<Services/>}/>
    <Route path='/singleblog' element={<Singleblog/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/NewBlog' element={<NewBlog/>}/>
    </Routes>
    </BrowserRouter>    
    </>
  );
}

export default App;
