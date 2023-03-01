import { useState, useEffect, useMemo } from "react"
import * as Yup from "yup"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"

import { storage } from "../../../../../lib/firebase"
import { YOUTUBE_URL_REGEXP as youtubeUrl } from "../../../../../lib/constants"
import { EventHttpClient } from "../../../../../lib/http/EventHttpClient"
import { useNotification } from "../../../../../hooks/useNotification"

const defaultEditErrorMessage = "Event has been successfully edited"
const defaultEditSuccessMessage = "Unable to edit the event. Please try again later"

export const useEditEventForm = ({ event }) => {
  const INITIAL_FORM_STATE = {
    title: event.title,
    author: event.author,
    eventType: event.eventType,
    tags: event.tags,
    contentUrl: event.contentUrl,
    summary: event.summary,
    description: event.description
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

  const { title, author, eventType, tags, contentUrl, summary, description, _id } = event
  const [isShowFileUpload, setIsShowFileUpload] = useState(false)
  const [uploadFile, setUploadFile] = useState([])
  const [hasValidFileType, setHasValidFileType] = useState(false)
  const [fileUrl, setFileUrl] = useState("")
  const [progress, setProgress] = useState(0)
  const eventHttpClient = useMemo(() => new EventHttpClient())
  const { notifySuccess, notifyError } = useNotification()

  const showFileUploadHandler = (event) => {
    if (event.target.dataset.value === CONTENT_TYPES[2].label) {
      setIsShowFileUpload(true)
    } else {
      setIsShowFileUpload(false)
    }
  }

  const editEventFormSubmitHandler = async (values, actions) => {
    const editedEventFormData = {
      title: values.title,
      author: values.author,
      eventType: values.eventType,
      tags: values.tags,
      contentUrl: values.contentUrl,
      summary: values.summary,
      description: values.description,
      isSaved: true,
      isPublished: values.isPublished || false,
      isUnPublished: values.isPublished || false,
      imageUrl: fileUrl || "undefined",
      status: "draft",
      createdAt: new Date()
    }

    const response = await eventHttpClient.createNewEvent(editedEventFormData)
    const { data: { acknowledged, insertedId }} = response

    if(insertedId) {
      setEventId(insertedId)
    // Enable Publish
    }

    if(acknowledged === false) {
      notifyError(defaultEditErrorMessage)
    } else {
      notifySuccess(defaultEditSuccessMessage)
    }
  }

  const uploadFileHandler = (file) => {
    if(!file) {
      return
    }

    const storageRef = ref(storage, `/files/event-image/${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file)

    uploadTask.on("state_changed", (snapshot) => {
      const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
      setProgress(prog)
    },
    (err) => console.log(err),
    () => {
      getDownloadURL(uploadTask.snapshot.ref)
        .then((url) => setFileUrl(url))
    }
    )
  }

  useEffect(() => {
    if(hasValidFileType) {
      uploadFileHandler(uploadFile)
    }
  },[hasValidFileType])


  return {
    initialFormState: INITIAL_FORM_STATE,
    formValidation: FORM_VALIDATION,
    contentTypes: CONTENT_TYPES,
    title,
    author,
    eventType,
    tags,
    contentUrl,
    summary,
    description,
    isShowFileUpload,
    progress,
    setHasValidFileType,
    editEventFormSubmitHandler,
    showFileUploadHandler,
    setUploadFile
  }
}
