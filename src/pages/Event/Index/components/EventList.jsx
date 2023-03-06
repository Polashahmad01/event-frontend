import Stack from "@mui/material/Stack"

import { EventItem } from "./EventItem"

export const EventList = ({ eventLists }) => {

  return (
    <Stack>
      {eventLists.map(event => (
        <EventItem
          key={event._id}
          event={event}
        />
      ))}
    </Stack>
  )
}
