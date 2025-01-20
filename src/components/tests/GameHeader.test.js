import { render, screen } from "@testing-library/react";

import GameHeader from "../Game/GameHeader";

describe("GameHeader component", () => {
  describe("Rendering tests", () => {
    test("renders the header element", () => {
      render(<GameHeader />);

      const headerElement = screen.getByTestId("header");
      expect(headerElement).toBeInTheDocument();
    });

    test("renders h1 element with correct text", () => {
      render(<GameHeader />);

      const headingElement = screen.getByRole("heading", {
        level: 1,
      });

      expect(headingElement).toBeInTheDocument();
      expect(headingElement).toHaveTextContent("Guess the Letter");
    });

    test("contains the correct number of paragraphs", () => {
      render(<GameHeader />);

      const paragraphElements = screen.getAllByText(
        (content, element) => element.tagName.toLowerCase() === "p"
      );
      expect(paragraphElements).toHaveLength(2);
    });

    test("contains the instructions list", () => {
      render(<GameHeader />);

      const listElement = screen.getByRole("list");
      expect(listElement).toBeInTheDocument();

      const listItems = screen.getAllByRole("listitem");
      expect(listItems).toHaveLength(3);
    });
  });
});
