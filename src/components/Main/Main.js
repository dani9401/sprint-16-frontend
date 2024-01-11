import "../Main/Main.css";
import Card from "../Card/Card";

const Main = ({ onSelectCard, dogList }) => {
  return (
    <main className="main">
      <div className="main__mission-statement">
        <h2 className="main__mission-title"></h2>
        <h3 className="main__mission-details">
          "Our mission is to reduce the % of dogs that are given up, rehomed, or
          abandoned after adoption"
        </h3>
      </div>
      <section className="card__section" id="card">
        <div className="card__items" id="card-section">
          {" "}
          {dogList.map((item) => (
            <Card onSelectCard={onSelectCard} item={item} key={item.id}></Card>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Main;
