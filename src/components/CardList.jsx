import Card from "./Card";

const CardList = () => {
  return (
    <>
      <div className="cardlist-wrap">
        <h1 className="title">Супергерои</h1>
        <div className="card-list">
          <Card
            cardTitle="Чудо-женщина"
            universe="DC Comics"
            alterEgo="Диана Принс"
            occupation="Супергероиня, секретарь-референт"
            friends="Лига Справедливости, Бэтмен, Супермен"
            superpower="Сверхчеловеческая сила и скорость, выносливость, полет"
            imageSrc="/public/images/wonder-woman.jpg"
            imageAlt=""
          />
          <Card
            cardTitle=""
            universe=""
            alterEgo=""
            occupation=""
            friends=""
            superpower=""
            imageSrc=""
            imageAlt=""
          />
          <Card
            cardTitle=""
            universe=""
            alterEgo=""
            occupation=""
            friends=""
            superpower=""
            imageSrc=""
            imageAlt=""
          />
        </div>
      </div>
    </>
  );
};

export default CardList;
