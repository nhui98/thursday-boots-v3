import { PREFOOTER_DATA } from "@constants/home/prefooter.data";
import { Link } from "react-router-dom";

export default function Prefooter() {
  return (
    <section className="bg-green py-16 text-white">
      <div className="container mx-auto flex flex-col gap-y-8 px-8 text-center md:px-40 xl:px-80">
        <h2 className="text-4xl font-bold">{PREFOOTER_DATA.title}</h2>
        <p className="text-lg leading-8">{PREFOOTER_DATA.description}</p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          {PREFOOTER_DATA.buttons.map(({ href, text }) => (
            <Link
              to={href}
              key={text}
              className="w-48 bg-white py-3 px-8 font-medium text-green hover:bg-white/80"
            >
              {text}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
