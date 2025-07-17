import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useReservationAPI } from "../hooks/useBookingAPI";
import { saveReservation } from "../data/bookingUtils";

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

  const handleConfirm = async () => {
    const formData = {
      date: resDate,
      time: resTime,
      guests: parseInt(guests),
      selectedZone: selectedZone,
      isBirthday: isBirthday,
      firstName,
      lastName,
      phone,
    };
    saveReservation(formData, submitReservation, () => setConfirmed(true));
  };

  const handleCloseModal = () => {
    setConfirmed(false);
    navigate("/");
  };

  return (
    <div className="reservation-summary animated">
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
      <input
        type="text"
        placeholder="Enter your first name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your last name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type="tel"
        placeholder="Enter your phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <button className="btn-final" onClick={handleConfirm}>
        Complete reservation
      </button>
      <button className="btn-back" onClick={onBack}>
        ← Back
      </button>
      {confirmed && (
        <div className="confirmation-modal">
          <h2>Reservation Confirmed!</h2>
          <p>Thank you, {firstName} for booking with us. See you soon!</p>
          <button className="btn-final" onClick={handleCloseModal}>
            Go to home
          </button>
        </div>
      )}
    </div>
  );
};

export default BookingResume;
