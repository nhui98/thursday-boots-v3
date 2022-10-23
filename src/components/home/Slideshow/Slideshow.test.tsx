import { SLIDESHOW_DATA } from "@constants/home/slideshow.data";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { describe, it } from "vitest";

import Slideshow from "./Slideshow";

const router = createMemoryRouter([
  {
    path: "/",
    element: <Slideshow />,
  },
]);

describe("Slideshow", () => {
  it("displays the correct number of slides", () => {
    render(<RouterProvider router={router} />);

    const slides = screen.getAllByRole("figure");
    expect(slides).toHaveLength(SLIDESHOW_DATA.length);
  });

  it("displays the correct number of images", () => {
    render(<RouterProvider router={router} />);

    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(
      SLIDESHOW_DATA.reduce((acc, slide) => {
        slide.img && acc++;
        slide.imgSmall && acc++;
        return acc;
      }, 0)
    );
  });

  it("displays the correct number of buttons", () => {
    render(<RouterProvider router={router} />);

    const buttons = screen.getAllByRole("link");
    expect(buttons).toHaveLength(
      SLIDESHOW_DATA.reduce((acc, slide) => acc + slide.buttons.length, 0)
    );
  });
});
