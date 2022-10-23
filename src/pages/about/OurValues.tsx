import AboutTitle from "@components/about/AboutTitle/AboutTitle";
import Feature from "@components/about/Feature/Feature";
import { OUR_VALUES_DATA } from "@constants/about/ourvalues.data";

export default function OurValues() {
  return (
    <>
      <AboutTitle
        title={OUR_VALUES_DATA.title}
        description={OUR_VALUES_DATA.description}
      />
      {OUR_VALUES_DATA.features.map((feature) => (
        <Feature key={feature.id} {...feature} />
      ))}
    </>
  );
}
