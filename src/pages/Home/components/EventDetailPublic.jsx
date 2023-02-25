import { useParams } from "react-router-dom"
import Box from "@mui/material/Box"

import { useEventDetailPublic } from "./hooks/useEventDetailPublic"
import { GoogleDocPublic } from "./GoogleDocPublic"
import { LinkPublic } from "./LinkPublic"
import { PdfPublic } from "./PdfPublic"
import { YouTubePublic } from "./YouTubePublic"

export const EventDetailPublic = () => {
  const { eventId } = useParams()
  const { event } = useEventDetailPublic(eventId)
  const { eventType } = event

  return (
    <Box>
      {eventType && eventType === "link" && <LinkPublic event={event} />}
      {eventType && eventType === "youtube" && <YouTubePublic event={event} />}
      {eventType && eventType === "pdf" && <PdfPublic event={event} />}
      {eventType && eventType === "google_doc" && <GoogleDocPublic event={event} />}
    </Box>
  )
}
