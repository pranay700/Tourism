import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Destinstion from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://c1.wallpaperflare.com/preview/891/546/380/jeep-land-rover-lane-dirt-road.jpg"
        title="Your Journey Your Story"
        text=" Choose Your Favourite Destination"
        btnText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destinstion />
      <Trip />
      <Footer />
    </>
  );
}
export default Home;
