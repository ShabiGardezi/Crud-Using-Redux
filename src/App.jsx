import Create from "./Create";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Update from "./Update";
import Delete from "./Delete";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Update />} />
        <Route path="/delete/:id" element={<Delete />} />
      </Routes>
    </>
  );
}

export default App;
