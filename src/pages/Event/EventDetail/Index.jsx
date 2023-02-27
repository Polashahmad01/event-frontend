import { Box } from "@mui/system"

import { useEventDetail } from "./hooks/useEventDetail"
import { EventDetailTile } from "./components/EventDetailTile"

export const EventDetailPage = () => {
  const { event } = useEventDetail()

  return (
    <Box>
      <EventDetailTile event={event} />
    </Box>
  )
}
