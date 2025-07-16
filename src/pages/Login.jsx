import AnimatedPage from "../Components/AnimatedPage";

const Login = () => {
  return (
    <AnimatedPage>
      <section className="login-section">
        <div className="login-container">
          <h2>Login</h2>
          <form className="login-form">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              required
            />

            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              required
            />

            <button type="submit">Log In</button>
          </form>
        </div>
      </section>
    </AnimatedPage>
  );
}

export default Login;