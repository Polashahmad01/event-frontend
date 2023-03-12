import { Stack } from "@mui/system"

import { SignUpForm } from "./components/SignUpForm"

export const SignUpPage = () => {

  return (
    <>
      <Stack justifyContent="center" alignItems="center" height="93vh">
        <SignUpForm />
      </Stack>
    </>
  )
}
