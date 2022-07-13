import Navbar from './components/1 - navbar/navbar';
import Header from './components/2 - header/header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/footer';
import About from './components/3 - About/about';
import Servicos from './components/4 - Servicos/servicos';
import Trajeto from './components/6 - Trajeto/trajeto';
import Galeria from './components/5 - Galeria/galeria';

function App() {
  return (
    <Router>
      <Navbar/>
      <Header />
      <About />
      <Servicos />
      <Galeria />
      <Trajeto />
      <Footer/>
    </Router>
  );
}

export default App;
