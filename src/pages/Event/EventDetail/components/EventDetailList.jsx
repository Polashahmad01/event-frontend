import { EventDetailItem } from "./EventDetailItem"

export const EventDetailList = ({ recommendedEvents }) => {

  return (
    <>
      {recommendedEvents.map(recommend => (
        <EventDetailItem
          key={recommend._id}
          recommend={recommend}
        />
      ))}
    </>
  )
}
