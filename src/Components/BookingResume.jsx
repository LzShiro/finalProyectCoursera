import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useReservationAPI } from "../hooks/useBookingAPI";
import { saveReservation, isFormValid } from "../data/bookingUtils";

const BookingResume = ({
  onBack,
  resDate,
  resTime,
  guests,
  selectedZone,
  isBirthday,
}) => {
  const [confirmed, setConfirmed] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const { submitReservation } = useReservationAPI();
  const navigate = useNavigate();

  const formData = useMemo(
    () => ({
      date: resDate,
      time: resTime,
      guests: parseInt(guests),
      selectedZone,
      isBirthday,
      firstName,
      lastName,
      phone,
    }),
    [
      resDate,
      resTime,
      guests,
      selectedZone,
      isBirthday,
      firstName,
      lastName,
      phone,
    ]
  );

  const handleConfirm = async () => {
    saveReservation(formData, submitReservation, () => setConfirmed(true));
  };

  const handleCloseModal = () => {
    setConfirmed(false);
    navigate("/");
  };

  return (
    <div
      className="reservation-summary animated"
      aria-label="Reservation Summary"
    >
      <h3>RESERVATION SUMMARY</h3>
      <p>
        <strong>Selected zone:</strong> {selectedZone}
      </p>
      <p>
        <strong>Selected date:</strong> {resDate}
      </p>
      <p>
        <strong>Selected time:</strong> {resTime}
      </p>
      <p>
        <strong>Guests:</strong> {guests}
      </p>
      <p>
        <strong>Is birthday:</strong> {isBirthday ? "Yes" : "No"}
      </p>

      <h3>CONTACT INFORMATION</h3>
      <form aria-label="Contact Form">
        <div className="form-group">
          <label htmlFor="first-name">First Name</label>
          <input
            id="first-name"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            aria-required="true"
            placeholder="Enter your first name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="last-name">Last Name</label>
          <input
            id="last-name"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            aria-required="true"
            placeholder="Enter your last name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            aria-required="true"
            placeholder="Enter your phone number"
            pattern="^[+]?[\d\s\-]{10,15}$"
            aria-label="Enter your phone number starting with country code if needed"
          />
        </div>

        <div className="form-actions">
          <button
            className="btn-back"
            onClick={onBack}
            aria-label="Go back to previous step"
          >
            ← Back
          </button>
          <button
            className={isFormValid(formData) ? "btn-final" : "btn-disabled"}
            onClick={handleConfirm}
            disabled={!isFormValid(formData)}
            title={
              !isFormValid(formData)
                ? "Please complete all required fields"
                : ""
            }
            aria-label="Complete your reservation"
          >
            Complete reservation
          </button>
        </div>
      </form>
      {confirmed && (
        <div
          className="confirmation-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="confirmation-title"
        >
          <h2 id="confirmation-title">Reservation Confirmed!</h2>
          <p>Thank you, {firstName} for booking with us. See you soon!</p>
          <button className="btn-final" onClick={handleCloseModal} aria-label="Return to home">
            Go to home
          </button>
        </div>
      )}
    </div>
  );
};

export default BookingResume;
