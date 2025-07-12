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
            imageSrc="./public/images/wonder-woman.jpg"
            imageAlt="Wonder-Woman"
          />
          <Card
            cardTitle="Черная вдова"
            universe="Marvel Comics"
            alterEgo="Наташа Романофф"
            occupation="супергероиня, шпионка"
            friends="Мстители"
            superpower="пик человеческого физического потенциала, замедленное старение, знание многих языков"
            imageSrc="./public/images/black-widow.jpg"
            imageAlt="Black Widow"
          />
          <Card
            cardTitle="Дэдпул"
            universe="Marvel Comics"
            alterEgo="Уэйд Уинстон Уилсон"
            occupation="антигерой, наемник"
            friends="частично Мстители, Человек-паук, Росомаха"
            superpower="высокий болевой порог, регенерация и бессмертие, сверхчеловеческая иммунная система"
            imageSrc="./public/images/deadpool.webp"
            imageAlt="Deadpool"
          />
        </div>
      </div>
    </>
  );
};

export default CardList;
