function Host({ host }) {
  return (
    <div className="host">
      <img src={host.picture} alt="host" />
      <h2>{host.name}</h2>
    </div>
  );
}

export default Host;
