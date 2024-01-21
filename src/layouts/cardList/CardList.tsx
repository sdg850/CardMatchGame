import Card from "../../packages/cards/Card";

const arrayImages = [
  "Dracula",
  "Dracula",
  "Ghost",
  "Ghost",
  "Pumpkin",
  "Pumpkin",
  "Skull",
  "Skull",
  "Eye",
  "Eye",
  "Cauldron",
  "Cauldron",
  "Bones",
  "Bones",
  "Bat",
  "Bat",
];

function CardList() {
  return (
    <>
      {arrayImages.map((card) => {
        return <Card card={card} />;
      })}
    </>
  );
}

export default CardList;
