import { motion } from "framer-motion";
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

  return (
    <>
      <h2 className="reservations-title">Make a reservation</h2>
      <div className="zone-selection">
        <div className="zone-card selected">
          <img src="/menuImages/Terrace.png" alt="Terrace" />
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
            >
              Choose
            </motion.button>
          </div>
        </div>

        <div className="zone-card">
          <img src="/menuImages/Indoor.png" alt="Interior" />
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
            >
              Choose
            </motion.button>
          </div>
        </div>
      </div>

      <form className="reservation-form">
        <div className="form-group">
          <label>
            <i className="icon-calendar" /> Select a date
          </label>
          <input type="date" value={resDate} onChange={handleDateChange} />
        </div>

        <div className="form-group">
          <label>
            <i className="icon-clock" /> Select a time
          </label>
          <select
            type="time"
            className="select"
            value={resTime}
            onChange={handleTimeChange}
          >
            {availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>
            <i className="icon-users" /> How many guests?
          </label>
          <input
            type="number"
            min="1"
            max="20"
            value={guests}
            onChange={handleGuestChange}
          />
        </div>

        <div className="form-group birthday-checkbox">
          <label>
            <input
              type="checkbox"
              id="birthday"
              checked={isBirthday}
              onChange={(e) => setIsBirthday(e.target.checked)}
            />
            Is it a birthday celebration?
          </label>
        </div>

        <button onClick={onConfirm} type="button" className="btn-confirm">
          Confirm selection
        </button>
      </form>
    </>
  );
};

export default BookingForm;
