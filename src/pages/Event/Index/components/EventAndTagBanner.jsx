import Box from "@mui/material/Box"
import Grid2 from "@mui/material/Unstable_Grid2"
import Typography from "@mui/material/Typography"

import { Link } from "react-router-dom"

export const EventAndTagBanner = () => {

  return (
    <Box
      sx={{
        backgroundColor: "#F6694D",
        marginTop: "2rem",
        borderRadius: "5px",
        color: "white",
        padding: "2rem 1.5rem"
      }}
    >
      <Grid2 container spacing={2} display="flex" justifyContent="space-between" alignItems="flex-end">
        <Grid2 xs="8">
          <Typography
            variant="h6"
            component="h2"
            sx={{
              letterSpacing: "0.05rem",
              marginBottom: "0.3rem"
            }}
          >
            Event Screening
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            sx={{
              fontWeight: 300,
              marginBottom: "1.5rem"
            }}
          >
            Easily create new event with few clicks
          </Typography>
        </Grid2>
        <Grid2 xs="4">
          <Grid2 container>
            <Link to="/event/new">
              <Typography
                variant="subtitle2"
                component="button"
                sx={{
                  cursor: "pointer",
                  marginRight: "1rem",
                  padding: "0.3rem 1rem",
                  borderRadius: "4px",
                  border: "none",
                  fontWeight: "500",
                  fontSize: "0.8rem",
                  backgroundColor: "black",
                  color: "white",
                  transition: "all 0.3s ease-in",
                  '&:hover': {
                    backgroundColor: "#F79B67",
                    color: "white"
                  }
                }}
              >
                Add Event
              </Typography>
            </Link>
            <Link to="/tags/new">
              <Typography
                variant="subtitle2"
                component="button"
                sx={{
                  cursor: "pointer",
                  padding: "0.3rem 1rem",
                  borderRadius: "4px",
                  border: "none",
                  fontWeight: "500",
                  fontSize: "0.8rem",
                  backgroundColor: "black",
                  color: "white",
                  transition: "all 0.3s ease-in",
                  '&:hover': {
                    backgroundColor: "#F79B67",
                    color: "white"
                  }
                }}
              >
                Add Tags
              </Typography>
            </Link>
          </Grid2>
        </Grid2>
      </Grid2>
    </Box>
  )
}
