import * as Yup from "yup"

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

export const useCreateTagForm = () => {
  const tagsFormHandler = (values, actions) => {
    console.log(values)
  }

  return {
    initialTagFormState: INITIAL_TAG_STATE,
    tagFormValidation: FORM_VALIDATION,
    tagsFormHandler
  }
}
