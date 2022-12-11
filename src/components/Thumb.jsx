import { Link } from "react-router-dom";

function Thumb({ logement, key }) {
  return (
    <Link to={`/houssing/${logement.id}`}>
      <div className="thumb" key={key}>
        <img src={logement.cover} alt={logement.title} />
        <h2>{logement.title}</h2>
      </div>
    </Link>
  );
}

export default Thumb;
