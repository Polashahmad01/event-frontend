import { useEventListPublic } from "./hooks/useEventListPublic"
import { EventItemPublic } from "./EventItemPublic"

export const EventListPublic = () => {
  const { events } = useEventListPublic()

  return (
    <>
      {events.map(event => (
        <EventItemPublic
          key={event._id}
          event={event}
        />
      ))}
    </>
  )
}
