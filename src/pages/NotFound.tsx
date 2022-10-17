import { useRouteError } from "react-router-dom";

export default function NotFound() {
  const error = useRouteError() as Error;

  return (
    <section className="flex h-screen w-full flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-7xl font-bold">404</h1>
      <h2 className="text-xl">An Error Has Occurred.</h2>
      <p>{error.message}</p>
    </section>
  );
}
