import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { useDeleteEvent } from "../../../CreateEvent/components/hooks/useDeleteEvent"
import { usePublishEvent } from "../../../CreateEvent/components/hooks/usePublishEvent"
import { useUnPublishEvent } from "../../../CreateEvent/components/hooks/useUnPublishEvent"

const MENU_HEIGHT = 48

export const useEventMenu = (props) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const navigate = useNavigate()
  const { eventDeleteHandler } = useDeleteEvent()
  const { publishEventHandler } = usePublishEvent()
  const { unPublishEventHandler } = useUnPublishEvent()

  const menuClickHandler = event => {
    setAnchorEl(event.currentTarget)
  }

  const menuCloseHandler = () => {
    setAnchorEl(null)
  }

  const editHandler = () => {
    setAnchorEl(null)
    navigate(`${props._id}/edit`)
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
    unPublishEventHandler(props._id)
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
