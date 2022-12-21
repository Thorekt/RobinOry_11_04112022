import Rating from "./Rating";
import Tags from "./Tags";
import Host from "./Host";
import "../styles/Information.css";

function information({ logement }) {
  return (
    <div className="information">
      <div className="information_left">
        <h1>{logement.title}</h1>
        <span>{logement.location}</span>
        <Tags tags={logement.tags} />
      </div>
      <div className="information_right">
        <Host host={logement.host} />
        <Rating rating={logement.rating} />
      </div>
    </div>
  );
}

export default information;
