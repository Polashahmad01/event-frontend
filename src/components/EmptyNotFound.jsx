import Typography from "@mui/material/Typography"

export const EmptyNotFound = ({ text }) => {

  return (
    <Typography
      component="p"
      variant="subtitle2"
      textAlign="center"
    >
      {text}
    </Typography>
  )
}
