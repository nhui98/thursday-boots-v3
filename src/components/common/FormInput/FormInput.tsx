import { ErrorMessage, Field } from "formik";

export default function FormInput({
  name,
  label,
  type,
  placeholder,
}: InputProps) {
  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex flex-wrap justify-between">
        <label htmlFor={name} className="pr-8">
          {label}
        </label>
        <div className="text-red-600">
          <ErrorMessage name={name} />
        </div>
      </div>
      <Field
        name={name}
        type={type}
        placeholder={placeholder}
        className="border px-2 py-3 outline-none focus:border-black"
      />
    </div>
  );
}

interface InputProps {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
}
