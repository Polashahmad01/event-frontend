import { useState } from "react"
import * as Yup from "yup"

const INITIAL_FORM_STATE = {
  emailAddress: "",
  password: ""
}

const FORM_VALIDATION = Yup.object().shape({
  emailAddress: Yup.string()
    .required("Email address is required"),
  password: Yup.string()
    .required("Password is required")
})

export const useSignInForm = () => {

  const signInFormHandler = (values, actions) => {
    console.log(values)
  }

  return {
    initalFormState: INITIAL_FORM_STATE,
    formValidation: FORM_VALIDATION,
    onSignInFormHandler: signInFormHandler
  }
}
