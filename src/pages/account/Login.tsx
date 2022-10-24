import LoginForm from "@components/account/LoginForm/LoginForm";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <main className="mx-auto mt-20 flex w-full flex-col items-center gap-y-10 py-20 px-4 sm:w-[30rem] sm:px-0">
      <h1 className="text-4xl font-bold">Login</h1>
      <LoginForm />
      <div className="flex w-full gap-x-2 self-start border-t pt-10">
        <div>New Customer?</div>
        <Link to={"/account/register"} className="text-blue">
          Register here.
        </Link>
      </div>
    </main>
  );
}
