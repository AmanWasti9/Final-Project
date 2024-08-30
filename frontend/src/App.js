import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";
// import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <div>
      <Router>
        <header>
          <Header />
          {/* <Navbar /> */}
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/about" element={<AboutPage />} /> */}
          </Routes>
        </main>
        <br />
        <br />
        <br />
        <br />
        <footer>
          <Footer />
        </footer>
        <br />
      </Router>
    </div>
  );
}

export default App;
