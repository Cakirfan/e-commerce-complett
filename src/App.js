import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbarr from "./components/Navbarr";
import Home from "./pages/Home";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Collections from "./pages/Collections";
import Popular from "./pages/Popular";
import Specials from "./pages/Specials";
import NotFound from "./pages/NotFound";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbarr />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/collection" element={<Collections />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/specials" element={<Specials />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
