import { arrayImages } from "../../assets/Models/ArrayImages";
import Card from "../../packages/cards/Card";

function CardList() {
  return (
    <>
      {arrayImages.map((card, index) => {
        return <Card key={index} card={card} />;
      })}
    </>
  );
}

export default CardList;
