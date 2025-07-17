import { useState, useReducer } from "react";
import { initializeTimes, updateTimes } from "../data/bookingUtils";
import AnimatedPage from "../Components/AnimatedPage";
import BookingResume from "../Components/BookingResume";
import BookingForm from "../Components/BookingForm";

const Booking = () => {
  const [showSummary, setShowSummary] = useState(false);
  const [resDate, setResDate] = useState("");
  const [resTime, setResTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [selectedZone, setSelectedZone] = useState("Terrace");
  const [isBirthday, setIsBirthday] = useState(false);
  const [availableTimes, dispatchTimes] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  const handleConfirm = () => setShowSummary(true);
  const handleBack = () => setShowSummary(false);

  return (
    <AnimatedPage>
      <section className="reservations">
        {!showSummary ? (
          <BookingForm
            onConfirm={handleConfirm}
            resDate={resDate}
            setResDate={setResDate}
            resTime={resTime}
            setResTime={setResTime}
            guests={guests}
            setGuest={setGuests}
            selectedZone={selectedZone}
            setSelectedZone={setSelectedZone}
            isBirthday={isBirthday}
            setIsBirthday={setIsBirthday}
            availableTimes={availableTimes}
            dispatchTimes={dispatchTimes}
          />
        ) : (
          <BookingResume
            onBack={handleBack}
            resDate={resDate}
            resTime={resTime}
            guests={guests}
            selectedZone={selectedZone}
            isBirthday={isBirthday}
          />
        )}
      </section>
    </AnimatedPage>
  );
};

export default Booking;
