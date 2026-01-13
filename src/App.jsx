import Brain from './pages/Brain';
import Consciousness from './pages/Consciousness';
import Dimensions from './pages/Dimensions';
import Beyond from './pages/Beyond';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/NeuroVerse-website" element={<Brain />} />        
        <Route path="/consciousness" element={<Consciousness />} />
        <Route path="/dimensions" element={<Dimensions />} />
        <Route path="/beyond" element={<Beyond />} />
      </Routes>
    </Router>
  );
}

export default App;
