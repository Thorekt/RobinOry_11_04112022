import { Link } from 'react-router-dom';

function Thumb({ logement }) {
  return (
    <Link to={`/houssing/${logement.id}`}>
      <div className='thumb'>
        <div class='gradient'></div>
        <img src={logement.cover} alt={logement.title} />
        <h2>{logement.title}</h2>
      </div>
    </Link>
  );
}

export default Thumb;
