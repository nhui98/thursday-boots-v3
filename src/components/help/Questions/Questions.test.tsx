import { FAQ_DATA } from "@constants/help/faq.data";
import { logRoles, render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { describe, it } from "vitest";

import Questions from "./Questions";

const router = createMemoryRouter([
  {
    path: "/",
    element: <Questions {...FAQ_DATA[0]} />,
  },
]);

describe("Questions", () => {
  it("displays the correct number of questions", () => {
    const { container } = render(<RouterProvider router={router} />);
    logRoles(container);

    const questions = screen.getAllByRole("button");
    expect(questions).toHaveLength(FAQ_DATA[0].questions.length);
  });
});
