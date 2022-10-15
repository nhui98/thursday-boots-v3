import { OUR_STORY_DATA } from "@pages/about/OurStory/data";
import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";

import Feature from "./Feature";

describe("Feature", () => {
  it("displays the correct image", () => {
    render(<Feature {...OUR_STORY_DATA.features[0]} />);

    const image = screen.getByRole("img", {
      name: OUR_STORY_DATA.features[0].alt,
    });
    expect(image).toBeInTheDocument();
  });

  it("displays the correct title", () => {
    render(<Feature {...OUR_STORY_DATA.features[0]} />);

    const title = screen.getByRole("heading", {
      name: OUR_STORY_DATA.features[0].title,
    });
    expect(title).toBeInTheDocument();
  });
});
