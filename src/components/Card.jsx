const Card = ({
  cardTitle,
  universe,
  alterEgo,
  occupation,
  friends,
  superpower,
  imageSrc,
  imageAlt,
}) => {
  return (
    <>
      <div className="card">
        <h2 className="cardTitle">{cardTitle}</h2>
        <div className="card-description">
          <p>
            <span className="bold">Вселенная:</span>&nbsp;
            <span className="universe">{universe}</span>
          </p>
          <p>
            <span className="bold">Альтер эго:</span>&nbsp;
            <span className="alterEgo">{alterEgo}</span>
          </p>
          <p>
            <span className="bold">Род деятельности:</span>&nbsp;
            <span className="occupation">{occupation}</span>
          </p>
          <p>
            <span className="bold">Друзья:</span>&nbsp;
            <span className="friends">{friends}</span>
          </p>
          <p>
            <span className="bold">Суперсилы:</span>&nbsp;
            <span className="superpower">{superpower}</span>
          </p>
        </div>
        <img className="card-img" src={imageSrc} alt={imageAlt} />
      </div>
    </>
  );
};

export default Card;
