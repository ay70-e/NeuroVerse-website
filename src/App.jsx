import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Brain from "./pages/Brain";
import Consciousness from "./pages/Consciousness";
import Dimensions from "./pages/Dimensions";
import Beyond from "./pages/Beyond";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Brain />} />
        <Route path="/consciousness" element={<Consciousness />} />
        <Route path="/dimensions" element={<Dimensions />} />
        <Route path="/beyond" element={<Beyond />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
