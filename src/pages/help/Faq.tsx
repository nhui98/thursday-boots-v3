import Banner from "@components/common/Banner/Banner";
import Questions from "@components/help/Questions/Questions";
import { BANNER_DATA, BANNER_LINKS, FAQ_DATA } from "@constants/help/faq.data";

export default function Faq() {
  return (
    <main className="mt-20">
      <Banner bannerData={BANNER_DATA} bannerLinks={BANNER_LINKS} />
      <div className="container mx-auto space-y-10 py-20 px-4 md:px-10 lg:px-60">
        {FAQ_DATA.map((questions) => (
          <Questions key={questions.id} {...questions} />
        ))}
      </div>
    </main>
  );
}
