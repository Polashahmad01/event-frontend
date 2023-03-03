import Stack from "@mui/material/Stack"
import CircularProgress from "@mui/material/CircularProgress"

import { useEventList } from "./hooks/useEventList"

import { EventItem } from "./EventItem"

export const EventList = () => {
  const { isLoading, eventLists } = useEventList()

  return (
    <Stack>
      {isLoading && 
        <CircularProgress 
          color="secondary"
          thickness={5}
          sx={{
            margin: "auto"
          }}
        />
      }
      {!isLoading && eventLists.map(event => (
        <EventItem
          key={event._id}
          event={event}
        />
      ))}
    </Stack>
  )
}
