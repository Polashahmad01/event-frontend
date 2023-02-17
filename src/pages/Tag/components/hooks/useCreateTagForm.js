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

  const postTagData = async (data) => {
    const response = await fetch('https://event-backend.vercel.app/api/v1/tags', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })

    if(!response.ok) {
      throw new Error(`request error ${method} https://event-backend.vercel.app/api/v1/tags statusCode: ${response.status} statusText: ${response.statusText}`)
    }
    
    const result = await response.json()
    return result
  }

  const tagsFormHandler = async (values, actions) => {
    const formData = {
      tagName: values.tagName,
      tagDescription: values.tagDescription
    }

    const data = await postTagData(formData)

    alert(data.data)

    console.log(data)
  }

  return {
    initialTagFormState: INITIAL_TAG_STATE,
    tagFormValidation: FORM_VALIDATION,
    tagsFormHandler
  }
}
