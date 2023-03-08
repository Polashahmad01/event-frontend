import { Box } from "@mui/system"
import Grid2 from "@mui/material/Unstable_Grid2"
import Typography from "@mui/material/Typography"

import { useEventList } from "./components/hooks/useEventList"
import { EventAndTagBanner } from "./components/EventAndTagBanner"
import { EventList } from "./components/EventList"
import { FilterByType } from "./components/FilterByType"
import { FilterByStatus } from "./components/FilterByStatus"

export const EventListingPage = () => {
  const { 
    isLoading,
    eventLists,
    isGoogleDocSelected,
    isLinkSelected,
    isPdfSelected,
    isYouTubeVideoSelected,
    isDraftSelected,
    isPublishSelected,
    isUnpublishSelected,
    onGoogleDocChangeHandler,
    onLinkChangeHandler,
    onPdfChangeHandler,
    onYouTubeVideoChangeHandler,
    onResetTypeFilterHanlder,
    onDraftEventHandler,
    onPublishEventHandler,
    onUnPublishEventHandler,
    onResetStatusFilterHandler
        } = useEventList()

  return (
    <Box>
      <EventAndTagBanner />
      <Grid2 container marginTop={4} columnSpacing={6}>
        <Grid2 xs={12} md={3}>
          <FilterByType
            isGoogleDocSelected={isGoogleDocSelected}
            onGoogleDocChangeHandler={onGoogleDocChangeHandler}
            isLinkSelected={isLinkSelected}
            onLinkChangeHandler={onLinkChangeHandler}
            isPdfSelected={isPdfSelected}
            onPdfChangeHandler={onPdfChangeHandler}
            isYouTubeVideoSelected={isYouTubeVideoSelected}
            onYouTubeVideoChangeHandler={onYouTubeVideoChangeHandler}
            onResetTypeFilterHanlder={onResetTypeFilterHanlder}
          />
        </Grid2>
        <Grid2 xs={12} md={9}>
          <Typography
            backgroundColor="black"
            color="white"
          >
            Search Bar
          </Typography>
        </Grid2>
        <Grid2 xs={12} md={3}>
          <FilterByStatus
            isDraftSelected={isDraftSelected}
            onDraftEventHandler={onDraftEventHandler}
            isPublishSelected={isPublishSelected}
            onPublishEventHandler={onPublishEventHandler}
            isUnpublishSelected={isUnpublishSelected}
            onUnPublishEventHandler={onUnPublishEventHandler}
            onResetStatusFilterHandler={onResetStatusFilterHandler}
          />
        </Grid2>
        <Grid2 xs={12} md={9}></Grid2>
        <Grid2 xs={12} md={3}>
          <Typography
            backgroundColor="black"
            color="white"
          >
            Filter by Tags
          </Typography>
        </Grid2>
        <Grid2 xs={12} md={9}>
          {isLoading && <p>Loading....</p>}
          {!isLoading && <EventList eventLists={eventLists} />}
        </Grid2>
      </Grid2>
    </Box>
  )
}
