import { Box } from "@mui/system"

import { HomeEventBannerPublic } from "./components/HomeEventBannerPublic"
import { EventListPublic } from "./components/EventListPublic"

export const HomePage = () => {
  return (
    <Box>
      <HomeEventBannerPublic />
      <EventListPublic />
    </Box>
  )
}
