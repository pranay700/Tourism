import DestinationData from "./DestinationData";
import "./DestinationStyles.css";
const Destination = () => {
  return (
    <div className="destination">
      <h1> Popular Distanations</h1>
      <p>Tours give you the opportunity to see a lot,within a time frame</p>

      <DestinationData
        heading="Taj Mahal,Agra"
        text="The Taj Mahal 'Crown of the Palace')[4][5][6] is an Islamic ivory-white marble mausoleum on the right bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1631 by the Mughal emperor Shah Jahan (r. 1628–1658) to house the tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself. The tomb is the centrepiece of a 17-hectare (42-acre) complex, which includes a mosque and a guest house, and is set in formal gardens bounded on three sides by a crenellated wall.White sheets of still water under a half moonlight A land lain undisturbed for much of history, Visited in the past of an eerie knowingness, A discipline demanding sacrifice of all, A beneficent place where the seeker may Iive off the bounty of earth, Find perpetual warmth on southern shores, perpetual cold in the north."
      />
    </div>
  );
};
export default Destination;
