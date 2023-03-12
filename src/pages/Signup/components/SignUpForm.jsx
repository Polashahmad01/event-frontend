import { Formik, Form } from "formik"
import { Box } from "@mui/system"
import Grid2 from "@mui/material/Unstable_Grid2"
import { Button } from "@mui/material"
import { Typography } from "@mui/material"

import { TextFieldWrapper } from "../../../components/form/TextField"
import { useSignUpForm } from "./hooks/useSignUpForm"

export const SignUpForm = () => {
  const { initialFormState, formValidation, onSignUpFormHandler } = useSignUpForm()

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        marginTop: "2rem",
        borderRadius: "5px",
        padding: "2rem 1.5rem"
      }}
    >
      <Formik
        initialValues={{
          ...initialFormState
        }}
        validationSchema={formValidation}
        onSubmit={onSignUpFormHandler}
      >
        <Form>
          <Grid2 container rowSpacing={2}>
            <Grid2 xs={12}>
              <TextFieldWrapper
                name="firstName"
                label="First Name"
              />
            </Grid2>
            <Grid2 xs={12}>
              <TextFieldWrapper
                name="lastName"
                label="Last Name"
              />
            </Grid2>
            <Grid2 xs={12}>
              <TextFieldWrapper
                name="emailAddress"
                label="Email"
              />
            </Grid2>
            <Grid2 xs={12}>
              <TextFieldWrapper
                name="password"
                label="Password"
              />
            </Grid2>
            <Grid2 xs={12}>
              <TextFieldWrapper
                name="confirmPassword"
                label="Confirm password"
              />
            </Grid2>
            <Grid2 xs={12}>
              <Button
                type="submit"
                fullWidth={true}
                sx={{
                  cursor: "pointer",
                  padding: "0.3rem 1rem",
                  borderRadius: "4px",
                  border: "none",
                  fontWeight: "500",
                  fontSize: "0.8rem",
                  textTransform: "revert",
                  backgroundColor: "black",
                  color: "white",
                  transition: "all 0.3s ease-in",
                  '&:hover': {
                    backgroundColor: "#F79B67",
                    color: "white"
                  }
                }}
              >
                Signup
              </Button>
            </Grid2>
          </Grid2>
        </Form>
      </Formik>
    </Box>
  )
}
