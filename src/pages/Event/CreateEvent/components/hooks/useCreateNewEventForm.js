import { useState, useEffect, useMemo } from "react"
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

const defaultSuccessMessage = "Event has been successfully created"
const defaultErrorMessage = "This event title is already been taken. Please choose another title"

export const useCreateNewEventForm = () => {
  const [tags, setTags] = useState([])
  const [isShowFileUpload, setIsShowFileUpload] = useState(false)
  const { notifySuccess, notifyError } = useNotification()
  const eventHttpClient = useMemo(() => new EventHttpClient())

  const showFileUploadHandler = (event) => {
    if (event.target.dataset.value === CONTENT_TYPES[2].label) {
      setIsShowFileUpload(true)
    } else {
      setIsShowFileUpload(false)
    }
  }

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

  useEffect(() => {
    const fetchTags = async () => {
      const response = await eventHttpClient.getAllTags()
      setTags(response.data)
    }
  
    fetchTags()
  },[])

  return {
    initialFormState: INITIAL_FORM_STATE,
    formValidation: FORM_VALIDATION,
    contentTypes: CONTENT_TYPES,
    tags,
    isShowFileUpload,
    eventFormHandler,
    showFileUploadHandler
  }
}
