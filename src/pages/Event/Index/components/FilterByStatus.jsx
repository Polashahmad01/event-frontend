import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"

export const FilterByStatus = ({ isDraftSelected, isPublishSelected, isUnpublishSelected, onDraftEventHandler, onPublishEventHandler, onUnPublishEventHandler, onResetStatusFilterHandler }) => {

  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center" marginTop={4}>
        <Box>
          <Typography
            component="h6"
            variant="h6"
            fontWeight={400}
          >
            Status
          </Typography>
        </Box>
        <Box>
          <Button
            size="medium"
            onClick={onResetStatusFilterHandler}
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

      <Stack marginLeft={1} marginTop={1}>
        <FormControlLabel
          label="Draft"
          control={
            <Checkbox
              size="small"
              checked={isDraftSelected}
              onChange={onDraftEventHandler}
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
          label="Publish"
          control={
            <Checkbox
              size="small"
              checked={isPublishSelected}
              onChange={onPublishEventHandler}
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
          label="Unpublish"
          control={
            <Checkbox
              size="small"
              checked={isUnpublishSelected}
              onChange={onUnPublishEventHandler}
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
