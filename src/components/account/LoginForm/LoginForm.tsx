import FormInput from "@components/common/FormInput/FormInput";
import { setAccessToken } from "@store/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@store/store";
import { login } from "@utils/api/authentication";
import { queryClient } from "@utils/query-client";
import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as y from "yup";

interface LoginFormValues {
  email: string;
  password: string;
}

const initialValues: LoginFormValues = { email: "", password: "" };

const validationSchema = y.object().shape({
  email: y.string().email("Invalid email").required("Required"),
  password: y.string().required("Required"),
});

export default function LoginForm() {
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { accessToken } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (accessToken) navigate("/");
  }, [accessToken, navigate]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async ({ email, password }) => {
        const response = await queryClient
          .fetchQuery(["login"], () => login(email, password))
          .then((data) => {
            if (!data.ok) return setLoginError(true);
            setLoginError(false);
            return data.json();
          });

        if (!response) return;

        dispatch(setAccessToken(response.accessToken));
      }}
    >
      <Form className="flex w-full flex-col gap-y-6">
        {loginError && (
          <div className="border border-red-600 px-2 py-3 text-center text-red-600">
            Incorrect Email or Password
          </div>
        )}

        <FormInput
          name="email"
          label="Email"
          type="email"
          placeholder="example@email.com"
        />

        <FormInput name="password" label="Password" type="password" />

        <div className="flex flex-wrap items-center gap-y-4 gap-x-4">
          <button
            type="submit"
            className="bg-green px-8 py-3 tracking-widest text-white"
          >
            LOGIN
          </button>
          <Link to={"/account/recover"} className="text-sm text-black/50">
            Forgot your password?
          </Link>
        </div>
      </Form>
    </Formik>
  );
}
