import { submitAPI } from "../api";

export const useReservationAPI = () => {

  const submitReservation = (formData) => {
    return submitAPI(formData);
  };

  return {
    submitReservation,
  };
};
