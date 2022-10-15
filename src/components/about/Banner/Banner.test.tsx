import { BANNER_DATA, BANNER_LINKS } from "@pages/about/data";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { describe, it } from "vitest";

import Banner from "./Banner";

const router = createMemoryRouter([
  {
    path: "/",
    element: <Banner bannerData={BANNER_DATA[0]} bannerLinks={BANNER_LINKS} />,
  },
]);

describe("Banner", () => {
  it("displays the correct number of images", () => {
    render(<RouterProvider router={router} />);

    const images = screen.getAllByRole("img", {
      name: `${BANNER_DATA[0].alt}`,
    });
    expect(images).toHaveLength(2);
  });

  it("displays the links correctly", () => {
    render(<RouterProvider router={router} />);

    BANNER_LINKS.map(({ text }) => {
      const link = screen.getByRole("link", {
        name: text,
      });
      expect(link).toBeInTheDocument();
    });
  });
});
