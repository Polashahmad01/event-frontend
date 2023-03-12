import { useState } from "react"


const pages = [
  { id: 'v1', label: 'Home', to: '/' },
  { id: 'v2', label: 'Event', to: '/event'},
  { id: 'v3', label: 'Signup', to: '/signup'},
  { id: 'v4', label: 'Signin', to: '/signin'}
]
const settings = ['logout']

export const useRootAppNavbar = () => {
  const [navAnchorElement, setNavAnchorElement] = useState(null)
  const [userAnchorElement, setUserAnchorElement] = useState(null)

  const navMenuOpenHandler = event => {
    setNavAnchorElement(event.currentTarget)
  }

  const navMenuCloseHandler = event => {
    setNavAnchorElement(null)
  }

  const openUserMenuHandler = event => {
    setUserAnchorElement(event.currentTarget)
  }

  const closeUserMenuHandler = event => {
    setUserAnchorElement(null)
  }

  return {
    navAnchorElement,
    userAnchorElement,
    pages,
    settings,
    navMenuOpenHandler,
    navMenuCloseHandler,
    openUserMenuHandler,
    closeUserMenuHandler
  }
}
