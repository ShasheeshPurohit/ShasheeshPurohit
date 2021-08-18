import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Three from "./three"
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home/Home"
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar/>
    
    <div className="App">
      <Home />
      <Footer/>
    </div>
   
    </div>
  );
}

export default App;
