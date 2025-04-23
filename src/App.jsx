
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import AboutPage from "./pages/AboutPague";
import { Toaster } from 'sonner';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Toaster position="bottom-right" richColors />
    </Router>
  );
}
