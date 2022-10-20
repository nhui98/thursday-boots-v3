import { AiOutlineRight } from "react-icons/ai";

export default function Breadcrumb() {
  return (
    <div className="flex w-full flex-col items-center gap-y-2 px-4 text-center xl:w-[40rem]">
      <h2 className="logo text-2xl">THURSDAY BOOTS</h2>
      <div className="flex flex-wrap items-center justify-center gap-x-1 text-sm sm:text-base">
        Cart <AiOutlineRight /> Information <AiOutlineRight /> Shipping{" "}
        <AiOutlineRight /> Payment
      </div>
    </div>
  );
}
