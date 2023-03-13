import { Formik, Form } from "formik"
import { Link } from "react-router-dom"
import { Box } from "@mui/system"
import { Button } from "@mui/material"
import { Typography } from "@mui/material"
import Stack from "@mui/material/Stack"

import { TextFieldWrapper } from "../../../components/form/TextField"
import { useSignInForm } from "./hooks/useSignInForm"

export const SignInForm = () => {
  const { initalFormState, formValidation, emailNotFound, invalidPassword, onSignInFormHandler } = useSignInForm()

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
          ...initalFormState
        }}
        validationSchema={
          formValidation
        }
        onSubmit={onSignInFormHandler}
      >
        <Form>
          <Stack spacing={2}>
            <Box paddingRight={26}>
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
                Login to your account
              </Typography>
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
              <Link to="/">
                <Typography
                  textAlign="end"
                  component="p"
                  variant="body2"
                >
                  Forgot password?
                </Typography>
              </Link>
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
                Login
              </Button>
            </Box>
            <Box>
              <Typography textAlign="center">
                Don't have an account? &nbsp;
                <Link to="/signup">Sign up for free</Link>
              </Typography>
            </Box>
            <Box>
              {emailNotFound && <Typography textAlign="center">User not found</Typography>}
              {invalidPassword && <Typography textAlign="center">Invalid password</Typography>}
            </Box>
          </Stack>
        </Form>
      </Formik>
    </Box>
  )
}
