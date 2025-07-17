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
      <section className="order-online" aria-labelledby="order-title">
        <h2 id="order-title" className="order-title">
          Your Order
        </h2>
        <div className="order-container">
          <div className="order-items" aria-label="List of items in your cart">
            {cartItems.map((item) => (
              <article className="order-card" key={item.id}>
                <img src={item.image} alt={item.title} />
                <div>
                  <h3>{item.title}</h3>
                  <p aria-label={`Price ${item.price}`}>{item.price}</p>
                  <p aria-label={`Quantity ${item.quantity}`}>
                    Quantity: {item.quantity}
                  </p>
                </div>
              </article>
            ))}
            <div className="order-total">
              <Link
                to="/menu"
                className="back-btn"
                aria-label="Go back to menu"
              >
                Back to menu
              </Link>
              <p>
                Total: <strong>${total.toFixed(2)}</strong>
              </p>
            </div>
          </div>
          <form className="order-form" aria-labelledby="order-form-title">
            <h3 id="order-form-title">Complete your information</h3>
            <div className="form-group">
              <label htmlFor="full-name">Full Name</label>
              <input
                id="full-name"
                type="text"
                placeholder="John Doe"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="delivery-address">Delivery Address</label>
              <input
                id="delivery-address"
                type="text"
                placeholder="123 Main Street, Chicago"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone-number">Phone Number</label>
              <input
                id="phone-number"
                type="tel"
                placeholder="555-123-4567"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="comments">Comments (optional)</label>
              <textarea
                id="comments"
                placeholder="Any special instructions?"
                aria-label="Optional comments"
              />
            </div>
            <button type="submit" aria-label="Submit your order">Submit Order</button>
          </form>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default OrderOnline;
