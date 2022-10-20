import {
  decrementItemQuantityFromBasket,
  removeItemFromBasket,
} from "@store/features/basket/basketSlice";
import { setToggleBasket } from "@store/features/flyout/flyoutSlice";
import { useAppDispatch, useAppSelector } from "@store/store";
import { AiFillLock, AiOutlineClose } from "react-icons/ai";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

export default function Basket() {
  const { basketItems, numberOfItems, totalPrice } = useAppSelector(
    (state) => state.basket
  );
  const { toggleBasket } = useAppSelector((state) => state.flyout);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <section
      className={`fixed top-0 z-50 flex h-full w-full min-w-[300px] max-w-[400px] flex-col gap-y-8 border-l bg-lightgrey p-4 transition-all duration-500 ${
        toggleBasket ? "right-0" : "-right-[400px]"
      }`}
    >
      <header className="flex flex-col gap-y-4 border-b py-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Your Cart</h2>
          <button onClick={() => dispatch(setToggleBasket(false))}>
            <AiOutlineClose className="text-2xl" />
          </button>
        </div>

        {numberOfItems > 0 && (
          <p className="flex items-center gap-x-2 text-sm text-blue">
            <BsCheckCircleFill /> Your order qualifies for free shipping!
          </p>
        )}
      </header>

      {numberOfItems > 0 ? (
        <>
          <div className="flex flex-col gap-y-4 overflow-y-auto">
            {basketItems.map(
              ({ slug, images, style, color, size, quantity, price }) => (
                <div
                  key={`${slug} ${size}`}
                  className="flex items-center gap-x-4"
                >
                  <Link to={`/product-details/${slug}`}>
                    <img
                      src={images[0]}
                      alt={`${slug} ${size}`}
                      className="h-24 w-24"
                    />
                  </Link>
                  <div className="flex flex-col gap-y-[.0125rem] text-sm">
                    <Link to={`/product/${slug}`} className="capitalize">
                      {style} | {color}
                    </Link>
                    <div>Size: {size}</div>
                    <div>Quantity: {quantity}</div>
                    <div>${price * quantity}</div>
                    <div className="flex gap-x-2 text-xs text-black/70">
                      <button
                        className="underline"
                        onClick={() =>
                          dispatch(
                            decrementItemQuantityFromBasket({ slug, size })
                          )
                        }
                      >
                        Remove
                      </button>
                      <button
                        className="underline"
                        onClick={() =>
                          dispatch(removeItemFromBasket({ slug, size }))
                        }
                      >
                        Remove All
                      </button>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
          <div className="mt-auto flex flex-col gap-y-2 border-t py-4">
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${totalPrice}</span>
            </div>
            <button
              className="mt-2 flex w-full items-center justify-center gap-x-2 bg-green p-4"
              onClick={() => navigate("/checkout")}
            >
              <AiFillLock className="text-lg text-white" />
              <div className="font-bold text-white">CHECKOUT</div>
            </button>
          </div>
        </>
      ) : (
        <div className="text-center">
          You don&apos;t have any items in your cart yet.
        </div>
      )}
    </section>
  );
}
