import "./card.styles.css";

// receiving props from card-list component
function Card(props) {
  // destructuring received props
  const { name, email, id } = props.monster;
  return (
    <div className="card-container" key={id}>
      <img
        alt={`monster ${name}`}
        // using string interpolation to modify url parameters
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

export default Card;
