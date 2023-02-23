import { useState } from "react"

import { useDeleteEvent } from "./useDeleteEvent"
import { usePublishEvent } from "../../../CreateEvent/components/hooks/usePublishEvent"

const MENU_HEIGHT = 48

export const useEventMenu = (props) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const { eventDeleteHandler } = useDeleteEvent()
  const { publishEventHandler } = usePublishEvent()

  const menuClickHandler = event => {
    setAnchorEl(event.currentTarget)
  }

  const menuCloseHandler = () => {
    setAnchorEl(null)
  }

  const editHandler = () => {
    setAnchorEl(null)
    console.log('editing...')
  }

  const deleteHandler = () => {
    setAnchorEl(null)
    eventDeleteHandler(props._id)
  }

  const publishHandler = () => {
    setAnchorEl(null)
    publishEventHandler(props._id)
  }

  const unPublishHandler = () => {
    setAnchorEl(null)
    console.log('unPublishing...')
  }

  return {
    MENU_HEIGHT,
    open,
    anchorEl,
    menuClickHandler,
    menuCloseHandler,
    editHandler,
    deleteHandler,
    publishHandler,
    unPublishHandler
  }
}
