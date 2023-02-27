import { useState, useEffect, useMemo } from "react"

import { EventHttpClient } from "../../../../lib/http/EventHttpClient"

export const useEventDetailPublic = (eventId) => {
  const [event, setEvent] = useState({})
  const [recommendedEvents, setRecommendedEvents] = useState([])
  const eventHttpClient = useMemo(() => new EventHttpClient())

  useEffect(() => {
    const fetchEvent = async () => {
      const response = await eventHttpClient.fetchSingleEvent(eventId)
      setEvent(response.data)
      const { recommendedEvent } = response
      const filteredRecommendedEvents = recommendedEvent.filter(item => item.isPublished === true)
      const removeDuplicate = filteredRecommendedEvents.filter(item => item._id !== response.data._id)
      setRecommendedEvents(removeDuplicate)
    }

    fetchEvent()
  },[])

  return {
    event,
    recommendedEvents
  }
}
