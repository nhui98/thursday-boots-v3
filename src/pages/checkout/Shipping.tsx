import { Link, useNavigate } from "react-router-dom";

export default function Shipping() {
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/checkout/payment");
  };

  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex flex-col border px-4">
        <div className="flex py-2">
          <div className="w-24 text-black/70">Contact</div>
          <div>test@gmail.com</div>
          <Link to={"/checkout/information"} className="ml-auto text-blue">
            Change
          </Link>
        </div>
        <div className="flex border-t py-2">
          <div className="w-24 text-black/70">Ship To</div>
          <div>Address</div>
          <Link to={"/checkout/information"} className="ml-auto text-blue">
            Change
          </Link>
        </div>
      </div>

      <h2>Delivery Options</h2>

      <form onSubmit={handleSubmit}>
        <div className="border p-4">
          <input id="delivery" type="radio" />
          <label htmlFor="delivery" className="pl-2">
            Standard Delivery
          </label>
        </div>

        <div className="mt-4 flex justify-end">
          <button
            type="submit"
            className="w-full cursor-pointer bg-green py-3 px-8 text-white sm:w-auto"
          >
            CONTINUE TO PAYMENT
          </button>
        </div>
      </form>
    </div>
  );
}
