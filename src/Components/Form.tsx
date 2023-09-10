import { useFormik } from "formik"
import * as Yup from "yup"
import Error from "./Error"

function Form() {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  }
  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      firstName: Yup.string().required("Name is required"),
      lastName: Yup.string().required("Last Name is required"),
      email: Yup.string()
        .required("Email is required")
        .email("Looks like this is not an email"),
      password: Yup.string().required("Password is required"),
    }),
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
        className="bg-white p-4 flex flex-col gap-4 rounded-lg"
      >
        <div className="relative">
          <input
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            name="firstName"
            placeholder="First Name"
            className="border-2 w-full border-gray-200 placeholder:font-semibold rounded-lg p-2.5 outline-none focus:ring-violet focus:border-violet "
          />
          <Error
            style={` ${
              formik.errors.firstName && formik.touched.firstName
                ? "block"
                : "hidden"
            } absolute top-[50%] translate-y-[-50%] right-6`}
          />
        </div>
        <div className="relative">
          <input
            value={formik.values.lastName}
            onChange={formik.handleChange}
            name="lastName"
            onBlur={formik.handleBlur}
            type="text"
            placeholder="Last Name"
            className="border-2 w-full border-gray-200 rounded-lg p-2.5 placeholder:font-semibold outline-none focus:ring-violet focus:border-violet "
          />
          <Error
            style={` ${
              formik.errors.lastName && formik.touched.lastName
                ? "block"
                : "hidden"
            } absolute top-[50%] translate-y-[-50%] right-6`}
          />
        </div>
        <div className="relative">
          <input
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="email"
            type="email"
            placeholder="Email"
            className="border-2 w-full border-gray-200 rounded-lg p-2.5 placeholder:font-semibold outline-none focus:ring-violet focus:border-violet "
          />
          <Error
            style={` ${
              formik.errors.email && formik.touched.email ? "block" : "hidden"
            } absolute top-[50%] translate-y-[-50%] right-6`}
          />
        </div>
        <div className="relative">
          <input
            value={formik.values.password}
            onChange={formik.handleChange}
            name="password"
            onBlur={formik.handleBlur}
            type="password"
            placeholder="Password"
            className="border-2 w-full border-gray-200 rounded-lg p-2.5 placeholder:font-semibold outline-none focus:ring-violet focus:border-violet "
          />
          <Error
            style={` ${
              formik.errors.password && formik.touched.password
                ? "block"
                : "hidden"
            } absolute top-[50%] translate-y-[-50%] right-6`}
          />
        </div>
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
