import { TextField, MenuItem } from "@mui/material"
import { useField, useFormikContext } from "formik"

export const SelectField = ({ name, options, ...otherProps }) => {
  const [field, meta] = useField(name)
  const { setFieldValue } = useFormikContext()

  const selectFieldChangeHandler = event => {
    const { value } = event.target
    setFieldValue(name, value)
  }

  const configSelectField = {
    ...field,
    ...otherProps,
    select: true,
    variant: "outlined",
    fullWidth: true,
    size: "small",
    onChange: selectFieldChangeHandler
  }

  if(meta && meta.touched && meta.error) {
    configSelectField.error = true
    configSelectField.helperText = meta.error
  }

  return (
    <TextField
    {...configSelectField}
    >
      {options.map(option => (
        <MenuItem
          key={option.id} 
          value={option.label}
        >
          {option.value}
        </MenuItem>
      ))}
    </TextField>
  )
}
