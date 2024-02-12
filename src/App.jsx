import { Routes, Route, HashRouter } from 'react-router-dom';
import Navigation from './components/Navigation';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import CV from './pages/CV';
import Home from './pages/Home';
import { useEffect, useState } from 'react';
import EasterEggModal from './components/EasterEggModal';
import './App.css';

export default function App() {
  const [pressedKeys, setPressedKeys] = useState([]);
  const keyCombination = "1337";
  const [easterEggActive, setEasterEggActive] = useState(false);
  const [keyboardEasterEggActive, setKeyboardEasterEggActive] = useState(false);

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (isClickOnEasterEgg(event)) {
        setEasterEggActive((prevActivated) => !prevActivated);
      }
    };

    const handleKeyDown = (event) => {
      setPressedKeys((prevKeys) => [...prevKeys, event.key].slice(-keyCombination.length));
      setPressedKeys(pressedKeys => {
        if (pressedKeys.join('') === keyCombination) {
          setKeyboardEasterEggActive(true);
          setPressedKeys([]);
        } else {
          setKeyboardEasterEggActive(false);
        }
        return pressedKeys;
      })
    };

    document.addEventListener('click', handleDocumentClick);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
      document.removeEventListener('keydown', handleKeyDown);
    };

  }, [pressedKeys]);

  const isClickOnEasterEgg = (event) => {
    const x = event.clientX;
    const y = event.clientY;
    const easterEggRegionX = [0, 125];
    const easterEggRegionY = [300, 500];
    return x >= easterEggRegionX[0] && x <= easterEggRegionX[1] && y >= easterEggRegionY[0] && y <= easterEggRegionY[1];
  };
  return (

    <HashRouter>

      <div className={`App${easterEggActive ? 'active' : ''}`}>
        <Navigation />
        {keyboardEasterEggActive && <EasterEggModal />}

        {!keyboardEasterEggActive &&
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/guidelines" element={<Home />} />
          </Routes>
        }
      </div>
    </HashRouter>
  );
}