import '../styles/Banner.css';

function Banner({imgSrc,imgAlt,title=""}) {

  return (
    <div className="banner">
        <img src={imgSrc} alt={imgAlt} />
        <h2>{title}</h2>
    </div>
  );
}

export default Banner;