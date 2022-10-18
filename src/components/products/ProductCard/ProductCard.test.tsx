import { logRoles, render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { describe, it } from "vitest";

import { ProductCard } from "./ProductCard";
import { MOCK_PRODUCT } from "./ProductCard.mock";

const router = createMemoryRouter([
  {
    path: "/",
    element: <ProductCard product={MOCK_PRODUCT} />,
  },
]);

describe("ProductCard", () => {
  it("displays the correct image", () => {
    const { container } = render(<RouterProvider router={router} />);
    logRoles(container);

    const image = screen.getByRole("img", { name: MOCK_PRODUCT.slug });
    expect(image).toBeInTheDocument();
  });
});
