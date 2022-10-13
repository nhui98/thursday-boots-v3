import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { describe, it } from "vitest";

import { MENS_DATA, WOMENS_DATA } from "./data";
import FeaturedCollection from "./FeaturedCollection";

const router = createMemoryRouter([
  {
    path: "/",
    element: <FeaturedCollection />,
  },
]);

describe("Testimonials", () => {
  it("displays the correct number of featured items", () => {
    render(<RouterProvider router={router} />);

    const featuredItems = screen.getAllByRole("figure");
    expect(featuredItems).toHaveLength(MENS_DATA.length + WOMENS_DATA.length);
  });

  it("displays the correct images", () => {
    render(<RouterProvider router={router} />);

    MENS_DATA.map((m) => {
      const image = screen.getAllByRole("img", { name: `${m.description}` });
      expect(image).toHaveLength(2);
    });
  });
});
