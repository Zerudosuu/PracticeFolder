import Navbar from "./components/Navbar";
import "./style/modern-normalize.css";
import "./style/utils.css";
import "./style/style.css";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className=" h-screen bg-red-200 h-auto">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
