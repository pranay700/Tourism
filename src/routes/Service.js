import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="https://c4.wallpaperflare.com/wallpaper/649/484/984/photography-landscape-nature-mountains-wallpaper-preview.jpg"
        title="Service"
      />
      <Trip />
      <Footer />
    </>
  );
}
export default Service;
