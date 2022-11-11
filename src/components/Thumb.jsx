

function Thumb(props){
   const logement = props.logement;
    return(<div className="thumb">
        <img src={logement.cover} alt={logement.title} />
        <h2>{logement.title}</h2>
    </div>);
}

export default Thumb;