import { useState, useEffect, useMemo } from "react"
import { useParams } from "react-router-dom"

import { EventHttpClient } from "../../../../../../lib/http/EventHttpClient"

export const usePrivateRecommendedEventDetail = () => {
  const [eventDetail, setEventDetail] = useState({})
  const params = useParams()
  const eventHttpClient = useMemo(() => new EventHttpClient())

  useEffect(() => {
    const fetchEventDetail = async () => {
      const response = await eventHttpClient.fetchSingleEvent(params.recommendedId)
      setEventDetail(response.data)
    }
    fetchEventDetail()
  },[])

  return {
    eventDetail
  }
}
