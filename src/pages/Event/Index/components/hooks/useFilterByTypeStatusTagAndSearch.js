import { useReducer } from "react"

const INITIAL_FILTER_DATA = {
  isGoogleDocSelected: false,
  isLinkSelected: false,
  isPdfSelected: false,
  isYouTubeVideoSelected: false,
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

  return {
    eventState,
    isGoogleDocSelected: eventState.isGoogleDocSelected,
    isLinkSelected: eventState.isLinkSelected,
    isPdfSelected: eventState.isPdfSelected,
    isYouTubeVideoSelected: eventState.isYouTubeVideoSelected,
    onGoogleDocChangeHandler: googleDocChangeHandler,
    onLinkChangeHandler :linkChangeHandler,
    onPdfChangeHandler: pdfChangeHandler,
    onYouTubeVideoChangeHandler: youTubeVideoChangeHandler,
    onResetTypeFilterHanlder: resetTypeFilterHanlder
  }
}
