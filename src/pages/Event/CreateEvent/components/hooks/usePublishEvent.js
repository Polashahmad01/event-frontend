import { useMemo } from "react"

import { EventHttpClient } from "../../../../../lib/http/EventHttpClient"
import { useNotification } from "../../../../../hooks/useNotification"

const defaultPublishSuccessMessage = "Event has been successfully published"
const defaultPublishErrorMessage = "Unable to publish the event. Something went wrong"

export const usePublishEvent = () => {
  const { notifySuccess, notifyError } = useNotification()
  const eventHttpClient = useMemo(() => new EventHttpClient())

  const publishEventHandler = async (eventId) => {
    const publishFormData = {
      isPublished: true,
      isUnPublished: false,
      status: "published"
    }

    const response = await eventHttpClient.publishEvent(eventId, publishFormData)
    const { data: { acknowledged } } = response
    
    if(acknowledged === false) {
      notifyError(defaultPublishErrorMessage)
    } else {
      notifySuccess(defaultPublishSuccessMessage)
    }
  }

  return {
    publishEventHandler
  }
}
