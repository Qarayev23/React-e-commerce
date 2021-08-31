import "./App.css";
import Navbar from './components/global/Navbar'
import Hero from './components/home-page/Hero'
import Collection from "./components/home-page/Collection";
import Category from "./components/home-page/Category";
import Facility from "./components/global/Facility";
import Testimonial from "./components/home-page/Testimonial";
import News from "./components/home-page/News";
import Contact from "./components/home-page/Contact";
import Footer from "./components/global/Footer";
import { BrowserRouter as Router, Route, } from "react-router-dom";
import TitleArea from "./components/cart/TitleArea";
import CartArea from "./components/cart/CartArea";
import ScrollTop from "./components/global/ScrollTop";

function App() {
  return (
    <>
      <Router>
        <Route path="/" exact>
          <header id="header" className="header">
            <Navbar />
            <Hero />
          </header>
          <main id="main">
            <div className="container">
              <Collection />
              <Category />
            </div>
            <Facility />
            <Testimonial />
            <News />
            <Contact />
            <Footer />
            <ScrollTop />
          </main>
        </Route>

        <Route path="/cart">
          <header id="header" className="header">
            <Navbar />
            <TitleArea />
          </header>
          <CartArea />
          <Facility />
          <Footer />
          <ScrollTop />
        </Route>
      </Router>
    </>
  )
}

export default App;
