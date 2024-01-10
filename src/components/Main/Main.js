import "../Main/Main.css";
import Card from "../Card/Card";

const Main = ({ onSelectCard, dogList }) => {
  return (
    <main className="main">
      <h2>Mission Statement</h2>
      <section className="card__section" id="card">
        <h2 className="card__section-title">Title of card section, maybe</h2>
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
