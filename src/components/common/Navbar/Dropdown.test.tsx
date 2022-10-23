import {
  MENS_PROMOTION_DATA,
  MENU_LINKS_MEN,
} from "@constants/navbar/navbar.data";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { describe, it } from "vitest";

import DropdownMenu from "./DropdownMenu";

const router = createMemoryRouter([
  {
    path: "/",
    element: (
      <DropdownMenu
        menuLinks={MENU_LINKS_MEN}
        promotionData={MENS_PROMOTION_DATA}
      />
    ),
  },
]);

describe("DropdownMenu", () => {
  it("displays the correct number of promotion items", () => {
    render(<RouterProvider router={router} />);

    const promotionItems = screen.getAllByRole("figure");
    expect(promotionItems).toHaveLength(MENS_PROMOTION_DATA.length);
  });

  it("displays the correct number of links", () => {
    render(<RouterProvider router={router} />);

    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(
      MENU_LINKS_MEN.reduce((acc, link) => acc + link.styles.length, 0) +
        MENU_LINKS_MEN.length
    );
  });
});
