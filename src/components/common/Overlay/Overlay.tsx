import { setToggleBasket } from "@store/features/flyout/flyoutSlice";
import { useAppDispatch, useAppSelector } from "@store/store";

export default function Overlay() {
  const { toggleBasket } = useAppSelector((state) => state.flyout);
  const dispatch = useAppDispatch();

  return (
    <button
      className={`fixed inset-0  bg-black hover:cursor-default ${
        toggleBasket ? "visible z-40 opacity-60" : "invisible -z-40 opacity-0"
      }`}
      onClick={() => {
        dispatch(setToggleBasket(false));
      }}
    />
  );
}
