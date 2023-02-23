import { Box } from "@mui/system"
import Grid2 from "@mui/material/Unstable_Grid2"

import { EventAndTagBanner } from "./components/EventAndTagBanner"
import { EventList } from "./components/EventList"

export const EventListingPage = () => {

  return (
    <Box>
      <EventAndTagBanner />
      <Grid2 container marginTop={4} columnSpacing={2}>
        <Grid2 xs={12} md={3}>
          <p style={{ backgroundColor: "blue", marginBottom: "1.5rem" }}>Type</p>
        </Grid2>
        <Grid2 xs={12} md={9}>
          <EventList />
        </Grid2>
      </Grid2>
    </Box>
  )
}
