import "../styles/Host.css";

function Host({ host }) {
  return (
    <div className="host">
      <span>{host.name}</span>
      <img src={host.picture} alt="host" />
    </div>
  );
}

export default Host;
