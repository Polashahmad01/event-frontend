import { Outlet } from "react-router"
import { Box, Container } from "@mui/material"

import { RootAppNavbar } from "../components/RootAppNavbar"

export const RootAppLayout = () => {

  return (
    <>
      <RootAppNavbar />
      <Box>
        <Container>
          <Outlet />
        </Container>
      </Box>
    </>
  )
}
