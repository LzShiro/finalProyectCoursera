import AnimatedPage from "../Components/AnimatedPage";
import menuData from "../data/menuData";
import { Link } from "react-router-dom";

const OrderOnline = () => {
  const fakeCart = [
    { id: 1, quantity: 2 },
    { id: 2, quantity: 1 },
    { id: 3, quantity: 3 },
  ];
  const cartItems = fakeCart.map(({ id, quantity }) => {
    const product = menuData.find((item) => item.id === id);
    return { ...product, quantity };
  });
  const total = cartItems.reduce((sum, item) => {
    const priceNum = parseFloat(item.price.replace("$", ""));
    return sum + priceNum * item.quantity;
  }, 0);

  return (
    <AnimatedPage>
      <section className="order-online">
        <h2 className="order-title">Your Order</h2>

        <div className="order-container">
          <div className="order-items">
            {cartItems.map((item) => (
              <div className="order-card" key={item.id}>
                <img src={item.image} alt={item.title} />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              </div>
            ))}
            <div className="order-total">
              <Link to="/menu" className="back-btn">
                Back to menu
              </Link>
              <p>
                Total: <strong>${total.toFixed(2)}</strong>
              </p>
            </div>
          </div>

          <form className="order-form">
            <h3>Complete your information</h3>

            <label>
              Full Name
              <input type="text" placeholder="John Doe" />
            </label>

            <label>
              Delivery Address
              <input type="text" placeholder="123 Main Street, Chicago" />
            </label>

            <label>
              Phone Number
              <input type="tel" placeholder="555-123-4567" />
            </label>

            <label>
              Comments (optional)
              <textarea placeholder="Any special instructions?" />
            </label>

            <button type="submit">Submit Order</button>
          </form>
        </div>
      </section>
    </AnimatedPage>
  );
}

export default OrderOnline;