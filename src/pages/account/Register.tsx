import RegisterForm from "@components/account/RegisterForm/RegisterForm";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <main className="mx-auto mt-20 flex w-full flex-col items-center gap-y-10 py-20 px-4 sm:w-[30rem] sm:px-0">
      <h1 className="text-4xl font-bold">Register</h1>
      <RegisterForm />
      <div className="flex w-full gap-x-2 self-start border-t pt-10">
        <div>Have an account?</div>
        <Link to={"/account/login"} className="text-blue">
          Login here.
        </Link>
      </div>
    </main>
  );
}
