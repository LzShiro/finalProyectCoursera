import { useParams } from "react-router-dom";
import menuData from "../data/menuData";
import AnimatedPage from "./AnimatedPage";

const DishDetail = () => {
  const { id } = useParams();
  const dish = menuData.find((item) => item.id === parseInt(id));

  if (!dish) return <p>Dish not found.</p>;

  return (
    <AnimatedPage>
      <section className="dish-detail">
        <div className="dish-hero">
          <h1>{dish.title}</h1>
        </div>

        <div className="dish-container">
          <img src={dish.image} alt={dish.title} />
          <p>{dish.description}</p>
          <p className="price">Price: {dish.price}</p>
        </div>
        <button>Add to cart</button>
      </section>
    </AnimatedPage>
  );
};

export default DishDetail;
