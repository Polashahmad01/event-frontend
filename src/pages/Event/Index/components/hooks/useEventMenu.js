import { useState } from "react"

const MENU_HEIGHT = 48

export const useEventMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

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
    console.log('deleting...')
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
