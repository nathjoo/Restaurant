import Banner from "./components/Banner";
import Member from "./components/Member";
import Navbar from "./components/Navbar";
import Promo from "./components/Promo";
import SignatureDish from "./components/SignatureDish";
import Location from "./components/Location";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="max-w-[1440px] bg-[#fafafa] h-max min-w-[375px]">
        <Navbar />
        <Banner />
        <SignatureDish />
        <Promo />
        <Member />
        <Location />
        <Footer />
    </div>
  );
}

export default App;
