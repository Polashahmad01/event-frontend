import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"

export const FilterByType = ({ isGoogleDocSelected, setIsGoogleDocSelected,  setFilter }) => {

  const googleDocChangeHandler = event => {
    setIsGoogleDocSelected(!isGoogleDocSelected)
    if(isGoogleDocSelected === false) {
      setFilter({
        eventTypes: [
          "google_doc"
        ]
      })
    }

    if(isGoogleDocSelected === true) {
      setFilter({})
    }
  }

  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography
            component="h6"
            variant="h6"
            fontWeight={400}
          >
            Type
          </Typography>
        </Box>
        <Box>
          <Button
            size="medium"
            sx={{
            textTransform: "initial",
            fontWeight: 300,
            padding: "0.01rem",
            color: "inherit"
            }}
          >
          reset
          </Button>
        </Box>
      </Stack>
      <Stack marginLeft={1} marginTop={2}>
        
        <FormControlLabel
          label="Google Doc"
          control={
            <Checkbox
              size="small"
              checked={isGoogleDocSelected}
              onChange={googleDocChangeHandler}
            />
          }
          sx={{
            ".MuiFormControlLabel-label": {
              marginLeft: "0.5rem",
              fontWeight: "300",
              fontSize: "0.9rem"
            }
          }}
        />
      </Stack>
    </>
  )
}
