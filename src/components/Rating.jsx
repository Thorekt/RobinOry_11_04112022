import activeStar from "../assets/star.png";
import inactiveStar from "../assets/grey-star.png";
import "../styles/Rating.css";

function Rating({rating}) {
  return (
    <div className="rating">
      {Array.from({ length: 5 }, (_, i) => {
        if (i <= rating) {
          return <img src={activeStar} alt="star" key={i} />;
        } else {
          return <img src={inactiveStar} alt="star" key={i} />;
        }
      })}
    </div>
  );
}

export default Rating;
