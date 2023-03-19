import { useState, useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"

import { auth } from "../lib/firebase"

export const useFirebaseAuthentication = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      authUser ? setUser(authUser) : setUser(null)
    })
  }, [])

  return {
    user
  }
}
