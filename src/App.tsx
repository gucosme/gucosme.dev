import { Route, Routes } from "react-router-dom";

import Main from "./pages/Main/Main";
import Todos from "./pages/Todos/Todos";

export default function App() {
  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path="/todos" element={<Todos />} />
    </Routes>
  );
}
