import * as Yup from "yup"

const INITIAL_FORM_STATE = {
  title: "",
  author: "",
  contentType: "",
  tag: "",
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
  tag: Yup.string()
    .required("tag is required"),
  contentUrl: Yup.string()
    .required('content url is required'),
  summary: Yup.string()
    .required("summary is required"),
  description: Yup.string()
    .required("description is required")
})

export const useCreateNewEventForm = () => {
  const eventFormHandler = (values, actions) => {
    console.log(values)
    console.log(actions)
    actions.resetForm()
  }

  return {
    INITIAL_FORM_STATE,
    FORM_VALIDATION,
    eventFormHandler
  }
}
