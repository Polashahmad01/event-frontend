import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import MoreVertOutlined from "@mui/icons-material/MoreVertOutlined"
import Typography from "@mui/material/Typography"

import { useEventMenu } from "./hooks/useEventMenu"
import styles from "./styles/EventMenu.module.scss"

export const EventMenu = ({ event }) => {
  const { MENU_HEIGHT, open, anchorEl, menuClickHandler, menuCloseHandler, editHandler, deleteHandler, publishHandler, unPublishHandler } = useEventMenu(event)

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
            width: '11ch'
          }
        }}
      >
        <MenuItem onClick={editHandler}>
          <Typography 
            component="p"
            variant="body2" 
            fontWeight={400}
          >
            Edit
          </Typography>
        </MenuItem>
        <MenuItem onClick={deleteHandler}>
          <Typography
            component="p"
            variant="body2" 
            fontWeight={400}
          >
            Delete
          </Typography>
        </MenuItem>
        <MenuItem onClick={publishHandler}>
          <Typography
            component="p"
            variant="body2" 
            fontWeight={400}
          >
            Publish
          </Typography>
        </MenuItem>
        <MenuItem onClick={unPublishHandler}>
          <Typography
            component="p"
            variant="body2" 
            fontWeight={400}
          >
            Unpublish
          </Typography>
        </MenuItem>
      </Menu>
    </Box>
  )
}