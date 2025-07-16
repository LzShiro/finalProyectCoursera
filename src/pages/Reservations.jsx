import { useState } from "react";
import AnimatedPage from "../Components/AnimatedPage";

const Reservations = () => {
  const [showSummary, setShowSummary] = useState(false);

  const handleConfirm = () => setShowSummary(true);
  const handleBack = () => setShowSummary(false);

  return (
    <AnimatedPage>
      <section className="reservations">
        {!showSummary ? (
          <>
            <h2 className="reservations-title">Make a reservation</h2>

            <div className="zone-selection">
              <div className="zone-card selected">
                <img src="/menuImages/Terrace.png" alt="Terrace" />
                <div className="zone-label">
                  <span>Terrace</span>
                  <button className="btn-yellow">Choose</button>
                </div>
              </div>

              <div className="zone-card">
                <img src="/menuImages/Indoor.png" alt="Interior" />
                <div className="zone-label">
                  <span>Indoor</span>
                  <button className="btn-gray">Choose</button>
                </div>
              </div>
            </div>

            <form className="reservation-form">
              <div className="form-group">
                <label>
                  <i className="icon-calendar" /> Select a date
                </label>
                <input type="date" />
              </div>

              <div className="form-group">
                <label>
                  <i className="icon-clock" /> Select a time
                </label>
                <input type="time" />
              </div>

              <div className="form-group">
                <label>
                  <i className="icon-users" /> How many guests?
                </label>
                <input type="number" min="1" max="20" />
              </div>

              <div className="form-group birthday-checkbox">
                <label>
                  <input type="checkbox" />
                  Is it a birthday celebration?
                </label>
              </div>

              <button
                onClick={handleConfirm}
                type="button"
                className="btn-confirm"
              >
                Confirm selection
              </button>
            </form>
          </>
        ) : (
          <div className="reservation-summary animated">
            <h3>RESERVATION SUMMARY</h3>
            <p>
              <strong>Selected zone:</strong> Terrace
            </p>
            <p>
              <strong>Selected date:</strong> 10/10/1970
            </p>
            <p>
              <strong>Selected time:</strong> 13:20 Hrs
            </p>
            <p>
              <strong>Number of guest:</strong> 4
            </p>

            <h3>CONTACT INFORMATION</h3>
            <input type="text" placeholder="Enter your first name" />
            <input type="text" placeholder="Enter your last name" />
            <input type="tel" placeholder="Enter your phone number" />

            <button className="btn-final">Complete reservation</button>
            <button className="btn-back" onClick={handleBack}>
              ← Back
            </button>
          </div>
        )}
      </section>
    </AnimatedPage>
  );
};

export default Reservations;
