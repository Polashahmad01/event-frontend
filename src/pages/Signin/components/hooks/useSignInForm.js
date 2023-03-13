import { useState } from "react"
import { useNavigate } from "react-router-dom"
import * as Yup from "yup"
import { signInWithEmailAndPassword } from "firebase/auth"

import { auth } from "../../../../lib/firebase"

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
  const [emailNotFound, setEmailNotFound] = useState(false)
  const [invalidPassword, setInvalidPassword] = useState(false)
  const navigate = useNavigate()

  const signInFormHandler = (values, actions) => {
    userSignInHandler(values.emailAddress, values.password)
  }

  const userSignInHandler = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate("/")
    } catch (error) {
      setEmailNotFound(error.message.includes("auth/user-not-found"))
      setInvalidPassword(error.message.includes("auth/wrong-password"))
    }
  }

  return {
    initalFormState: INITIAL_FORM_STATE,
    formValidation: FORM_VALIDATION,
    emailNotFound,
    invalidPassword,
    onSignInFormHandler: signInFormHandler
  }
}
