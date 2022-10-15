import { OUR_STORY_DATA } from "@pages/about/OurStory/data";
import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";

import AboutTitle from "./AboutTitle";

describe("AboutTitle", () => {
  it("displays the title", () => {
    render(
      <AboutTitle
        title={OUR_STORY_DATA.title}
        description={OUR_STORY_DATA.description}
      />
    );

    const title = screen.getByRole("heading", { name: OUR_STORY_DATA.title });
    expect(title).toBeInTheDocument();
  });
});
