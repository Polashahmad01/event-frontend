import { useState, useMemo, useEffect } from "react"

import { EventHttpClient } from "../../../../../lib/http/EventHttpClient"

export const useEventList = () => {
  const [eventLists, setEventLists] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const eventHttpClient = useMemo(() => new EventHttpClient())

  const fetchAllEvents = async () => {
    try {
      setIsLoading(true)
      const response = await eventHttpClient.searchAll()
      const { events } = response
      setEventLists(events)
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    fetchAllEvents()
  },[])

  return {
    isLoading,
    eventLists
  }
}
