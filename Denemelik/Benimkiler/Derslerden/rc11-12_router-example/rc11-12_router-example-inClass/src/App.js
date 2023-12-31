import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import People from "./pages/People";
import NotFound from "./pages/NotFound";
import Paths from "./pages/Paths";
import PersonDetail from "./pages/PersonDetail";
import Fullstack from "./pages/Fullstack";
import FrontEnd from "./pages/FrontEnd";
import Backend from "./pages/Backend";
import Aws from "./pages/Aws";
import PrivateRouter from "./pages/PrivateRouter";
import Login from "./pages/Login";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/people" element={<PrivateRouter />}>
          <Route index path="" element={<People />} />
          <Route path=":idx" element={<PersonDetail />} />
        </Route>

        <Route path="/login" element={<Login />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/paths" element={<Paths />}>
          <Route path="fs" element={<Fullstack />}>
            <Route path="frontend" element={<FrontEnd />} />
            <Route path="backend" element={<Backend />} />
          </Route>
          <Route index path="" element={<Aws />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
