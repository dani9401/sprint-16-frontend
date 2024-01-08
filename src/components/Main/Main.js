import "../Main/Main.css";
import Card from "../Card/Card";

const Main = () => {
  return (
    <main className="main">
      <h2>Mission Statement</h2>
      <section className="card__section" id="card">
        <h2 className="card__section-title">Title of card section, maybe</h2>
        <Card></Card>
      </section>
    </main>
  );
};

export default Main;
