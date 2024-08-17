import HeroSection from "./components/HeroSection.tsx";
import HotelCard from "./components/HotelCard.tsx";
import Features from "./components/Features.tsx";
import Rental from "./components/Rental.tsx";
import RentalNote from "./components/RentalNote.tsx";
import Footer from "./components/Footer.tsx";
import Header from "./components/header.tsx";
import Form from "./components/Form.tsx";
import MapEmbed from "./components/SideMap.tsx";

function App() {
  return(
      <div>
        <Header />
        <HeroSection />
          {/*<Rental />*/}
        <HotelCard />
        {/*<Features />*/}
        <Form />
        {/*<RentalNote />*/}
          <MapEmbed />
        <Footer />
      </div>
  )
}

export default App;
