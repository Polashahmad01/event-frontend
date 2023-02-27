import Box from "@mui/material/Box"
import Grid2 from "@mui/material/Unstable_Grid2"
import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import LaunchIcon from "@mui/icons-material/Launch"
import Stack from "@mui/system/Stack"
import Divider from "@mui/material/Divider"
import format from "date-fns/format"
import Chip from "@mui/material/Chip"

import { EventDetailList } from "./EventDetailList"

export const EventDetailTile = ({ event, recommendedEvents }) => {
  const { eventType, contentUrl, author, createdAt, title, tags, imageUrl, description } = event

  return (
    <Box
      marginTop={4}
    >
      <Grid2 container spacing={4}>
        <Grid2 xs={12} md={8} lg={8} xl={8}>
          <Card
            sx={{
              backgroundColor: "#fff",
              borderRadius: "5px"
            }}
          >
            {eventType && <CardMedia
              component="img"
              height="140"
              image={eventType === "link" ? "/images/link_background.png" : "" || eventType === "pdf" ? "/images/pdf_background.png" : "" || eventType === "google_doc" ? "/images/google_doc_background.png" : "" || eventType === "youtube" ? "/images/youtube_background.png" : ""}
              alt="Link"
            />}
            {eventType && <CardContent>
              <Button
                  endIcon={<LaunchIcon />}
                  sx={{
                    textTransform: "initial",
                    color: "#F6694D",
                    marginBottom: "1rem"
                  }}
                  fullWidth={true}
                  size="small"
                  href={eventType === "pdf" ? imageUrl : contentUrl}
                  target="_blank"
                >
                  <Typography
                    component="p"
                    color="#F6694D"
                    variant="body2"
                  >
                    Go To The External Link Of This Content
                  </Typography>
                </Button>
                <Stack direction="column">
                  <Typography
                    component="p" 
                    variant="body2" 
                    fontWeight={400}
                    alignSelf="flex-end"
                  >
                    {author}
                  </Typography>
                  <Typography
                    component="p" 
                    variant="caption" 
                    color="rgb(140, 140, 140)" 
                    fontWeight={300}
                    alignSelf="flex-end"
                  >
                    {format(new Date(createdAt), 'MMM dd, yyyy')}
                  </Typography>
                </Stack>
                <Divider 
                  sx={{
                    margin: "1rem 0"
                  }}
                />
                <Typography
                  component="h1"
                  variant="h6"
                  marginBottom="1rem"
                >
                  {title}
                </Typography>
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
                      marginRight: "0.5rem",
                      marginBottom: "3rem"
                    }}
                  />
                ))}
                <Typography
                  component="p"
                  variant="body2"
                  marginBottom="1.5rem"
                >
                  {description}
                </Typography>
            </CardContent>}
          </Card>
        </Grid2>
        <Grid2 xs={12} md={4} lg={4} xl={4}>
          {title && <Typography
            component="h3"
            variant="h5"
          >
            Recommended for you
          </Typography>}
          {title && <EventDetailList recommendedEvents={recommendedEvents} />}
        </Grid2>
      </Grid2>
    </Box>
  )
}
