import { Box } from "@mui/system"

import { useEditEvent } from "./hooks/useEditEvent"
import { EditEventForm } from "./components/EditEventForm"

export const EditEventPage = () => {
  const { event } = useEditEvent()

  return (
    <Box>
      {Object.keys(event).length !== 0 && <EditEventForm event={event} /> }
    </Box>
  )
}
