import { useState, useMemo, useEffect } from "react"

import { useFilterByTypeStatusAndSearch } from "./useFilterByTypeStatusTagAndSearch"
import { EventHttpClient } from "../../../../../lib/http/EventHttpClient"

export const useEventList = () => {
  const [eventLists, setEventLists] = useState([])
  const [tags, setTags] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const hasEvents = eventLists.length === 0
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
    onResetStatusFilterHandler,
    onFilterByTagHandler,
    onResetTagFilterHandler,
    onExecuteSearch
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

  const fetchAllTags = async () => {
    try {
      setIsLoading(true)
      const response = await eventHttpClient.getAllTags()
      const { data } = response
      setTags(data)

    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    fetchAllEvents()
  },[eventState.eventTypes, eventState.statuses, eventState.tags])

  useEffect(() => {
    fetchAllTags()
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchAllEvents()
    }, 500)

    return () => {
      clearTimeout(timer)
    }
  }, [eventState.query])


  return {
    isLoading,
    eventLists,
    tags,
    hasEvents,
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
    onResetStatusFilterHandler,
    onFilterByTagHandler,
    onResetTagFilterHandler,
    onExecuteSearch
  }
}
