import { useState, useMemo } from "react"
import { useNavigate } from "react-router-dom"
import * as Yup from "yup"
import { createUserWithEmailAndPassword } from "firebase/auth"

import { auth } from "../../../../lib/firebase"
import { PersonHttpClient } from "../../../../lib/http/PersonHttpClient"
import { useNotification } from "../../../../hooks/useNotification"

const INITIAL_FORM_STATE = {
  firstName: "",
  lastName: "",
  emailAddress: "",
  password: ""
}

const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string()
    .required("first name is required"),
  lastName: Yup.string()
    .required("last name is required"),
  emailAddress: Yup.string()
    .required("email is required"),
  password: Yup.string()
    .required("password is required")
})

const defaultErrorMessage = "Unable to create new user"
const defaultSuccessMessage = "User has been successfully created"

export const useSignUpForm = () => {
  const [invalidEmail, setInvalidEmail] = useState(false)
  const [invalidPassword, setInvalidPassword] = useState(false)
  const personHttpClient = useMemo(() => new PersonHttpClient())
  const { notifySuccess, notifyError } = useNotification()
  const navigate = useNavigate()

  const signUpFormHandler = (values, actions) => {
    userSignUpHandler(values.emailAddress, values.password)
    postPersonSignUpData(values.firstName, values.lastName)
  }

  const userSignUpHandler = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
    } catch (error) {
      setInvalidEmail(error.message.includes("auth/invalid-email"))
      setInvalidPassword(error.message.includes("auth/weak-password"))
    }
  }

  const postPersonSignUpData = async (firstName, lastName) => {
    const response = await personHttpClient.createPerson({ firstName, lastName})
    const { data: { acknowledged }} = response

    if(acknowledged === false) {
      notifyError(defaultErrorMessage)
    } else {
      notifySuccess(defaultSuccessMessage)
      navigate("/")
    }
  }

  return {
    initialFormState: INITIAL_FORM_STATE,
    formValidation: FORM_VALIDATION,
    invalidEmail,
    invalidPassword,
    onSignUpFormHandler: signUpFormHandler
  }
}
