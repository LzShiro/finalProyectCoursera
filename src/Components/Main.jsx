import { Link, useNavigate } from 'react-router-dom';
import menuData from '../data/menuData';

const Main = () => {
  const navigate = useNavigate();

  const specialsData = menuData.filter(item => item.special);
  
  return (
    <main className="main">
      <section className="hero">
        <div className="layout-limited hero-container">
          <div className="hero-text">
            <h1>Little Lemon</h1>
            <p>Chicago</p>
            <p>
              We are a family owned Mediterranean restaurant focused on
              traditional recipes served with a modern twist
            </p>
            <button onClick={() => navigate('/reservations')} className="hero-button">Reserve a Table</button>
          </div>
          <div className="hero-image">
            <img src="/hero.jpg" alt="Delicious food" />
          </div>
        </div>
      </section>

      <section className="specials">
        <div className="specials-header">
          <h2>This week's specials!</h2>
          <button className="btn-yellow" onClick={() => navigate('/order-online')}>Online Menu</button>
        </div>

        <div className="specials-cards">
          {specialsData.map((item) => (
            <Link to={`/menu/${item.id}`} className="special-card" key={item.id}>
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
    </main>
  );
}

export default Main;