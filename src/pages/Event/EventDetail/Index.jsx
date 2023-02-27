import { Box } from "@mui/system"

import { useEventDetail } from "./hooks/useEventDetail"
import { EventDetailTile } from "./components/EventDetailTile"

export const EventDetailPage = () => {
  const { event, recommendedEvents } = useEventDetail()

  return (
    <Box>
      <EventDetailTile event={event} recommendedEvents={recommendedEvents} />
    </Box>
  )
}
