import FormInput from "@components/common/FormInput/FormInput";
import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import * as y from "yup";

interface LoginFormValues {
  email: string;
  password: string;
}

export default function LoginForm() {
  const initialValues: LoginFormValues = { email: "", password: "" };

  const validationSchema = y.object().shape({
    email: y.string().email("Invalid email").required("Required"),
    password: y.string().required("Required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className="flex w-full flex-col gap-y-6">
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
