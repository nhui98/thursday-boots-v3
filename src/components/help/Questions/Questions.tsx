import { IFAQ, IQuestion } from "@constants/help/faq.data";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Questions({ id, title, questions, tagId }: IFAQ) {
  const [activeAnswer, setActiveAnswer] = useState<number | null>(null);

  return (
    <section key={id} className="flex flex-col gap-y-8" id={tagId}>
      <h2 className="text-3xl font-bold">{title}</h2>
      <ul className="flex flex-col gap-y-4">
        {questions.map(({ question, answer, id }: IQuestion) => (
          <li className="flex flex-col" key={id}>
            <button
              className="text-left font-semibold hover:text-blue"
              onClick={() =>
                setActiveAnswer((prevValue) => (prevValue === id ? null : id))
              }
            >
              {question}
            </button>
            <div
              className={`faq-answer flex flex-col gap-y-4 overflow-hidden leading-8 transition-all duration-500 ${
                activeAnswer === id
                  ? "mt-4 max-h-[50rem] opacity-100 ease-in"
                  : "m-0 max-h-0 opacity-0 ease-out"
              }`}
            >
              {answer}
            </div>
          </li>
        ))}
      </ul>
      <Link
        to={""}
        className="font-semibold text-black/50"
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        Back To Top
      </Link>
    </section>
  );
}
