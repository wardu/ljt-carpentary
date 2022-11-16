import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import About from "./pages/About/About";

import "./styles/App.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
