import { useState, useMemo, useEffect } from "react"

import { EventHttpClient } from "../../../../../lib/http/EventHttpClient"

const INITIAL_FILTER_DATA = {}

export const useEventList = () => {
  const [eventLists, setEventLists] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const eventHttpClient = useMemo(() => new EventHttpClient())
  const [filter, setFilter] = useState(INITIAL_FILTER_DATA)

  const [isGoogleDocSelected, setIsGoogleDocSelected] = useState(false)
  const [isLinkSelected, setIsLinkSelected] = useState(false)
  const [isPdfSelected, setIsPdfSelected] = useState(false)
  const [isYouTubeVideoSelected, setIsYouTubeVideoSelected] = useState(false)

  const fetchAllEvents = async () => {
    try {
      setIsLoading(true)
      const response = await eventHttpClient.searchAll(filter)
      const { events } = response
      setEventLists(events)
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    fetchAllEvents()
  },[filter])

  console.log('filter', filter)

  return {
    isLoading,
    isGoogleDocSelected,
    isLinkSelected,
    isPdfSelected,
    isYouTubeVideoSelected,
    setIsGoogleDocSelected,
    setIsLinkSelected,
    setIsPdfSelected,
    setIsYouTubeVideoSelected,
    eventLists,
    setFilter
  }
}
