import { Route, Routes } from "react-router-dom";
import CategorizedNews from "./pages/CategorizedNews";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Top";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Ask" element={<CategorizedNews />} />
      <Route path="/Show" element={<CategorizedNews />} />
      <Route path="/Jobs" element={<CategorizedNews />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
