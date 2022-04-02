import './App.css';
import './index.css'
import Navbar from './components/navbar';
import Home from './Pages/Home/Home';
import Project from './Pages/Project/Project';
import Footer from './Pages/Footer/Footer';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
export default function App() {



  return (

    <>
  
  <Navbar />
 
  <Home />
  <About />
  <Project />
  <Contact />
  <br/>
  <br/>
  <br/>
  <Footer />
  </>
  )
}