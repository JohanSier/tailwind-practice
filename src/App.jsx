import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import "./index.css"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          {/* <Route path='actividades' element={<Activities/>}>
              <Route path='book-1' element={<Book1/>} />
              <Route path='book-2' element={<Book2/>} />
              <Route path='book-3' element={<Book3/>} />
              <Route path='book-4' element={<Book4/>} />
              <Route path='book-5' element={<Book5/>} />
              <Route path='book-6' element={<Book6/>} />
              <Route path='book-7' element={<Book7/>} />
              <Route path='book-8' element={<Book8/>} />
              <Route path='book-9' element={<Book9/>} />
              <Route path='book-10' element={<Book10/>} />
            </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
