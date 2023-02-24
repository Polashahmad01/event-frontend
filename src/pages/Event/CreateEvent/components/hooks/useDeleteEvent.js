import { useMemo } from "react"

import { EventHttpClient } from "../../../../../lib/http/EventHttpClient"
import { useNotification } from "../../../../../hooks/useNotification"

const defaultDeleteSuccessMessage = "Event has been successfully deleted"
const defaultDeleteErrorMessage = "Unable to delete the event. Something went wrong"

export const useDeleteEvent = () => {
  const { notifySuccess, notifyError } = useNotification()
  const eventHttpClient = useMemo(() => new EventHttpClient())

  const eventDeleteHandler = async (eventId) => {
    const response = await eventHttpClient.deleteEvent(eventId)
    const { data: { acknowledged } } = response

    if(acknowledged === false) {
      notifyError(defaultDeleteErrorMessage)
    } else {
      notifySuccess(defaultDeleteSuccessMessage)
    }
  }

  return {
    eventDeleteHandler,
  }
}
