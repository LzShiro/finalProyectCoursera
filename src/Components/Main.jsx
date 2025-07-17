import { Link, useNavigate } from "react-router-dom";
import menuData from "../data/menuData";

const Main = () => {
  const navigate = useNavigate();

  const specialsData = menuData.filter((item) => item.special);

  return (
    <main className="main">
      <section className="hero" aria-label="Welcome section">
        <div className="layout-limited hero-container">
          <div className="hero-text">
            <h1>Little Lemon</h1>
            <p>Chicago</p>
            <p>
              We are a family owned Mediterranean restaurant focused on
              traditional recipes served with a modern twist
            </p>
            <button
              onClick={() => navigate("/booking")}
              className="hero-button"
              aria-label="Reserve a table"
            >
              Reserve a Table
            </button>
          </div>
          <div className="hero-image">
            <img
              src="/hero.jpg"
              alt="Plated Mediterranean dishes at Little Lemon restaurant"
            />
          </div>
        </div>
      </section>

      <section className="specials" aria-labelledby="specials-heading">
        <div className="specials-header">
          <h2 id="specials-heading">This week's specials!</h2>
          <button
            className="btn-yellow"
            onClick={() => navigate("/order-online")}
            aria-label="View online menu"
          >
            Online Menu
          </button>
        </div>

        <div className="specials-cards">
          {specialsData.map((item) => (
            <Link
              to={`/menu/${item.id}`}
              className="special-card"
              key={item.id}
              aria-label={`View details for ${item.title}`}
            >
              <img src={item.image} alt={`Dish: ${item.title}`} />
              <div className="card-body">
                <div className="card-title-price">
                  <h3>{item.title}</h3>
                  <span className="price">{item.price}</span>
                </div>
                <p>{item.description}</p>
                <p className="order">Order a delivery 🛵</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Main;
