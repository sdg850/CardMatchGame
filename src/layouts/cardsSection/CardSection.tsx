import CardList from "../cardList/CardList";
import InfoHeader from "../infoHeader/InfoHeader";
import "./styles.css";

function CardSection() {
  return (
    <div className="game-container">
      <InfoHeader />
      <CardList />
    </div>
  );
}

export default CardSection;
