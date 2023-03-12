import { useState } from "react"
import * as Yup from "yup"

const INITIAL_FORM_STATE = {
  firstName: "",
  lastName: "",
  emailAddress: "",
  password: "",
  confirmPassword: ""
}

const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string()
    .required("firstName is required"),
  lastName: Yup.string()
    .required("lastName is required")
})

export const useSignUpForm = () => {

  const signUpFormHandler = (values, actions) => {
    console.log('values', values)
  }

  return {
    initialFormState: INITIAL_FORM_STATE,
    formValidation: FORM_VALIDATION,
    onSignUpFormHandler: signUpFormHandler
  }
}
