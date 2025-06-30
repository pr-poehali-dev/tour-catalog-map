import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Catalog from "@/pages/Catalog";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
