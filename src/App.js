import SignupTag from "./SignupTag";
import Navbar from "./Navbar";
import Brands from "./Brands";
import Experience from "./experiences";
import Curated from "./Curated";
import Futured from "./futured";
import Line from "./Line";
import Newsletter from "./Newsletter";
import Footer from "./Footer";
import Carousel from "./Carousel";
export default function App() {
  return (
    <div>
    <SignupTag/>
    <Navbar/>
    <div id="bottom"  className=" mx-12">
    <Carousel/>
    <Brands/>
    <Experience/>
    <Curated/>
    <Futured/>
    <Line/>
    <Newsletter/>
    </div>
    <Footer/>
    </div>
  );
}

