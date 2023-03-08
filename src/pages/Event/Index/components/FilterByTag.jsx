import { Fragment } from "react"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Chip from "@mui/material/Chip"

export const FilterByTag = ({ tags, onFilterByTagHandler, onResetTagFilterHandler }) => {

  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center" marginTop={4}>
        <Box>
          <Typography
            component="h6"
            variant="h6"
            fontWeight={400}
          >
            Tag
          </Typography>
        </Box>
        <Box>
          <Button
            size="medium"
            onClick={onResetTagFilterHandler}
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
      <Stack direction="row" spacing={2} marginTop={3} flexWrap="wrap">
        <Box>
          {tags.map(tag => (
            <Chip
              key={tag._id}
              label={tag.tagName}
              variant="outlined"
              size="small"
              sx={{
                margin: "0.3rem",
                padding: "0.8rem 0.8rem",
                backgroundColor: "white"
              }}
              onClick={() => onFilterByTagHandler(tag._id)}
            />
          ))}
        </Box>
      </Stack>
    </>
  )
}
