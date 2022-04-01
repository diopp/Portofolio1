import './App.css';
import './index.css'
import Navbar from './components/navbar';
import Home from './Pages/Home/Home';
import Project from './Pages/Project/Project';
import Footer from './Pages/Footer/Footer';
import About from './Pages/About/About';
export default function App() {



  return (

    <>
    
  <Navbar />
  <Home />
  <About />
  <Project />
  <Footer />
  </>
  )
}