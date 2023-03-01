import { useState, useEffect, useMemo } from "react"
import { useParams } from "react-router-dom"

import { EventHttpClient } from "../../../../lib/http/EventHttpClient"

export const useEditEvent = () => {
  const [event, setEvent] = useState({})
  const params = useParams()
  const eventHttpClient = useMemo(() => new EventHttpClient())

  useEffect(() => {
    const fetchEditableEvent = async () => {
      const response = await eventHttpClient.fetchSingleEvent(params.eventId)
      setEvent(response.data)
    }
    fetchEditableEvent()
  }, [])

  return {
    event
  }
}
