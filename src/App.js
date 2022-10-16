import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HersoSection from "./Components/HeroSection/HersoSection";
import Header from "./Components/Header/Header";
import About from "./Components/about/About";
import Footer from "./Components/footer/Footer";
import ContactUs from "./Components/contact/ContactUs";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HersoSection />}></Route>
        { <Route path="/about" element={<About />}></Route>}
        { <Route path="/contact" element={<ContactUs />}></Route>}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
