import Card from "./Card";
import { cardData } from "./cardData";
import Section from "./Section";

const GamesList = ({ cartItems, onBuy }) => {
  return (
    <Section>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-4">
        {cardData.map((card, index) => {
          const isAdded = cartItems.some((cartItem) => cartItem.title === card.title);
          return (
            <Card
              key={index}
              imageSrc={card.imageSrc}
              title={card.title}
              price={card.price}
              onBuy={() => onBuy(card)}
              buttonLabel={isAdded ? "Added" : "Buy"} // Dynamic label
            />
          );
        })}
      </div>
    </Section>
  );
};

export default GamesList;
