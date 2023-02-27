import { useState, useEffect, useMemo } from "react"
import { useParams } from "react-router-dom"

import { EventHttpClient } from "../../../../../../lib/http/EventHttpClient"

export const usePrivateRecommendedEventDetail = () => {
  const [eventDetail, setEventDetail] = useState({})
  const [recommendedEvents, setRecommendedEvents] = useState([])
  const params = useParams()
  const eventHttpClient = useMemo(() => new EventHttpClient())

  useEffect(() => {
    const fetchEventDetail = async () => {
      const response = await eventHttpClient.fetchSingleEvent(params.recommendedId)
      setEventDetail(response.data)
      const filteredRecommendedEvents = response.recommendedEvent.filter(item => item._id !== response.data._id)
      setRecommendedEvents(filteredRecommendedEvents)
    }
    fetchEventDetail()
  },[])

  return {
    eventDetail,
    recommendedEvents
  }
}
