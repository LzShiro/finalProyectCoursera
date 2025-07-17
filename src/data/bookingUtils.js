import { fetchAPI } from "../api";

export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

export const updateTimes = (state, action) => {
  if (action.type === "update" && action.date) {
    return fetchAPI(new Date(action.date));
  }
  return state;
};

export const saveReservation = (formData, submitFn, onSuccess) => {
  localStorage.setItem("reservation", JSON.stringify(formData));
  const success = submitFn(formData);
  if (success && typeof onSuccess === "function") {
    onSuccess();
  }
};

export const isFormValid = (formData) => {
  const {
    firstName,
    lastName,
    phone,
    selectedZone,
    date,
    time,
    guests,
  } = formData;

  const phoneRegex = /^(\+?\d{1,3})?\s?\d{10}$/;

  return (
    firstName.trim() !== "" &&
    lastName.trim() !== "" &&
    phoneRegex.test(phone.trim())  &&
    selectedZone !== null &&
    date !== "" &&
    time !== "" &&
    guests > 0
  );
};
