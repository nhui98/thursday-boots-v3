import { useAppSelector } from "@store/store";

export default function CheckoutCart() {
  const { basketItems, numberOfItems, totalPrice } = useAppSelector(
    (state) => state.basket
  );

  return (
    <div className="flex w-[30rem] flex-col gap-y-8">
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
                <div>&#163;{price * quantity}</div>
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
  );
}
