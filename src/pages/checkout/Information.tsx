import FormInput from "@components/common/FormInput/FormInput";
import { setCheckoutInfo } from "@store/features/checkout/checkoutSlice";
import { useAppDispatch, useAppSelector } from "@store/store";
import { Form, Formik } from "formik";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as y from "yup";

interface CheckoutInfoValues {
  email: string;
  country: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  postcode: string;
  phone: string;
}

const validationSchema = y.object().shape({
  email: y.string().email("Invalid email").required("Required"),
  country: y.string().required("Required"),
  firstName: y.string().required("Required"),
  lastName: y.string().required("Required"),
  address: y.string().required("Required"),
  city: y.string().required("Required"),
  postcode: y.string().required("Required"),
  phone: y.string().required("Required"),
});

export default function Information() {
  const navigate = useNavigate();
  const checkoutInfo = useAppSelector((state) => state.checkout);
  const numberOfBasketItems = useAppSelector(
    (state) => state.basket.numberOfItems
  );
  const dispatch = useAppDispatch();

  const initialValues: CheckoutInfoValues = {
    ...checkoutInfo,
  };

  useEffect(() => {
    numberOfBasketItems === 0 && navigate("/");
  }, [numberOfBasketItems, navigate]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        dispatch(setCheckoutInfo(values));
        navigate("/checkout/shipping");
      }}
    >
      <Form className="flex flex-col gap-y-8">
        {/* Contact Information */}
        <div className="flex flex-col gap-y-4">
          <div className="flex flex-col justify-between font-medium sm:flex-row">
            <span>Contact information</span>
            <span>
              Already have an account?
              <Link to={"/login"} className="ml-2 text-blue">
                Log in
              </Link>
            </span>
          </div>
          <FormInput
            name="email"
            label="Email"
            type="email"
            placeholder="example@gmail.com"
          />
        </div>

        {/* Shipping Address */}
        <div className="flex flex-col gap-y-4">
          <div className="font-medium">Shipping address</div>
          <FormInput name="country" label="Country" type="text" />

          <div className="flex flex-col gap-x-2 gap-y-4 sm:flex-row">
            <FormInput name="firstName" label="First Name" type="text" />
            <FormInput name="lastName" label="Last Name" type="text" />
          </div>

          <FormInput name="address" label="Address" type="text" />

          <div className="flex flex-col gap-x-2 gap-y-4 sm:flex-row">
            <FormInput name="city" label="City" type="text" />
            <FormInput name="postcode" label="Postcode" type="text" />
          </div>

          <FormInput name="phone" label="Phone" type="text" />
        </div>

        <div className="mt-4 flex justify-end">
          <button
            type="submit"
            className="w-full cursor-pointer bg-green py-3 px-8 text-white sm:w-auto"
          >
            CONTINUE TO SHIPPING
          </button>
        </div>
      </Form>
    </Formik>
  );
}
