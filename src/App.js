import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar/NavBar';

function App() {
  const links = [
    { id: '1', path: '/', name: 'Home' },
    { id: '2', path: '/about', name: 'About' },
    { id: '3', path: '/contact', name: 'Contact' },
  ];

  return (
    <div className="App">
      <NavBar links={links} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element="About" />
        <Route path="/contact" element="Contact" />
      </Routes>
    </div>
  );
}

export default App;
