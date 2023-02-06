import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="https://c1.wallpaperflare.com/preview/226/61/179/ancient-architecture-art-asia-thumbnail.jpg"
        title="About"
        btnClass="hide"
      />
      <AboutUs />
      <Footer />
    </>
  );
}
export default About;
