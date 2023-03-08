import { useState, useMemo, useEffect } from "react"

import { useFilterByTypeStatusAndSearch } from "./useFilterByTypeStatusTagAndSearch"
import { EventHttpClient } from "../../../../../lib/http/EventHttpClient"

export const useEventList = () => {
  const [eventLists, setEventLists] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const eventHttpClient = useMemo(() => new EventHttpClient())
  const { 
    eventState,
    isGoogleDocSelected,
    isLinkSelected,
    isPdfSelected,
    isYouTubeVideoSelected,
    isDraftSelected,
    isPublishSelected,
    isUnpublishSelected,
    onGoogleDocChangeHandler,
    onLinkChangeHandler,
    onPdfChangeHandler,
    onYouTubeVideoChangeHandler,
    onResetTypeFilterHanlder,
    onDraftEventHandler,
    onPublishEventHandler,
    onUnPublishEventHandler,
    onResetStatusFilterHandler
        } = useFilterByTypeStatusAndSearch()

  const fetchAllEvents = async () => {
    try {
      setIsLoading(true)
      const response = await eventHttpClient.searchAll(eventState)
      const { events } = response
      setEventLists(events)
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    fetchAllEvents()
  },[eventState])

  return {
    isLoading,
    eventLists,
    isGoogleDocSelected,
    isLinkSelected,
    isPdfSelected,
    isYouTubeVideoSelected,
    isDraftSelected,
    isPublishSelected,
    isUnpublishSelected,
    onGoogleDocChangeHandler,
    onLinkChangeHandler,
    onPdfChangeHandler,
    onYouTubeVideoChangeHandler,
    onResetTypeFilterHanlder,
    onDraftEventHandler,
    onPublishEventHandler,
    onUnPublishEventHandler,
    onResetStatusFilterHandler
  }
}
