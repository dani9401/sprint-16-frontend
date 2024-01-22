import "../Main/Main.css";
import Card from "../Card/Card";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Main = ({ onSelectCard, dogList }) => {
  return (
    <main className="main">
      <div className="main__mission-statement">
        <Link to="/#about" className="main__mission-details">
          "Our mission is to reduce the % of dogs that are given up, rehomed, or
          abandoned after adoption"
        </Link>
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
