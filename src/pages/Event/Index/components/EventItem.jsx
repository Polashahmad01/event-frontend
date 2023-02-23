import format from "date-fns/format"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import Chip from "@mui/material/Chip"
import YouTubeIcon from "@mui/icons-material/YouTube"
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf"
import LinkIcon from "@mui/icons-material/Link"
import ArticleIcon from "@mui/icons-material/Article"

import { useEventItem } from "./hooks/useEventItem"
import { EventMenu } from "./EventMenu"
import styles from "./styles/EventItem.module.scss"

export const EventItem = ({ event }) => {
  const { title, summary, tags, author, status, createdAt, eventType } = event
  const { isShowEventMenu, onMouseEnterHandler, onMouseLeaveHandler } = useEventItem()

  return (
    <Card
      variant="outlined"
      className={styles.card}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
      sx={{
        margin: "2rem 0",
        border: "3px solid #efefef",
        borderRadius: "7px",
        cursor: "pointer",
        "&:hover": {
          boxShadow: "0 0 0 4px #efefef"
        }
      }}
    >
      {isShowEventMenu && <EventMenu event={event} />}
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
              <Typography component="span" variant="body2">
                {status === "draft" && <Chip
                  label={status} 
                  size="small"
                  component="p"
                  sx={{
                    color: "white",
                    backgroundColor: "black"
                  }}
                />}
                {status === "unPublished" && <Chip
                  label={status} 
                  size="small"
                  component="p"
                  sx={{
                    color: "white",
                    backgroundColor: "#F6694D"
                  }}
                />}
              </Typography>
              <Typography component="span" variant="body2" sx={{ marginTop: "0.3rem!important" }}>
                {eventType === "youtube" && <YouTubeIcon />}
                {eventType === "pdf" && <PictureAsPdfIcon />}
                {eventType === "link" && <LinkIcon />}
                {eventType === "google_doc" &&<ArticleIcon />}
              </Typography>
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
              <Typography alignSelf="flex-end" component="p" variant="caption" color="rgb(140, 140, 140)" fontWeight={300}>{format(new Date(createdAt), 'MMM dd, yyyy')}</Typography>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Card>
  )
}
