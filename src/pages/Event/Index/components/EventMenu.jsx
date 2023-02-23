import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import MoreVertOutlined from "@mui/icons-material/MoreVertOutlined"

import { useEventMenu } from "./hooks/useEventMenu"
import styles from "./styles/EventMenu.module.scss"

export const EventMenu = () => {
  const { MENU_HEIGHT, open, anchorEl, menuClickHandler, menuCloseHandler, editHandler, deleteHandler, publishHandler, unPublishHandler } = useEventMenu()

  return (
    <Box className={styles.EventMenu}>
      <IconButton
        aria-label="more"
        id="menu"
        aria-controls={open ? "menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={menuClickHandler}
      >
        <MoreVertOutlined />
      </IconButton>
      <Menu
        id="menu"
        MenuListProps={{
          "aria-labelledby": "menu"
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={menuCloseHandler}
        PaperProps={{
          style: {
            maxHeight: MENU_HEIGHT * 4.5,
            width: '20ch'
          }
        }}
      >
        <MenuItem onClick={editHandler}>Edit</MenuItem>
        <MenuItem onClick={deleteHandler}>Delete</MenuItem>
        <MenuItem onClick={publishHandler}>Publish</MenuItem>
        <MenuItem onClick={unPublishHandler}>Unpublish</MenuItem>
      </Menu>
    </Box>
  )
}