import { useMemo } from "react"

import { EventHttpClient } from "../../../../../lib/http/EventHttpClient"
import { useNotification } from "../../../../../hooks/useNotification"

const defaultUnPublishSuccessMessage = "Event has been successfully unPublished"
const defaultUnPublishErrorMessage = "Unable to unPublish the event. Something went wrong"

export const useUnPublishEvent = () => {
  const { notifySuccess, notifyError } = useNotification()
  const eventHttpClient = useMemo(() => new EventHttpClient())

  const unPublishEventHandler = async (eventId) => {
    const unPublishFormData = {
      isPublished: false,
      isUnPublished: true,
      status: "unPublished"
    }

    const response = await eventHttpClient.unPublishEvent(eventId, unPublishFormData)
    const { data: { acknowledged }} = response

    if(acknowledged === false) {
      notifyError(defaultUnPublishErrorMessage)
    } else {
      notifySuccess(defaultUnPublishSuccessMessage)
    }
  }

  return {
    unPublishEventHandler
  }
}
