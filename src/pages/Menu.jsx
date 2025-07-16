import { Link } from "react-router-dom";
import AnimatedPage from "../Components/AnimatedPage";
import menuData from "../data/menuData";

const Menu = () => {
  return (
    <AnimatedPage>
      <section className="specials menu-page">
        <div className="specials-header">
          <h2>Our Full Menu</h2>
        </div>

        <div className="specials-cards">
          {menuData.map((item) => (
            <Link  to={`/menu/${item.id}`} className="special-card" key={item.id}>
              <img src={item.image} alt={item.title} />
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
    </AnimatedPage>
  );
}

export default Menu;
