import { Route, Routes } from "react-router-dom";
import Category from "./pages/Category";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:category" element={<Category />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
