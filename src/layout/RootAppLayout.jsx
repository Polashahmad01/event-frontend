import { Outlet } from "react-router"
import { Box, Container } from "@mui/material"

export const RootAppLayout = () => {

  return (
    <>
      <Box>
        <Container>
          <Outlet />
        </Container>
      </Box>
    </>
  )
}
