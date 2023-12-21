import Main from "./pages/Main";
import NewProduct from "./pages/NewProduct";
import ProductList from "./pages/ProductList";
import About from "./pages/About";
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/newproduct" element={<NewProduct />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;