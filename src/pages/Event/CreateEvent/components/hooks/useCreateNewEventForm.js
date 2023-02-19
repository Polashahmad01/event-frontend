import { useMemo } from "react"
import * as Yup from "yup"

import { YOUTUBE_URL_REGEXP as youtubeUrl } from "../../../../../lib/constants"
import { EventHttpClient } from "../../../../../lib/http/EventHttpClient"
import { useNotification } from "../../../../../hooks/useNotification"

const INITIAL_FORM_STATE = {
  title: "",
  author: "",
  eventType: "",
  tags: [],
  contentUrl: "",
  summary: "",
  description: ""
}

const FORM_VALIDATION = Yup.object().shape({
  title: Yup.string()
    .min(5)
    .required("title is required"),
  author: Yup.string()
    .required("author is required"),
  eventType: Yup.string()
    .required('content type is required'),
  // tags: Yup.string()
  //   .required("tag is required"),
  contentUrl: Yup.string()
    .matches(youtubeUrl, "invalid content url")
    .required('content url is required'),
  summary: Yup.string()
    .required("summary is required"),
  description: Yup.string()
    .min(10)
    .required("description is required")
})

const CONTENT_TYPES = [
  { 
    id: "1", 
    label: "google_doc", 
    value: "Google Doc" 
  },
  { 
    id: "2", 
    label: "link", 
    value: "Link" 
  },
  { 
    id: "3", 
    label: "pdf", 
    value: "PDF" 
  }, 
  { 
    id: "4", 
    label: "youtube", 
    value: "YouTube"
  }
]

const TAGS = [
  {
    order: 1,
    tagName: "Nice Tag",
    tagDecription: "Nice tag description"
  },
  {
    order: 2,
    tagName: "Best Tag",
    tagDecription: "Best tag description"
  },
  {
    order: 3,
    tagName: "Better Tag",
    tagDecription: "Better tag description"
  }
]

const defaultSuccessMessage = "Event has been successfully created"
const defaultErrorMessage = "This event title is already been taken. Please choose another title"

export const useCreateNewEventForm = () => {
  const { notifySuccess, notifyError } = useNotification()
  const eventHttpClient = useMemo(() => new EventHttpClient())

  const eventFormHandler = async (values, actions) => {
    const newEventFormData = {
      title: values.title,
      author: values.author,
      eventType: values.eventType,
      tags: values.tags,
      contentUrl: values.contentUrl,
      summary: values.summary,
      description: values.description,
      isSaved: true,
      isPublished: values.isPublished || false,
      isUnPublished: values.isPublished || false
    }

    const response = await eventHttpClient.createNewEvent(newEventFormData)
    const { data: { acknowledged }} = response

    if(acknowledged === false) {
      notifyError(defaultErrorMessage)
    } else {
      notifySuccess(defaultSuccessMessage)
    }
  }

  return {
    initialFormState: INITIAL_FORM_STATE,
    formValidation: FORM_VALIDATION,
    contentTypes: CONTENT_TYPES,
    tags: TAGS,
    eventFormHandler
  }
}
