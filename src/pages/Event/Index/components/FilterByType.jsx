import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"

export const FilterByType = ({ isGoogleDocSelected, isLinkSelected, isPdfSelected, isYouTubeVideoSelected, setIsGoogleDocSelected, setIsLinkSelected, setIsPdfSelected, setIsYouTubeVideoSelected, setFilter }) => {

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

  const linkChangeHandler = event => {
    setIsLinkSelected(!isLinkSelected)

    if(isLinkSelected === false) {
      setFilter({
        eventTypes: [
          "link"
        ]
      })
    }

    if(isLinkSelected === true) {
      setFilter({})
    }
  }

  const pdfChangeHandler = event => {
    setIsPdfSelected(!isPdfSelected)

    if(isPdfSelected === false) {
      setFilter({
        eventTypes: [
          "pdf"
        ]
      })
    }

    if(isPdfSelected === true) {
      setFilter({})
    }
  }

  const youTubeVideoChangeHandler = event => {
    setIsYouTubeVideoSelected(!isYouTubeVideoSelected)

    if(isYouTubeVideoSelected === false) {
      setFilter({
        eventTypes: [
          "youtube"
        ]
      })
    }

    if(isYouTubeVideoSelected === true) {
      setFilter({})
    }
  }

  const resetTypeFilter = () => {
    setFilter({})
    setIsGoogleDocSelected(false)
    setIsLinkSelected(false)
    setIsPdfSelected(false)
    setIsYouTubeVideoSelected(false)
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
            onClick={resetTypeFilter}
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

        <FormControlLabel
          label="Link"
          control={
            <Checkbox
              size="small"
              checked={isLinkSelected}
              onChange={linkChangeHandler}
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

        <FormControlLabel
          label="PDF"
          control={
            <Checkbox
              size="small"
              checked={isPdfSelected}
              onChange={pdfChangeHandler}
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

        <FormControlLabel
          label="YouTube Video"
          control={
            <Checkbox
              size="small"
              checked={isYouTubeVideoSelected}
              onChange={youTubeVideoChangeHandler}
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
