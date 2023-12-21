import { Navlink, BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <nav>
        <Navlink to="/">Home</Navlink>
        <Navlink to="/"></Navlink>
        <Navlink to="/"></Navlink>
        <Navlink to="*"></Navlink>
      </nav>
      <BrowserRouter>
        Routes
        route
        path:"*"
      </BrowserRouter>
    </div>
  );
}

export default App;
