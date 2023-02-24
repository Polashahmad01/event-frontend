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
    <Box
      sx={{
        backgroundColor: "#fff",
        marginTop: "2rem",
        borderRadius: "5px",
        padding: "2rem 1.5rem"
      }}
    >
      {eventType && eventType === "link" && <LinkPublic />}
      {eventType && eventType === "youtube" && <YouTubePublic />}
      {eventType && eventType === "pdf" && <PdfPublic />}
      {eventType && eventType === "google_doc" && <GoogleDocPublic />}
    </Box>
  )
}
