import { useParams } from "react-router-dom"
import Box from "@mui/material/Box"

import { useEventDetailPublic } from "./hooks/useEventDetailPublic"
import { EventDetailTile } from "./EventDetailTile"
export const EventDetailPublic = () => {
  const { eventId } = useParams()
  const { event } = useEventDetailPublic(eventId)
  const { eventType } = event

  return (
    <Box>
      {eventType && <EventDetailTile event={event} />}
    </Box>
  )
}
