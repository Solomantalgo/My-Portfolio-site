import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LinksPage from './pages/LinksPage';
import ConnectPage from './pages/ConnectPage';
import Cursor from './components/Cursor';
import FAB from './components/FAB';

function App() {
  return (
    <Router>
      <Cursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/links" element={<LinksPage />} />
        <Route path="/connect" element={<ConnectPage />} />
      </Routes>
      <FAB />
    </Router>
  );
}


export default App;

