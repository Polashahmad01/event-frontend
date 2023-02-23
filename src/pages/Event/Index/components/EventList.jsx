import { useEventList } from "./hooks/useEventList"

import { EventItem } from "./EventItem"

export const EventList = () => {
  const { eventLists } = useEventList()

  return (
    <>
      {eventLists.map(event => (
        <EventItem
          key={event._id}
          event={event}
        />
      ))}
    </>
  )
}
