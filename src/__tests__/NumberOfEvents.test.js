import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NumberOfEvents from "../components/NumberOfEvents";
import App from "../App";

describe("<NumberOfEvents /> component", () => {
  test("checks if element has the role of a textbox", () => {
    render(<NumberOfEvents eventNumber={32} />);
    const numberTextBox = screen.queryByRole("textbox");
    expect(numberTextBox).toBeInTheDocument();
    expect(numberTextBox).toHaveValue("32");
  });
  test("user can change number of events they wish to see", async () => {
    const handleEventNumberChange = jest.fn();
    render(
      <NumberOfEvents
        eventNumber={32}
        onEventNumberChange={handleEventNumberChange}
      />
    );
    const numberTextBox = screen.getByPlaceholderText("Enter a number");
    await userEvent.type(numberTextBox, "10");
    expect(handleEventNumberChange).toHaveBeenCalled();
  });
  // describe("<NumberOfEvents /> integration", () => {
  //   test("renders a specific number of events when the app is rendered", async () => {
  //     render(<App />);
  //     const numberOfEvents = screen.getByTestId("number-of-events");
  //     const numberTextBox = within(numberOfEvents).getByRole("textbox");
  //     await userEvent.type(numberTextBox, "10");

  //     await screen.findAllByRole("listitem");
  //     const eventListItems = screen.queryByAllRole("listitem");
  //     expect(eventListItems.length).toBe(10);
  //   });
  // });
});
