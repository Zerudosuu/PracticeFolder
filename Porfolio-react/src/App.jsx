import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Navbar from "./Components/Navbar";
import AboutPage from "./Pages/AboutPage";
import Footer from "./Components/Footer";
import "./Styles/App.scss";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
