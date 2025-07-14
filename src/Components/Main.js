
export default function Main() {
  const specialsData = [
  {
    id: 1,
    title: "Greek salad",
    price: "$12.99",
    description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    image: "/greek salad.jpg",
  },
  {
    id: 2,
    title: "Bruschetta",
    price: "$5.89",
    description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    image: "/bruchetta.svg",
  },
  {
    id: 3,
    title: "Lemon Dessert",
    price: "$5.00",
    description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    image: "/lemondessert.jpg",
  },
];
  return (
    <main className="main">
      <section className="hero">
        <div className="layout-limited hero-container">
          <div className="hero-text">
            <h1>Little Lemon</h1>
            <p>Chicago</p>
            <p>We are a family owned Mediterranean restaurant focused on traditional recipes served with a modern twist</p>
            <button>Reserve a Table</button>
          </div>
          <div className="hero-image">
            <img src="/hero.jpg" alt="Delicious food" />
          </div>
        </div>
      </section>

      <section className="specials">
      <div className="specials-header">
        <h2>This week's specials!</h2>
        <button className="btn-yellow">Online Menu</button>
      </div>

      <div className="specials-cards">
        {specialsData.map((item) => (
          <div className="special-card" key={item.id}>
            <img src={item.image} alt={item.title} />
            <div className="card-body">
              <div className="card-title-price">
                <h3>{item.title}</h3>
                <span className="price">{item.price}</span>
              </div>
              <p>{item.description}</p>
              <p className="order">Order a delivery 🛵</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    </main>
  );
}