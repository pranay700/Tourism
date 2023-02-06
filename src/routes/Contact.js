import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="https://c4.wallpaperflare.com/wallpaper/371/373/249/nature-beach-sea-water-wallpaper-preview.jpg"
        title="Contact"
      />
      <ContactForm />
      <Footer />
    </>
  );
}
export default Contact;
