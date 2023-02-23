import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import Chip from "@mui/material/Chip"

export const EventItem = (props) => {
  const { title, summary, tags, author } = props.event
  // console.log(props.event)
  return (
    <Card
      variant="outlined"
      sx={{
        marginBottom: "0.8rem",
        border: "3px solid #efefef",
        borderRadius: "7px",
        cursor: "pointer",
        "&:hover": {
          boxShadow: "0 0 0 2px #efefef"
        }
      }}
    >
      <Card>
        <CardMedia
          component="img"
          sx={{
            height: 20,
            backgroundColor: "#F6694D",
            borderTopRightRadius: "4px",
            borderTopLeftRadius: "4px"
          }}
        />
        <CardContent>
          <Stack direction="row" justifyContent="space-between" alignItems="center" marginBottom={1} spacing={2}>
            <Box>
              <Typography component="h1" variant="subtitle1" fontWeight={400}>{title}</Typography>
            </Box>
            <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
              <Typography component="span" variant="body2">Status</Typography>
              <Typography component="span" variant="body2">Icon</Typography>
            </Stack>
          </Stack>
          <Typography component="p" variant="body2" fontWeight={300} marginBottom={2} color="rgb(140, 140, 140)">{summary}</Typography>
          <Box>
            {tags.map(tag => (
              <Chip
                key={tag.tagName}
                variant="outlined"
                label={tag.tagName} 
                size="small"
                component="p"
                sx={{
                  fontWeight: "300",
                  borderRadius: "2px",
                  marginRight: "0.5rem"
                }}
              />
            ))}
          </Box>
          <Stack direction="row" justifyContent="flex-end">
            <Stack justifyContent="flex-end">
              <Typography alignSelf="flex-end" component="p" variant="body2" fontWeight={400}>{author}</Typography>
              <Typography alignSelf="flex-end" component="p" variant="caption" color="rgb(140, 140, 140)" fontWeight={300}>Feb 23, 2023</Typography>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Card>
  )
}
