import Navbar from './components/1 - navbar/navbar';
import Header from './components/2 - header/header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/footer';
import About from './components/3 - About/about';
import Servicos from './components/4 - Servicos/servicos';
import Trajeto from './components/5 - Trajeto/trajeto';

function App() {
  return (
    <Router>
      <Navbar/>
      <Header />
      <About />
      <Servicos />
      <Trajeto />
      <Footer/>
    </Router>
  );
}

export default App;
