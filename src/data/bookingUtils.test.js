import {initializeTimes, updateTimes, saveReservation, isFormValid } from "./bookingUtils";
import * as api from "../api";

describe("Booking utils", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("initializeTimes returns available times from fetchAPI", () => {
    const mockTimes = ["17:00", "18:00"];
    jest.spyOn(api, "fetchAPI").mockReturnValue(mockTimes); 

    const result = initializeTimes();
    expect(api.fetchAPI).toHaveBeenCalled();
    expect(result).toEqual(mockTimes);
  });

  test("updateTimes returns new times from fetchAPI based on date", () => {
    const mockTimes = ["19:00", "20:00"];
    const mockDate = new Date("2025-07-16");

    jest.spyOn(api, "fetchAPI").mockReturnValue(mockTimes);

    const result = updateTimes([], { type: "update", date: mockDate });
    expect(api.fetchAPI).toHaveBeenCalledWith(mockDate);
    expect(result).toEqual(mockTimes);
  });

  test("updateTimes returns previous state if no date is provided", () => {
    const previousState = ["18:00"];
    const result = updateTimes(previousState, { type: "update" });
    expect(result).toEqual(previousState);
  });
});

describe("saveReservation", () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  test("guarda la reserva en localStorage y llama onSuccess si submitFn devuelve true", () => {
    const mockSubmit = jest.fn(() => true);
    const mockSuccess = jest.fn();
    const formData = { name: "André", date: "2025-08-01" };

    saveReservation(formData, mockSubmit, mockSuccess);

    expect(localStorage.getItem("reservation")).toBe(JSON.stringify(formData));
    expect(mockSubmit).toHaveBeenCalledWith(formData);
    expect(mockSuccess).toHaveBeenCalled();
  });

  test("no llama onSuccess si submitFn devuelve false", () => {
    const mockSubmit = jest.fn(() => false);
    const mockSuccess = jest.fn();
    const formData = { name: "André", date: "2025-08-01" };

    saveReservation(formData, mockSubmit, mockSuccess);

    expect(localStorage.getItem("reservation")).toBe(JSON.stringify(formData));
    expect(mockSubmit).toHaveBeenCalled();
    expect(mockSuccess).not.toHaveBeenCalled();
  });
});

describe("isFormValid", () => {
  const validForm = {
    firstName: "John",
    lastName: "Doe",
    phone: "+521231231231",
    selectedZone: "Terrace",
    date: "2025-07-20",
    time: "18:00",
    guests: 2,
  };

  test("returns true for valid form", () => {
    expect(isFormValid(validForm)).toBe(true);
  });

  test("returns false if phone is invalid", () => {
    const invalid = { ...validForm, phone: "abc" };
    expect(isFormValid(invalid)).toBe(false);
  });

  test("returns false if guests is 0", () => {
    const invalid = { ...validForm, guests: 0 };
    expect(isFormValid(invalid)).toBe(false);
  });

  test("returns false if resTime is empty", () => {
    const invalid = { ...validForm, time: "" };
    expect(isFormValid(invalid)).toBe(false);
  });

  test("returns false if selectedZone is null", () => {
    const invalid = { ...validForm, selectedZone: null };
    expect(isFormValid(invalid)).toBe(false);
  });
});
