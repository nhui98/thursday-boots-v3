import { FEATURED_DATA } from "@constants/home/featured.data";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { describe, it } from "vitest";

import Featured from "./Featured";

const router = createMemoryRouter([
  {
    path: "/",
    element: <Featured />,
  },
]);

describe("Featured", () => {
  it("displays the correct number of featured images and links", () => {
    render(<RouterProvider router={router} />);

    const featured = screen.getAllByRole("figure");
    expect(featured).toHaveLength(FEATURED_DATA.length);

    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(FEATURED_DATA.length);

    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(FEATURED_DATA.length);
  });
});
