import { useMemo } from "react"
import * as Yup from "yup"

import { TagsHttpClient } from "../../../../lib/http/TagsHttpClient"
import { useNotification } from "../../../../hooks/useNotification"

const INITIAL_TAG_STATE = {
  tagName: "",
  tagDescription: ""
}

const FORM_VALIDATION = Yup.object().shape({
  tagName: Yup.string()
    .min(2)
    .required('tag name is required'),
  tagDescription: Yup.string()
    .min(5)
    .required('tag description is required')
})

const defaultSuccessMessage = "Tag has been successfully created"
const defaultErrorMessage = "This tag is already been created. Please choose another tag name"

export const useCreateTagForm = () => {
  const { notifySuccess, notifyError } = useNotification()
  const tagsHttpClient = useMemo(() => new TagsHttpClient())

  const tagsFormHandler = async (values, actions) => {
    const formData = {
      tagName: values.tagName,
      tagDescription: values.tagDescription
    }

    const response = await tagsHttpClient.createNewTag(formData)
    const { data: { acknowledged } } = response

    if(acknowledged === false) {
      notifyError(defaultErrorMessage)
    } else {
      notifySuccess(defaultSuccessMessage)
    }
  }

  return {
    initialTagFormState: INITIAL_TAG_STATE,
    tagFormValidation: FORM_VALIDATION,
    tagsFormHandler
  }
}
