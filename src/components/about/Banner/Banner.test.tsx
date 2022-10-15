import { logRoles, render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { describe, it } from "vitest";

import Banner from "./Banner";
import { BANNER_DATA, LINKS } from "./data";

const router = createMemoryRouter([
  {
    path: "/",
    element: <Banner bannerData={BANNER_DATA[0]} />,
  },
]);

describe("Banner", () => {
  it("displays the correct number of images", () => {
    const { container } = render(<RouterProvider router={router} />);
    logRoles(container);

    const images = screen.getAllByRole("img", {
      name: `${BANNER_DATA[0].alt}`,
    });
    expect(images).toHaveLength(2);
  });

  it("displays the links correctly", () => {
    render(<RouterProvider router={router} />);

    LINKS.map(({ text }) => {
      const link = screen.getByRole("link", {
        name: text,
      });
      expect(link).toBeInTheDocument();
    });
  });
});
