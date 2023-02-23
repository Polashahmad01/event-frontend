import { useState } from "react"

export const useEventItem = () => {
  const [isShowEventMenu, setIsShowEventMenu] = useState(false)

  const onMouseEnterHandler = () => {
    setIsShowEventMenu(true)
  }

  const onMouseLeaveHandler = () => {
    setIsShowEventMenu(false)
  }

  return {
    isShowEventMenu,
    onMouseEnterHandler,
    onMouseLeaveHandler
  }
}
