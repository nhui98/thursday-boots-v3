import Breadcrumb from "@components/checkout/Breadcrumb/Breadcrumb";
import CheckoutCart from "@components/checkout/CheckoutCart/CheckoutCart";
import { Outlet } from "react-router-dom";

export default function LayoutCheckout() {
  return (
    <div className="flex min-h-screen">
      {/* left */}
      <div className="flex w-full flex-col items-center gap-y-8 py-10 lg:w-[55%] lg:items-end">
        <Breadcrumb />
        <div className="w-full bg-lightgrey lg:hidden">
          <CheckoutCart />
        </div>
        <div className="w-full max-w-[40rem] px-8 xl:w-[40rem]">
          <Outlet />
        </div>
      </div>
      {/* right */}
      <div className="hidden bg-lightgrey px-8 py-10 lg:block lg:w-[45%]">
        <CheckoutCart />
      </div>
    </div>
  );
}
