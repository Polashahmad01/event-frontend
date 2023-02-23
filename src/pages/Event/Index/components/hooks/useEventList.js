import { useState, useMemo, useEffect } from "react"

import { EventHttpClient } from "../../../../../lib/http/EventHttpClient"

export const useEventList = () => {
  const [eventLists, setEventLists] = useState([])
  const eventHttpClient = useMemo(() => new EventHttpClient())

  const fetchAllEvents = async () => {
    const response = await eventHttpClient.fetchAllEvents()
    const { data } = response
    setEventLists(data)
  }

  useEffect(() => {
    fetchAllEvents()
  },[])

  return {
    eventLists
  }
}
