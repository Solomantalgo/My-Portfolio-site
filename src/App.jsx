import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Gateway from './pages/Gateway';
import Business from './pages/Business';
import Developer from './pages/Developer';
import LinksPage from './pages/LinksPage';
import ConnectPage from './pages/ConnectPage';
import './upgrade.css';
import './popup-center.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Gateway />} />
        <Route path="/business" element={<Business />} />
        <Route path="/developer" element={<Developer />} />
        <Route path="/links" element={<LinksPage />} />
        <Route path="/connect" element={<ConnectPage />} />
      </Routes>
    </BrowserRouter>
  );
}
