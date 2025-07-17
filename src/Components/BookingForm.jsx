import { motion } from "framer-motion";
import { useEffect } from "react";
const BookingForm = ({
  onConfirm,
  resDate,
  setResDate,
  resTime,
  setResTime,
  guests,
  setGuest,
  selectedZone,
  setSelectedZone,
  isBirthday,
  setIsBirthday,
  availableTimes,
  dispatchTimes,
}) => {
  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setResDate(newDate);
    dispatchTimes({ type: "update", date: newDate });
  };

  const handleTimeChange = (e) => {
    setResTime(e.target.value);
  };

  const handleGuestChange = (e) => {
    setGuest(e.target.value);
  };

  useEffect(() => {
    if (availableTimes.length > 0 && resTime === "") {
      setResTime(availableTimes[0]);
    }
  }, [availableTimes, resTime, setResTime]);

  return (
    <>
      <h2 className="reservations-title">Make a reservation</h2>
      <section className="zone-selection" aria-label="Zone selection">
        <article
          className={`zone-card ${
            selectedZone === "Terrace" ? "selected" : ""
          }`}
        >
          <img src="/menuImages/Terrace.png" alt="Terrace seating area" />
          <div className="zone-label">
            <span>Terrace</span>
            <motion.button
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={selectedZone === "Terrace" ? "btn-yellow" : "btn-gray"}
              onClick={(e) => {
                e.preventDefault();
                setSelectedZone("Terrace");
              }}
              aria-label="Select Terrace seating"
            >
              Choose
            </motion.button>
          </div>
        </article>

        <article
          className={`zone-card ${selectedZone === "Indoor" ? "selected" : ""}`}
        >
          <img src="/menuImages/Indoor.png" alt="Indoor seating area" />
          <div className="zone-label">
            <span>Indoor</span>
            <motion.button
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={selectedZone === "Indoor" ? "btn-yellow" : "btn-gray"}
              onClick={(e) => {
                e.preventDefault();
                setSelectedZone("Indoor");
              }}
              aria-label="Select Indoor seating"
            >
              Choose
            </motion.button>
          </div>
        </article>
      </section>

      <form className="reservation-form" aria-label="Reservation form">
        <fieldset>
          <legend className="sr-only">Reservation details</legend>
          <div className="form-group">
            <label htmlFor="res-date">
              <i className="icon-calendar" /> Select a date
            </label>
            <input
              id="res-date"
              type="date"
              value={resDate}
              onChange={handleDateChange}
              required
              aria-required="true"
            />
          </div>

          <div className="form-group">
            <label htmlFor="time-select">
              <i className="icon-clock" /> Select a time
            </label>
            <select
              id="time-select"
              type="time"
              className="select"
              value={resTime}
              onChange={handleTimeChange}
              required
              aria-required="true"
            >
              {availableTimes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="guest-count">
              <i className="icon-users" /> How many guests?
            </label>
            <input
              id="guest-count"
              type="number"
              min="1"
              max="20"
              value={guests}
              onChange={handleGuestChange}
              required
              aria-required="true"
            />
          </div>

          <div className="form-group birthday-checkbox">
            <label htmlFor="birthday">
              <input
                type="checkbox"
                id="birthday"
                checked={isBirthday}
                onChange={(e) => setIsBirthday(e.target.checked)}
                aria-label="Birthday celebration"
              />
              Is it a birthday celebration?
            </label>
          </div>
        </fieldset>
        <button
          onClick={onConfirm}
          type="button"
          className="btn-confirm"
          aria-label="Confirm reservation"
        >
          Confirm selection
        </button>
      </form>
    </>
  );
};

export default BookingForm;
