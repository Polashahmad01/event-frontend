import * as Yup from "yup"

import { YOUTUBE_URL_REGEXP as youtubeUrl } from "../../../../../lib/constants"

const INITIAL_FORM_STATE = {
  title: "",
  author: "",
  contentType: "",
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
  contentType: Yup.string()
    .required('content type is required'),
  // tags: Yup.string()
  //   .required("tag is required"),
  contentUrl: Yup.string()
    .matches(youtubeUrl, "invalid content url")
    .required('content url is required'),
  summary: Yup.string()
    .required("summary is required"),
  description: Yup.string()
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

export const useCreateNewEventForm = () => {
  const eventFormHandler = (values, actions) => {
    console.log(values)
    actions.resetForm()
  }

  return {
    initialFormState: INITIAL_FORM_STATE,
    formValidation: FORM_VALIDATION,
    contentTypes: CONTENT_TYPES,
    tags: TAGS,
    eventFormHandler
  }
}
