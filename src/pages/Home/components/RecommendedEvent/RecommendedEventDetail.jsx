import Box from "@mui/material/Box"

import { useRecommendedEventDetail } from "./hooks/useRecommendedEventDetail"
import { RecommendedEventDetailEventTile } from "./RecommendedEventDetailEventTile"

export const RecommendedEventDetail = () => {
  const { event, recommendedEvents } = useRecommendedEventDetail()

  return (
    <Box>
      {event && <RecommendedEventDetailEventTile event={event} recommendedEvents={recommendedEvents} />}
    </Box>
  )
} 
