import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Brain from "./pages/Brain";
import Consciousness from "./pages/Consciousness";
import Dimensions from "./pages/Dimensions";
import Beyond from "./pages/Beyond";

function App() {
  return (
    <BrowserRouter basename="/NeuroVerse-website">
      <Header />
      <Routes>
        <Route path="/NeuroVerse-website" element={<Brain />} />
        <Route path="/consciousness" element={<Consciousness />} />
        <Route path="/dimensions" element={<Dimensions />} />
        <Route path="/beyond" element={<Beyond />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
