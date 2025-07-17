import { useParams } from "react-router-dom";
import menuData from "../data/menuData";
import AnimatedPage from "./AnimatedPage";

const DishDetail = () => {
  const { id } = useParams();
  const dish = menuData.find((item) => item.id === parseInt(id));

  if (!dish) return <p>Dish not found.</p>;

  return (
    <AnimatedPage>
  <main className="dish-detail" aria-labelledby="dish-title">
    <article className="dish-hero">
      <header>
        <h1 id="dish-title">{dish.title}</h1>
      </header>
    </article>

    <section className="dish-container">
      <img src={dish.image} alt={`Image of ${dish.title}`} />
      <p>{dish.description}</p>
      <p className="price">
        <strong>Price:</strong> {dish.price}
      </p>
    </section>

    <div className="form-actions">
      <button
        type="button"
        className="btn-add"
        aria-label={`Add ${dish.title} to cart`}
      >
        Add to cart
      </button>
    </div>
  </main>
</AnimatedPage>
  );
};

export default DishDetail;
