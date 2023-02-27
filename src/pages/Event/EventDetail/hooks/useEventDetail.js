import { useState, useEffect, useMemo } from "react"
import { useParams } from "react-router-dom"

import { EventHttpClient } from "../../../../lib/http/EventHttpClient"

export const useEventDetail = () => {
  const [event, setEvent] = useState({})
  const [recommendedEvents, setRecommendedEvents] = useState([])
  const eventHttpClient = useMemo(() => new EventHttpClient())
  const params = useParams()

  useEffect(() => {
    const fetchEvent = async () => {
      const response = await eventHttpClient.fetchSingleEvent(params.eventId)
      setEvent(response.data)
      const filteredEvents = response.recommendedEvent.filter(item => item._id !== response.data._id)
      setRecommendedEvents(filteredEvents)
    }
    fetchEvent()
  },[])

  return {
    event,
    recommendedEvents
  }
}
