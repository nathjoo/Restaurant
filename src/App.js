import Banner from './components/Banner';
import Member from './components/Member';
import Navbar from './components/Navbar';
import Promo from './components/Promo';
import SignatureDish from './components/SignatureDish';
import Location from './components/Location';
import Footer from './components/Footer';
import Doodle from './components/Doodle';
import Pizza from './assets/Pizza.png';
import Garlic from './assets/Garlic.png';
import Cheese from './assets/Cheese.png';
import Chicken from './assets/Chicken.png';
import Burger from './assets/Burger.png';

function App() {
  return (
    <div className="max-w-[1440px] bg-[#fafafa] h-max min-w-[375px] overflow-hidden relative">
      <Navbar />
      <Banner />
      <SignatureDish />
      <Promo />
      <Member />
      <Location />
      <Footer />
      <Doodle />
    </div>
  );
}

export default App;
