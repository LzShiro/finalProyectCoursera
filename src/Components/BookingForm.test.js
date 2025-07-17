import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("BookingForm", () => {
  test("renders header text", () => {
    render(
      <BookingForm
        resDate=""
        setResDate={() => { }}
        resTime=""
        setResTime={() => { }}
        guests={1}
        setGuest={() => { }}
        isBirthday={false}
        setIsBirthday={() => { }}
        selectedZone="Terrace"
        setSelectedZone={() => { }}
        onConfirm={() => { }}
        availableTimes={["17:00", "18:00"]}
        dispatchTimes={() => { }}
      />
    );

    const header = screen.getByText(/make a reservation/i);
    expect(header).toBeInTheDocument();
  });

  test("submits the form with valid data", () => {
    const handleConfirm = jest.fn();

    render(
      <BookingForm
        resDate="2025-07-20"
        setResDate={() => { }}
        resTime="19:00"
        setResTime={() => { }}
        guests={2}
        setGuest={() => { }}
        isBirthday={false}
        setIsBirthday={() => { }}
        selectedZone="Terrace"
        setSelectedZone={() => { }}
        onConfirm={handleConfirm}
        availableTimes={["19:00", "20:00"]}
        dispatchTimes={() => { }}
      />
    );

    const button = screen.getByRole("button", { name: /confirm selection/i });
    fireEvent.click(button);

    expect(handleConfirm).toHaveBeenCalled();
  });

});

const mockProps = {
  resDate: "",
  setResDate: jest.fn(),
  resTime: "",
  setResTime: jest.fn(),
  guests: 1,
  setGuest: jest.fn(),
  onConfirm: jest.fn(),
  availableTimes: ["17:00", "18:00", "19:00"],
};

describe("BookingForm HTML5 validation", () => {
  test("date input is required", () => {
    render(<BookingForm {...mockProps} />);
    const input = screen.getByLabelText(/Select a date/i);
    expect(input).toHaveAttribute("required");
  });

  test("guests input has min attribute of 1", () => {
    render(<BookingForm {...mockProps} />);
    const input = screen.getByLabelText(/how many guests/i);
    expect(input).toHaveAttribute("min", "1");
    expect(input).toHaveAttribute("required");
  });

  test("time select has correct options", () => {
    render(<BookingForm {...mockProps} />);
    const options = screen.getAllByRole("option");
    expect(options).toHaveLength(3);
    expect(options[0]).toHaveTextContent("17:00");
  });
});

