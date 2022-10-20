import { useAppSelector } from "@store/store";
import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsChevronCompactDown } from "react-icons/bs";

export default function CheckoutCart() {
  const { basketItems, totalPrice } = useAppSelector((state) => state.basket);
  const [dropdown, setDrodpown] = useState(false);

  return (
    <>
      <div className="flex justify-center border-t border-b py-6 px-4 lg:hidden">
        <div className="flex w-full max-w-[40rem] justify-between">
          <button
            className="flex cursor-pointer items-center gap-x-1"
            onClick={() => setDrodpown((prev) => !prev)}
          >
            <AiOutlineShoppingCart className="text-2xl" />
            <span>Order Summary</span>
            <BsChevronCompactDown />
          </button>
          <div className="text-lg">&#163;{totalPrice}</div>
        </div>
      </div>

      <div
        className={`mx-auto flex w-full max-w-[40rem] flex-col gap-y-8 overflow-y-hidden px-2 transition-all duration-500 ease-in-out lg:mx-0 lg:px-0 xl:w-[30rem] ${
          dropdown ? "max-h-full pt-8" : "max-h-0 pt-0"
        } lg:max-h-full lg:overflow-y-visible`}
      >
        <div className="flex w-full flex-col gap-y-4">
          {basketItems.map(
            ({ slug, size, images, quantity, style, color, price }) => (
              <figure key={`${slug} ${size}`} className="flex gap-x-4">
                <div className="relative h-16 w-16 rounded-lg">
                  <img
                    src={images[0]}
                    alt={slug}
                    className="w-full rounded-lg border object-cover"
                  />
                  <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-[gray] text-sm text-white">
                    {quantity}
                  </span>
                </div>
                <figcaption className="flex w-[calc(100%-5rem)] items-center justify-between">
                  <div className="flex flex-col capitalize">
                    <div>
                      {style} | {color}
                    </div>
                    <div className="text-sm">Size: {size}</div>
                  </div>
                  <div className="pl-4">&#163;{price * quantity}</div>
                </figcaption>
              </figure>
            )
          )}
        </div>
        <div className="mt-4 flex flex-col gap-y-2 border-t py-4">
          <div className="flex justify-between">
            <div>Subtotal</div>
            <div>&#163;{totalPrice}</div>
          </div>
          <div className="flex justify-between">
            <div>Shipping + Duty</div>
            <div className="text-sm">Free</div>
          </div>
          <div className="mt-4 flex items-center justify-between border-t py-4">
            <div>Total</div>
            <div className="flex gap-x-2">
              <div className="flex items-center text-sm">GBP</div>
              <div className="text-2xl">&#163;{totalPrice}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
