import { Link } from "react-router-dom";

function Thumb({ key, logement }) {
  return (
    <Link key={key} to={`/houssing/${logement.id}`}>
      <div className="thumb">
        <img src={logement.cover} alt={logement.title} />
        <h2>{logement.title}</h2>
      </div>
    </Link>
  );
}

export default Thumb;
