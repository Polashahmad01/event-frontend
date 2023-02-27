import { useParams } from "react-router-dom"
import { useState, useEffect, useMemo } from "react"

import { EventHttpClient } from "../../../../../lib/http/EventHttpClient"

export const useRecommendedEventDetail = () => {
  const params = useParams()
  const [event, setEvent] = useState({})
  const [recommendedEvents, setRecommendedEvents] = useState([])
  const eventHttpClient = useMemo(() => new EventHttpClient())

  useEffect(() => {
    const fetchEvent = async () => {
      const response = await eventHttpClient.fetchSingleEvent(params.recommendedId)
      setEvent(response.data)
      const filterEvents = response.recommendedEvent.filter(item => item.isPublished === true)
      const removeDuplicate = filterEvents.filter(item => item._id !== response.data._id)
      setRecommendedEvents(removeDuplicate)
    }
    fetchEvent()
  },[])

  return {
    event,
    recommendedEvents
  }
}
