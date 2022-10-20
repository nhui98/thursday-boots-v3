import { Link } from "react-router-dom";

export default function CheckoutInformationForm() {
  return (
    <div className="w-full max-w-[40rem] px-8 xl:w-[40rem]">
      <form action="" className="flex flex-col gap-y-8">
        <div className="flex flex-col gap-y-4">
          <div className="flex flex-col justify-between font-medium sm:flex-row">
            <span>Contact information</span>
            <span>
              Already have an account?
              <Link to={"/login"} className="ml-2 text-blue">
                Log in
              </Link>
            </span>
          </div>
          <input type="text" placeholder="text" className="border py-2 px-4" />
        </div>

        <div className="flex flex-col gap-y-4">
          <div className="font-medium">Shipping address</div>
          <input type="text" placeholder="text" className="border py-2 px-4" />

          <div className="flex flex-col gap-x-2 gap-y-4 sm:flex-row">
            <input
              type="text"
              placeholder="text"
              className="w-full border py-2 px-4 sm:w-1/2"
            />
            <input
              type="text"
              placeholder="text"
              className="w-full border py-2 px-4 sm:w-1/2"
            />
          </div>

          <input type="text" placeholder="text" className="border py-2 px-4" />

          <div className="flex flex-col gap-x-2 gap-y-4 sm:flex-row">
            <input
              type="text"
              placeholder="text"
              className="w-full border py-2 px-4 sm:w-1/2"
            />
            <input
              type="text"
              placeholder="text"
              className="w-full border py-2 px-4 sm:w-1/2"
            />
          </div>

          <input type="text" placeholder="text" className="border py-2 px-4" />
        </div>

        <div className="mt-4 flex justify-end">
          <button
            type="submit"
            className="w-full cursor-pointer bg-green py-3 px-8 text-white sm:w-auto"
          >
            CONTINUE TO SHIPPING
          </button>
        </div>
      </form>
    </div>
  );
}
