import { useState, useEffect, useMemo } from "react"
import { useParams } from "react-router-dom"

import { EventHttpClient } from "../../../../lib/http/EventHttpClient"

export const useEventDetail = () => {
  const [event, setEvent] = useState({})
  const eventHttpClient = useMemo(() => new EventHttpClient())
  const params = useParams()

  useEffect(() => {
    const fetchEvent = async () => {
      const response = await eventHttpClient.fetchSingleEvent(params.eventId)
      setEvent(response.data)
    }
    fetchEvent()
  },[])

  return {
    event
  }
}
