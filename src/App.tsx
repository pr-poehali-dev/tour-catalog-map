import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CampingCatalog from "@/pages/CampingCatalog";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CampingCatalog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
