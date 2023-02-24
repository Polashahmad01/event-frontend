import { useEventList } from "./hooks/useEventList"
import { EventItem } from "./EventItem"

export const EventList = () => {
  const { events } = useEventList()

  return (
    <>
      {events.map(event => (
        <EventItem
          key={event._id}
          event={event}
        />
      ))}
    </>
  )
}
