import { useState } from "react"
import { useField, useFormikContext } from "formik"
import TextField from "@mui/material/TextField"
import Autocomplete from "@mui/material/Autocomplete"

export const TagsField = ({ name, label, tags }) => {
  const [tagsValue, setTagsValue] = useState([])
  const { setFieldValue } = useFormikContext()
  const [field] = useField(name)

  const tagsChangeHandler = (event, newTag) => {
    setTagsValue(newTag)
    setFieldValue(name, newTag)
  }

  return (
    <Autocomplete
      multiple
      id="size-small-outlined-multi"
      size="small"
      {...field}
      name={name}
      options={tags}
      getOptionLabel={(option) => option.tagName}
      value={tagsValue}
      onChange={tagsChangeHandler}
      renderInput={(params) => (
        <TextField {...params} label={label} />
      )}
    />
  )
}
