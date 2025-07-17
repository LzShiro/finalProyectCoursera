import AnimatedPage from "../Components/AnimatedPage";

const About = () => {
  return (
    <AnimatedPage>
      <section className="about-page" aria-labelledby="about-heading">
        <div className="about-container">
          <header>
            <h1 id="about-heading" className="about-title">
              About Little Lemon
            </h1>
            <p className="about-subtitle">
              Chicago-based Mediterranean restaurant
            </p>
          </header>
          <div className="about-content">
            <img
              src="./../about-chef.jpg"
              alt="Our chef at work"
              className="about-image"
            />
            <div className="about-text">
              <p>
                Little Lemon is a family-owned Mediterranean restaurant, known
                for its blend of traditional recipes with a modern twist.
                Located in the heart of Chicago, we focus on fresh ingredients,
                bold flavors, and warm hospitality.
              </p>
              <p>
                Our chefs bring years of experience from around the
                Mediterranean, serving dishes inspired by generations of
                culinary heritage.
              </p>
            </div>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default About;
