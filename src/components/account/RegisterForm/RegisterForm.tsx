import FormInput from "@components/common/FormInput/FormInput";
import { Form, Formik } from "formik";
import * as y from "yup";

interface RegisterFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function RegisterForm() {
  const initialValues: RegisterFormValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = y.object().shape({
    name: y
      .string()
      .required("Required")
      .min(6, "Name must at least 6 characters")
      .max(30, "Name cannot be greater than 30 characters"),
    email: y.string().email("Invalid email").required("Required"),
    password: y
      .string()
      .required("Required")
      .min(8, "Password must be at least 8 characters"),
    confirmPassword: y
      .string()
      .required("Required")
      .oneOf([y.ref("password")], "Passwords do not match"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className="flex w-full flex-col gap-y-4">
        <FormInput name="name" label="Name" type="text" />
        <FormInput
          name="email"
          label="Email"
          type="email"
          placeholder="example@email.com"
        />
        <FormInput name="password" label="Password" type="password" />
        <FormInput
          name="confirmPassword"
          label="Confirm Password"
          type="password"
        />

        <div className="flex items-center gap-x-4">
          <button
            type="submit"
            className="bg-green px-8 py-3 tracking-widest text-white"
          >
            REGISTER
          </button>
        </div>
      </Form>
    </Formik>
  );
}
