import { useReducer } from "react"

const INITIAL_FILTER_DATA = {
  isGoogleDocSelected: false,
  isLinkSelected: false,
  isPdfSelected: false,
  isYouTubeVideoSelected: false,
  isDraftSelected: false,
  isPublishSelected: false,
  isUnpublishSelected: false,
  eventTypes: [],
  statuses: [],
  tags: [],
  query: ''
}

const eventReducer = (state, action) => {

  if(action.type === "GET_GOOGLE_DOC_EVENTS") {
    return {
      ...state,
      isGoogleDocSelected: true,
      eventTypes: state.eventTypes.concat(action.payload)
    }
  }

  if(action.type === "REMOVE_GOOGLE_DOC_EVENT") {
    return {
      ...state,
      isGoogleDocSelected: false,
      eventTypes: state.eventTypes.filter(event => event !== action.payload)
    }
  }

  if(action.type === "GET_LINK_EVENTS") {
    return {
      ...state,
      isLinkSelected: true,
      eventTypes: state.eventTypes.concat(action.payload)
    }
  }

  if(action.type === "REMOVE_LINK_EVENTS") {
    return {
      ...state,
      isLinkSelected: false,
      eventTypes: state.eventTypes.filter(event => event !== action.payload)
    }
  }

  if(action.type === "GET_PDF_EVENTS") {
    return {
      ...state,
      isPdfSelected: true,
      eventTypes: state.eventTypes.concat(action.payload)
    }
  }

  if(action.type === "REMOVE_PDF_EVENTS") {
    return {
      ...state,
      isPdfSelected: false,
      eventTypes: state.eventTypes.filter(event => event !== action.payload)
    }
  }

  if(action.type === "GET_YOUTUBE_EVENTS") {
    return {
      ...state,
      isYouTubeVideoSelected: true,
      eventTypes: state.eventTypes.concat(action.payload)
    }
  }

  if(action.type === "REMOVE_YOUTUBE_EVENTS") {
    return {
      ...state,
      isYouTubeVideoSelected: false,
      eventTypes: state.eventTypes.filter(event => event !== action.payload)
    }
  }

  if(action.type === "RESET_TYPE_FILTER") {
    return {
      ...state,
      isGoogleDocSelected: false,
      isLinkSelected: false,
      isPdfSelected: false,
      isYouTubeVideoSelected: false,
      eventTypes: []
    }
  }

  if(action.type === "GET_DRAFT_EVENTS") {
    return {
      ...state,
      isDraftSelected: true,
      statuses: state.statuses.concat(action.payload)
    }
  }

  if(action.type === "REMOVE_DRAFT_EVENTS") {
    return {
      ...state,
      isDraftSelected: false,
      statuses: state.statuses.filter(event => event !== action.payload)
    }
  }

  if(action.type === "GET_PUBLISH_EVENTS") {
    return {
      ...state,
      isPublishSelected: true,
      statuses: state.statuses.concat(action.payload)
    }
  }

  if(action.type === "REMOVE_DRAFT_EVENTS") {
    return {
      ...state,
      isPublishSelected: false,
      statuses: state.statuses.filter(event => event !== action.payload)
    }
  }

  if(action.type === "GET_UNPUBLISH_EVENTS") {
    return {
      ...state,
      isUnpublishSelected: true,
      statuses: state.statuses.concat(action.payload)
    }
  }

  if(action.type === "REMOVE_UNPUBLISH_EVENTS") {
    return {
      ...state,
      isUnpublishSelected: false,
      statuses: state.statuses.filter(event => event !== action.payload)
    }
  }

  if(action.type === "RESET_STATUS_FILTER") {
    return {
      ...state,
      isDraftSelected: false,
      isPublishSelected: false,
      isUnpublishSelected: false,
      statuses: []
    }
  }

  return INITIAL_FILTER_DATA
}

export const useFilterByTypeStatusAndSearch = () => {
  const [eventState, eventDispatch] = useReducer(eventReducer, INITIAL_FILTER_DATA)

  const googleDocChangeHandler = () => {
    if(eventState.isGoogleDocSelected === false) {
      eventDispatch({ type: "GET_GOOGLE_DOC_EVENTS", payload: "google_doc" })
    } else {
      eventDispatch({ type: "REMOVE_GOOGLE_DOC_EVENT", payload: "google_doc" })
    }
  }

  const linkChangeHandler = () => {
    if(eventState.isLinkSelected === false) {
      eventDispatch({ type: "GET_LINK_EVENTS", payload: "link" })
    } else {
      eventDispatch({ type: "REMOVE_LINK_EVENTS", payload: "link" })
    }
  }

  const pdfChangeHandler = () => {
    if(eventState.isPdfSelected === false) {
      eventDispatch({ type: "GET_PDF_EVENTS", payload: "pdf" })
    } else {
      eventDispatch({ type: "REMOVE_PDF_EVENTS", payload: "pdf" })
    }
  }

  const youTubeVideoChangeHandler = () => {
    if(eventState.isYouTubeVideoSelected === false) {
      eventDispatch({ type: "GET_YOUTUBE_EVENTS", payload: "youtube" })
    } else {
      eventDispatch({ type: "REMOVE_YOUTUBE_EVENTS", payload: "youtube" })
    }
  }

  const resetTypeFilterHanlder = () => {
    eventDispatch({ type: "RESET_TYPE_FILTER" })
  }

  const draftEventHandler = () => {
    if(eventState.isDraftSelected === false) {
      eventDispatch({ type: "GET_DRAFT_EVENTS", payload: "draft" })
    } else {
      eventDispatch({ type: "REMOVE_DRAFT_EVENTS", payload: "draft" })
    }
  }

  const publishEventHandler = () => {
    if(eventState.isPublishSelected === false) {
      eventDispatch({ type: "GET_PUBLISH_EVENTS", payload: "published" })
    } else {
      eventDispatch({ type: "REMOVE_PUBLISH_EVENTS", payload: "published" })
    }
  }

  const unPublishEventHandler = () => {
    if(eventState.isUnpublishSelected === false) {
      eventDispatch({ type: "GET_UNPUBLISH_EVENTS", payload: "unPublished" })
    } else {
      eventDispatch({ type: "REMOVE_UNPUBLISH_EVENTS", payload: "unPublished"})
    }
  }

  const resetStatusFilterHandler = () => {
    eventDispatch({ type: "RESET_STATUS_FILTER" })
  }

  return {
    eventState,
    isGoogleDocSelected: eventState.isGoogleDocSelected,
    isLinkSelected: eventState.isLinkSelected,
    isPdfSelected: eventState.isPdfSelected,
    isYouTubeVideoSelected: eventState.isYouTubeVideoSelected,
    isDraftSelected: eventState.isDraftSelected,
    isPublishSelected: eventState.isPublishSelected,
    isUnpublishSelected: eventState.isUnpublishSelected,
    onGoogleDocChangeHandler: googleDocChangeHandler,
    onLinkChangeHandler :linkChangeHandler,
    onPdfChangeHandler: pdfChangeHandler,
    onYouTubeVideoChangeHandler: youTubeVideoChangeHandler,
    onResetTypeFilterHanlder: resetTypeFilterHanlder,
    onDraftEventHandler: draftEventHandler,
    onPublishEventHandler: publishEventHandler,
    onUnPublishEventHandler: unPublishEventHandler,
    onResetStatusFilterHandler: resetStatusFilterHandler
  }
}
