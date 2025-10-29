import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import HelloWorld from "../components/helloWorld";

test("render the Hello World ", () => {
  const { getByText } = render(<HelloWorld />);
  const checkHelloWorldText = getByText("Hello World");

  expect(checkHelloWorldText).toBeInTheDocument();
});

test("check name by test id", () => {
  const { getByTestId } = render(<HelloWorld />);
  const getElement = getByTestId("name");

  expect(getElement.textContent).toBe("Dinesh R");
});
