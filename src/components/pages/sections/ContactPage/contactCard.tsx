import React from "react";
import Image from "next/image";
import Link from "next/link";

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}



export const Card = ({ title, description, imageUrl, linkTo }: any) => {
  const formattedDescription = description.replace(/LIMITED/g, "LIMITED<br />");

  return (
    <Link href={linkTo}>
      <div className="py-6 sm:min-h-[110px] overflow-hidden flex flex-col items-center">
        <img
          className="mb-1"
          src={imageUrl}
          alt={title}
          width={30}
          height={30}
          style={{
            maxWidth: "100%",
            height: "auto"
          }} />
        <div className="bold text-base mt-2 text-white">{title}</div>
        <div
          className="px-4 py-2 text-center text-white"
          dangerouslySetInnerHTML={{ __html: formattedDescription }}
        />
      </div>
    </Link>
  );
};

type InputType = "text" | "number" | "email" | "password" | "date" | "textarea" | "tel";
interface InputProps {
  type?: InputType;
  autoComplete?: string;
  required?: boolean;
  label?: string;
  formik: any;
  name: string;
  onblur?: any;
  placeholder?: any;
  extra?: object;
}

const FormInput = ({
  type,
  autoComplete,
  required,
  label,
  name,
  formik,
  placeholder,
  onblur,
  extra,
}: InputProps) => {
  return (
    <div className={styles.p0}>
      {label && (
        <label htmlFor="email" className={styles.p1}>
          {label}
        </label>
      )}
      <div className={styles.p4}>
        <input
          id={name}
          name={name}
          type={type || "text"}
          onChange={formik.handleChange}
          onBlur={onblur}
          value={formik.values[name]}
          autoComplete={autoComplete}
          required={required || false}
          placeholder={placeholder || `${label}${required ? "" : ""}`}
          className={styles.p2}
          {...extra}
        />
        {formik.touched[name] && formik.errors[name] ? (
          <span className={styles.p3}>{formik.errors[name]}</span>
        ) : null}
      </div>
    </div>
  );
};
const styles = {
  p0: "mb-2",
  p1: "block text-sm mb-2 text-white ",
  p2: "block w-full  placeholder:text-gray-500 text-white rounded-3xl bg-theme  px-4 py-2 focus:outline-none focus:bg-theme  border-1  focus:ring-0 focus:border-b",
  // p2: "appearance-none placeholder:text-gray-500 block w-full sm:w-2/3 px-3 py-2 border-0 rounded-md theme-shadow placeholder-gray-400 focus:border-yellow-600 focus:ring-1 focus:ring-yellow-600 sm:text-sm",
  p3: "text-red-500 text-sm",
  p4: "mt-1",
};
export default FormInput;










