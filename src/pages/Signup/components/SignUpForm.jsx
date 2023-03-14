import { Formik, Form } from "formik"
import { Link } from "react-router-dom"
import { Box } from "@mui/system"
import Stack from "@mui/material/Stack"
import { Button } from "@mui/material"
import { Typography } from "@mui/material"

import { TextFieldWrapper } from "../../../components/form/TextField"
import { useSignUpForm } from "./hooks/useSignUpForm"

export const SignUpForm = () => {
  const { initialFormState, formValidation, invalidEmail, invalidPassword, onSignUpFormHandler } = useSignUpForm()

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

          <Stack spacing={2}>

            <Box paddingRight={22}>
              <Typography
                component="p"
                variant="body"
              >
                Welcome back
              </Typography>
              <Typography
                component="h2"
                variant="h5"
                fontWeight={700}
              >
                Create your account for free
              </Typography>
            </Box>

            <Box>
              <TextFieldWrapper
                name="firstName"
                label="First Name"
              />
            </Box>

            <Box>
              <TextFieldWrapper
                name="lastName"
                label="Last Name"
              />
            </Box>

            <Box>
              <TextFieldWrapper
                name="emailAddress"
                label="Email address"
                type="email"
              />
            </Box>

            <Box>
              <TextFieldWrapper
                name="password"
                label="Password"
                type="password"
              />
            </Box>

            <Box>
              <Button
                type="submit"
                fullWidth={true}
                sx={{
                  cursor: "pointer",
                  padding: "0.7rem 1rem",
                  borderRadius: "4px",
                  border: "none",
                  fontWeight: "700",
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
                Create Account
              </Button>
            </Box>

            <Box>
              <Typography textAlign="center">
                Don't have an account? &nbsp;
                <Link to="/signin">Log in</Link>
              </Typography>
            </Box>

            <Box>
              {invalidEmail && <Typography textAlign="center">Invalid email address</Typography>}
              {invalidPassword && <Typography textAlign="center">Invalid password format</Typography>}
            </Box>

          </Stack>
        </Form>
      </Formik>
    </Box>
  )
}
