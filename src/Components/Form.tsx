import { useFormik } from "formik"
import * as Yup from "yup"
import Input from "./Input"
import { FormTypes } from "../Types/Types"

function Form() {
  const initialValues: FormTypes = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  }

  const validate = {
    firstName: Yup.string().required("Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .required("Email is required")
      .email("Looks like this is not an email")
      .test("valid-email", "Looks like this is not an email", (value) => {
        if (!value) return false
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
        return emailRegex.test(value)
      }),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password should be at least 6 characters")
      .max(15, "Password cannot be longer that 15 charactersf"),
  }

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object(validate),
    onSubmit: () => {
      alert("submitted")
    },
  })

  console.log(formik.errors)

  return (
    <div className="flex flex-col gap-5">
      <button className="bg-violet rounded-lg text-white py-4 md:py-3 flex-center">
        <p className="text-center max-w-[20ch] md:max-w-auto">
          <strong>Try it free 7 days</strong> then $20/mo thereafter
        </p>
      </button>

      <form
        onSubmit={formik.handleSubmit}
        className="bg-white p-4 flex flex-col gap-5 rounded-lg"
      >
        <Input
          formik={formik}
          name="firstName"
          placeholder="First Name"
          type="text"
        />
        <Input
          formik={formik}
          name="lastName"
          placeholder="Last Name"
          type="text"
        />
        <Input formik={formik} name="email" placeholder="Email " type="email" />
        <Input
          formik={formik}
          name="password"
          placeholder="Password "
          type="password"
        />
        <button
          type="submit"
          className="text-white uppercase py-3 rounded-lg bg-green flex-center tet-2xl font-bold"
        >
          claim your free trial
        </button>

        <p className="text-gray-300 text-center text-sm max-w-[40ch] mx-auto term:max-w-max">
          By clicking the button, you are agreeing to our
          <span className="text-pink font-semibold "> Terms and Services</span>
        </p>
      </form>
    </div>
  )
}

export default Form
