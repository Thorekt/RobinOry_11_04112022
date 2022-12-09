import Rating from "./Rating";
import Tags from "./Tags";
import "../styles/Information.css";

function information({ logement }) {
  console.log(logement);
  return (
    <div className="information">
      <div className="information_left">
        <h1>{logement.title}</h1>
        <span>{logement.location}</span>
        <Tags tags={logement.tags} />
      </div>
      <div className="information_right">
        <Rating rating={logement.rating} />
      </div>
    </div>
  );
}

export default information;
