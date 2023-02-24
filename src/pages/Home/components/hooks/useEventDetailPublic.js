import { useState, useEffect, useMemo } from "react"

import { EventHttpClient } from "../../../../lib/http/EventHttpClient"

export const useEventDetailPublic = (eventId) => {
  const [event, setEvent] = useState({})
  const eventHttpClient = useMemo(() => new EventHttpClient())

  useEffect(() => {
    const fetchEvent = async () => {
      const response = await eventHttpClient.fetchSingleEvent(eventId)
      setEvent(response.data)
    }

    fetchEvent()
  },[])

  return {
    event
  }
}
