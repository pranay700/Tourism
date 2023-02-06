import TripData from "./TripData";
import "./TripStyle.css";
import Trip1 from "./Assets/Piaynemo-West-Papua.jpg";
import Trip2 from "./Assets/istockphoto-466842820-612x612.jpg";
import Trip3 from "./Assets/france-in-pictures-beautiful-places-to-photograph-eiffel-tower (1).jpg";

function Trip() {
  return (
    <div>
      <h1>Recent Trip</h1>
      <p>You Can Discover Unique Destination Using Google Map.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip In Indenesia"
          text="ndonesia,[a] officially the Republic of Indonesia,[b] is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea. Indonesia is the world's largest archipelagic state and the 14th-largest country by area, at 1,904,569 square"
        />

        <TripData
          image={Trip2}
          heading="Trip In Malaysia"
          text="Malay: [məlejsiə]) is a country in Southeast Asia. The federal constitutional monarchy consists of thirteen states and three federal territories, separated by the South China Sea into two regions: Peninsular Malaysia and Borneo's East Malaysia. Peninsular Malaysia shares a land and maritime border with Thailand and maritime borders with Singapore, Vietnam, and Indonesia."
        />

        <TripData
          image={Trip3}
          heading="Trip In France"
          text="ndonesia,[a] officially the Republic of Indonesia,[b] is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea. Indonesia is the world's largest archipelagic state and the 14th-largest country by area, at 1,904,569 square"
        />
      </div>
    </div>
  );
}

export default Trip;
