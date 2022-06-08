import Card from "../card/card.component.jsx";
import "./card-list.styles.css";

// receiving props from App.js
function CardList(props) {
  // destructuring props
  const { monsters } = props;
  return (
    <div className="card-list">
      {/* mapping every monster in monsters */}
      {monsters.map((monster) => {
        // passing props to Card component
        return <Card monster={monster} />;
      })}
    </div>
  );
}

export default CardList;
