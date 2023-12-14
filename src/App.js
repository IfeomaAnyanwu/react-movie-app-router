import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Drama from "./pages/Drama";
import Comedy from "./pages/Comedy";
import Adventure from "./pages/Adventure";
import Documentary from "./pages/Documentary";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/drama" element={<Drama />} />
          <Route path="/comedy" element={<Comedy />} />
          <Route path="/adventure" element={<Adventure />} />
          <Route path="/documentary" element={<Documentary />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
