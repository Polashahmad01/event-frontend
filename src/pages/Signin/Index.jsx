import { Stack } from "@mui/system"

import { SignInForm } from "./components/SignInForm"

export const SignInPage = () => {

  return (
    <>
      <Stack justifyContent="center" alignItems="center" height="93vh">
        <SignInForm />
      </Stack>
    </>
  )
}
