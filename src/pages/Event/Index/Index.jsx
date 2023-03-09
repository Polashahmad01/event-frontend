import { Box } from "@mui/system"
import Grid2 from "@mui/material/Unstable_Grid2"

import { useEventList } from "./components/hooks/useEventList"
import { EventAndTagBanner } from "./components/EventAndTagBanner"
import { EventList } from "./components/EventList"
import { FilterByType } from "./components/FilterByType"
import { FilterByStatus } from "./components/FilterByStatus"
import { FilterByTag } from "./components/FilterByTag"
import { FilterBySearch } from "./components/FilterBySearch"
import { EmptyNotFound } from "../../../components/EmptyNotFound"

export const EventListingPage = () => {
  const { 
    isLoading,
    eventLists,
    hasEvents,
    tags,
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
    onResetStatusFilterHandler,
    onFilterByTagHandler,
    onResetTagFilterHandler,
    onExecuteSearch
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
          <FilterByStatus
            isDraftSelected={isDraftSelected}
            onDraftEventHandler={onDraftEventHandler}
            isPublishSelected={isPublishSelected}
            onPublishEventHandler={onPublishEventHandler}
            isUnpublishSelected={isUnpublishSelected}
            onUnPublishEventHandler={onUnPublishEventHandler}
            onResetStatusFilterHandler={onResetStatusFilterHandler}
          />
          <FilterByTag
            tags={tags}
            onFilterByTagHandler={onFilterByTagHandler}
            onResetTagFilterHandler={onResetTagFilterHandler}
          />
        </Grid2>
        <Grid2 xs={12} md={9}>
          <Box
            marginBottom={3}
          >
            <FilterBySearch
              onExecuteSearch={onExecuteSearch}
            />
          </Box>
          {isLoading && <p>Loading....</p>}
          {hasEvents && !isLoading && <EmptyNotFound text="No events found. Please try again" />}
          {!isLoading && <EventList eventLists={eventLists} />}
        </Grid2>
      </Grid2>
    </Box>
  )
}
