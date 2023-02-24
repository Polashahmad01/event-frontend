import { useState, useEffect, useMemo } from "react"

import { EventHttpClient } from "../../../../lib/http/EventHttpClient"

export const useEventList = () => {
  const [events, setEvents] = useState([])
  const eventHttpClient = useMemo(() => new EventHttpClient())

  useEffect(() => {
    const fetchAllEvents = async () => {
      const response = await eventHttpClient.fetchAllEvents()
      const { data } = response
      const filteredEvents = data.filter(item => item.isPublished === true)
      setEvents(filteredEvents)
    }
    fetchAllEvents()
  },[])

  return {
    events
  }
}
