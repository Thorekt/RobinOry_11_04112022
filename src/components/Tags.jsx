import "../styles/Tags.css";

function Tags({ tags }) {
  return (
    <div className="tags">
      {tags.map((tag, i) => {
        return <span key={i}>{tag}</span>;
      })}
    </div>
  );
}

export default Tags;
