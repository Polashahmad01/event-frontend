import { useState } from "react"

import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"

export const FilterBySearch = ({ onExecuteSearch }) => {
  const [searchTerm, setSearchTerm] = useState("")

  const searchTermChangeHandler = event => {
    setSearchTerm(event.target.value)
    onExecuteSearch(event.target.value)
  }

  return (
    <Box>
      <TextField
        size="small"
        fullWidth={true}
        placeholder="Search by title, description"
        value={searchTerm}
        onChange={searchTermChangeHandler}
      />
    </Box>
  )
}
