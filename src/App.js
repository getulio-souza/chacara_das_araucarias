import Navbar from './components/navbar/navbar';
import Header from './components/header/header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar/>
      <Header/>
    </Router>
  );
}

export default App;
