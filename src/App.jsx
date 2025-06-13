import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import "./index.css"
import Activities from "./pages/Activities.jsx";
import SistemasOscilantes from "./pages/SistemasOscilantes.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path='actividades' element={<Activities/>}>
            <Route path='sistemas-oscilantes' element={<SistemasOscilantes/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
