import { useFormik } from "formik"
import * as Yup from "yup"
import { FormTypes } from "../Types/Types"

const initialValues: FormTypes = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
}

type useFormikFormProps = {
  onSubmit: () => void
}

export function useFormikForm({ onSubmit }: useFormikFormProps) {
  const validate = {
    firstName: Yup.string().required("Name cannot bet empty"),
    lastName: Yup.string().required("Last Name cannot bet empty"),
    email: Yup.string()
      .required("Email cannot bet empty")
      .email("Looks like this is not an email")
      .test("valid-email", "Looks like this is not an email", (value) => {
        if (!value) return false
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
        return emailRegex.test(value)
      }),
    password: Yup.string()
      .required("Password cannot bet empty")
      .min(6, "Password should be at least 6 characters")
      .max(15, "Password cannot be longer that 15 charactersf"),
  }

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object(validate),
    onSubmit: onSubmit,
  })

  return formik
}
