import About from "./components/About"
import Experiance from "./components/Experiance"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Footer from "./components/Footer"
// import './style.css';

function App() {
  return (
    <Router> 
       <Navbar/> {/* Navbar is renderend on every page */}
    
    <div>
      {/* Home page with scroll snap */}
    <Routes>
    <Route path='/' 
    element={
    <div>
      <section>
        <Home/>
      </section>
      <section>
        <About/>
      </section>
      <section>
        <Portfolio/>
      </section>
      <section>
        <Experiance/>
      </section>
    </div>
    }/>
    {/* Other Routes */}
    <Route path='About' element={<About/>}/>
    <Route path='Portfolio' element={<Portfolio/>}/>
    <Route path='Experiance' element={<Experiance/>}/>
    <Route path='Contact' element={<Contact/>}/>
    </Routes>
    </div>
    <Footer/>
    </Router>
  );
}

export default App
