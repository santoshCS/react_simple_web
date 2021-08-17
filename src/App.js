import React from "react";
import './App.css';
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Headrf from "./components/Headrf";
import Maps from "./components/Maps";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Allusers from "./components/Allusers";

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <Headrf />
//       <About />  
//     </div>
//   );
// }

const App =() => {
  return(
    <div className="App">
        <Navbar />
        <Headrf />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Pricing />
        <Contact />
        <Maps />
        <Allusers/>
        <Footer />
    </div>
  );
};

export default App;
