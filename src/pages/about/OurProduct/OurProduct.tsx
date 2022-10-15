import AboutTitle from "@components/about/AboutTitle/AboutTitle";
import Feature from "@components/about/Feature/Feature";
import Materials from "@components/about/Materials/Materials";

import { OUR_PRODUCT_DATA } from "./data";

export default function OurProduct() {
  return (
    <>
      <AboutTitle
        title={OUR_PRODUCT_DATA.title}
        description={OUR_PRODUCT_DATA.description}
      />
      <Feature {...OUR_PRODUCT_DATA.feature1} />
      <Materials />
      <Feature {...OUR_PRODUCT_DATA.feature2} />
    </>
  );
}
