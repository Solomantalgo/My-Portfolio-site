import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LinksPage from './pages/LinksPage';
import ConnectPage from './pages/ConnectPage';
import Cursor from './components/Cursor';
import FAB from './components/FAB';
import HireModal from './components/HireModal';

function App() {
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);

  const openHireModal = (e) => {
    if (e) e.preventDefault();
    setIsHireModalOpen(true);
  };
  const closeHireModal = () => setIsHireModalOpen(false);

  return (
    <Router>
      <Cursor />
      <Routes>
        <Route path="/" element={<Home openHireModal={openHireModal} />} />
        <Route path="/links" element={<LinksPage />} />
        <Route path="/connect" element={<ConnectPage />} />
      </Routes>
      <FAB />
      <HireModal isOpen={isHireModalOpen} onClose={closeHireModal} />
    </Router>
  );
}

export default App;


