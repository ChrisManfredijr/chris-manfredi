import './App.css';
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Header from './components/Header'
import Footer from './components/Footer'



function App() {
  return (
    <div className="App">
      <Header/>
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
