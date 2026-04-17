import AboutWild from "./_sections/AboutWild";
import ClientFeedBack from "./_sections/ClientFeedBack";
import Compliance from "./_sections/Compliance";
import Contact from "./_sections/Contact";
import Expertise from "./_sections/Expertise";
import Footer from "./_sections/Footer";
import Hero from "./_sections/Hero";
import Prefer from "./_sections/Prefer";
import ProductionGallery from "./_sections/ProductionGallery";
import Services from "./_sections/Services";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Hero />
      <AboutWild/>
      <Services/>
      <Expertise/>
      <Prefer/>
      <ClientFeedBack/>
      <Compliance/>
      <ProductionGallery/>
      <Contact/>
      <Footer/>
    </div>
  );
}
