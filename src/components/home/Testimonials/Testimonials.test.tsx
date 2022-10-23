import { TESTIMONIALS_DATA } from "@constants/home/testimonials.data";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { describe, it } from "vitest";

import Testimonials from "./Testimonials";

const router = createMemoryRouter([
  {
    path: "/",
    element: <Testimonials />,
  },
]);

describe("Testimonials", () => {
  it("displays the correct number of testimonials", () => {
    render(<RouterProvider router={router} />);

    const testimonies = screen.getAllByRole("figure");
    expect(testimonies).toHaveLength(TESTIMONIALS_DATA.length);
  });

  it("displays the correct images", () => {
    render(<RouterProvider router={router} />);

    TESTIMONIALS_DATA.map((t) => {
      const image = screen.getAllByRole("img", { name: `${t.alt}` });
      expect(image).toHaveLength(2);
    });
  });
});
