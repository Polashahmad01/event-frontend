import { Outlet } from "react-router"
import { Box, Container } from "@mui/material"
import { ToastContainer } from "react-toastify"

import { RootAppNavbar } from "../components/RootAppNavbar"

import "react-toastify/dist/ReactToastify.css"

export const RootAppLayout = () => {

  return (
    <>
      <RootAppNavbar />
      <Box>
        <Container>
          <Outlet />
          <ToastContainer
            position="top-right"
            autoClose={1500}
            hideProgressBar
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </Container>
      </Box>
    </>
  )
}
