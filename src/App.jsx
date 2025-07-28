import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import "./index.css"
import Activities from "./pages/Activities.jsx";
import SistemasOscilantes from "./pages/SistemasOscilantes.jsx";
import LaboratoriosOscilantes from "./pages/LaboratoriosOscilantes.jsx";
import Cuantica from "./pages/Cuantica.jsx";
import Ondas from "./pages/Ondas.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path='actividades' element={<Activities/>} />
          <Route path='sistemas-oscilantes' element={<SistemasOscilantes/>} />
          <Route path='laboratorios-oscilantes' element={<LaboratoriosOscilantes/>} />
          <Route path='ondas' element={<Ondas/>} />
          <Route path='cuantica' element={<Cuantica/>} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
