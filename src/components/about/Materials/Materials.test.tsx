import { logRoles, render, screen } from "@testing-library/react";
import { describe, it } from "vitest";

import { MATERIAL_LIST } from "./data";
import Materials from "./Materials";

describe("Materials", () => {
  it("displays the correct number of materials", () => {
    const { container } = render(<Materials />);
    logRoles(container);

    const materials = screen.getAllByRole("figure");
    expect(materials).toHaveLength(MATERIAL_LIST.materials.length);
  });

  it("displays the correct material images", () => {
    render(<Materials />);

    MATERIAL_LIST.materials.map(({ alt }) => {
      const img = screen.getByRole("img", { name: alt });
      expect(img).toBeInTheDocument();
    });
  });

  it("displays the correct material names", () => {
    render(<Materials />);

    MATERIAL_LIST.materials.map(({ material }) => {
      const materialName = screen.getByRole("heading", {
        name: material,
        level: 3,
      });
      expect(materialName).toBeInTheDocument();
    });
  });
});
