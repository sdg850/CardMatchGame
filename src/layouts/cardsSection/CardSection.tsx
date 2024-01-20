import Card from "../../packages/cards/Card";
import InfoHeader from "../infoHeader/InfoHeader";
import "./styles.css";

function CardSection() {
  return (
    <div className="game-container">
      <InfoHeader />
      <Card />
    </div>
  );
}

export default CardSection;
