import AboutTitle from "@components/about/AboutTitle/AboutTitle";
import Feature from "@components/about/Feature/Feature";

import { OUR_STORY_DATA } from "./data";

export default function OurStory() {
  return (
    <>
      <AboutTitle
        title={OUR_STORY_DATA.title}
        description={OUR_STORY_DATA.description}
      />
      {OUR_STORY_DATA.features.map((feature) => (
        <Feature key={feature.id} {...feature} />
      ))}
    </>
  );
}
