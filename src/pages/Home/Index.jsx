import { Box } from "@mui/system"

import { HomeEventBanner } from "./components/HomeEventBanner"
import { EventList } from "./components/EventList"

export const HomePage = () => {
  return (
    <Box>
      <HomeEventBanner />
      <EventList />
    </Box>
  )
}
