import Error from "./Error"
import { FormikTypes, FormTypes } from "../Types/Types"

type PropTypes = {
  formik: FormikTypes
  name: keyof FormTypes
  placeholder: string
  type: string
}

function Input({ formik, name, placeholder, type }: PropTypes) {
  function hasError(input: keyof FormTypes) {
    return formik.errors[input] && formik.touched[input]
  }

  const inputStyle = `${
    hasError(name) ? "border-pink" : ""
  } border-2 w-full border-gray-200 placeholder:font-semibold rounded-lg p-2.5 outline-none focus:ring-violet focus:border-violet`

  return (
    <div className="relative">
      <input
        value={formik.values[name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        type={type}
        name={name}
        placeholder={`${hasError(name) ? "" : placeholder}`}
        className={inputStyle}
      />
      <div className=" absolute top-[50%] translate-y-[-50%] right-6 flex gap-3">
        <Error style={` ${hasError(name) ? "block" : "hidden"} `} />
      </div>
      <div className="absolute right-0 -bottom-4.5 md:-bottom-6 text-sm text-pink ">
        {hasError(name) ? formik.errors[name] : ""}
      </div>
    </div>
  )
}

export default Input
