import { useState } from "react"

import { useDeleteEvent } from "./useDeleteEvent"

const MENU_HEIGHT = 48

export const useEventMenu = (props) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const { eventDeleteHandler } = useDeleteEvent()

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
    console.log('publishing...')
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
