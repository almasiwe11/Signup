import { FormikProps } from "formik"

type FormTypes = {
  firstName: string
  lastName: string
  email: string
  password: string
}

type FormikTypes = FormikProps<FormTypes>

export type { FormikTypes, FormTypes }
