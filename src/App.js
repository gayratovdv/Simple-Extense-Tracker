import About from "./pages/About";
import Add from "./pages/Add/Add";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add" element={<Add/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;