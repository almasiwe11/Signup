import { useFormikForm } from "../Hooks/useFormikForm"
import Input from "./Input"

function Form() {
  const formik = useFormikForm({
    onSubmit: () => {
      alert("submittted")
    },
  })
  return (
    <div className="flex flex-col gap-5">
      <button className="bg-violet rounded-lg text-white py-4 md:py-3 flex-center">
        <p className="text-center max-w-[20ch] md:max-w-auto">
          <strong>Try it free 7 days</strong> then $20/mo thereafter
        </p>
      </button>

      <form
        onSubmit={formik.handleSubmit}
        className="bg-white p-4 flex md:p-9 flex-col gap-5 md:gap-8 rounded-lg"
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
