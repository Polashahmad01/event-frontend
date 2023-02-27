import Box from "@mui/system/Box"

import { PrivateRecommendedEventItem } from "./PrivateRecommendedEventItem"

export const PrivateRecommendedEventList = ({ recommendedEvents }) => {

  return (
    <Box>
      {recommendedEvents.map(recommended => (
        <PrivateRecommendedEventItem
          key={recommended._id}
          recommended={recommended}
        />
      ))}
    </Box>
  )
}
