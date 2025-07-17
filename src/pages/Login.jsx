import AnimatedPage from "../Components/AnimatedPage";

const Login = () => {
  return (
    <AnimatedPage>
      <section className="login-section" aria-labelledby="login-heading">
        <div className="login-container">
          <header>
            <h2 id="login-heading">Login</h2>
          </header>
          <form className="login-form" aria-describedby="login-instructions">
            <p id="login-instructions" className="visually-hidden">
              Please enter your email and password to access your account.
            </p>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                required
                aria-required="true"
                aria-label="Email address"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                required
                aria-required="true"
                aria-label="Password"
              />
            </div>

            <div className="form-actions">
              <button type="submit" aria-label="Log in to your account">
                Log In
              </button>
            </div>
          </form>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default Login;
