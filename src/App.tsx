import { Route, Routes } from "react-router-dom";
import CategorizedNews from "./pages/CategorizedNews";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Ask" element={<CategorizedNews category="Ask" />} />
      <Route path="/Show" element={<CategorizedNews category="Show" />} />
      <Route path="/Jobs" element={<CategorizedNews category="Jobs" />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
