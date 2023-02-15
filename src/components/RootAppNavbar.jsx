import AppBar from "@mui/material/AppBar"
import Container from "@mui/material/Container"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import Tooltip from "@mui/material/Tooltip"
import Avatar from "@mui/material/Avatar"
import { NavLink } from "react-router-dom"

import { useRootAppNavbar } from "./hooks/useRootAppNavbar"

export const RootAppNavbar = () => {
  const { 
    navAnchorElement,
    userAnchorElement, 
    pages, 
    settings, 
    navMenuOpenHandler, 
    navMenuCloseHandler, 
    openUserMenuHandler, 
    closeUserMenuHandler 
        } = useRootAppNavbar()

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#fff",
        color: "black"
      }}
    >
      <Container maxWidth="xl">
        <Toolbar>

          <NavLink to="/" style={{ color: "inherit" }}>
            <Typography
              variant="h6"
              component="span"
              noWrap
              sx={{
                mr: 6,
                fontFamily: 'Roboto',
                fontWeight: 700,
                textDecoration: "none",
                color: "inherit",
                letterSpacing: "0.1rem",
                display: { xs: 'none', md: 'flex' }
              }}
            >
              Events
            </Typography>
          </NavLink>


          <Box
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={navMenuOpenHandler}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={navAnchorElement}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(navAnchorElement)}
              onClick={navMenuCloseHandler}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map(page => (
                <NavLink to={page.to} key={page.id} style={{color: "inherit"}}>
                  <MenuItem onClick={navMenuCloseHandler}>
                    <Typography textAlign="center">{page.label}</Typography>
                  </MenuItem>
                </NavLink>
              ))}
            </Menu>
          </Box>

          
          <Box
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', marginLeft: '15rem' } }}
          >
            {pages.map(page => (
              <NavLink
                key={page.id}
                to={page.to}
                style={{color: "inherit"}}
              >
                <Typography 
                  variant="subtitle1" 
                  component="span"
                  sx={{
                    marginX: "0.5rem"
                    }}
                >
                  {page.label}
                </Typography>
              </NavLink>
            ))}
          </Box>


          <Box
            sx={{ flexGrow: 0 }}
          >
            <Tooltip
              title="open settings"
            >
              <IconButton
                onClick={openUserMenuHandler}
                sx={{ p: 0 }}
              >
                <Avatar alt="Polash Ahmad" src="https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-1/274685283_3113344292245212_8144818065668021805_n.jpg?stp=c40.115.661.662a_dst-jpg_p720x720&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_ohc=0YAQykEM_IAAX8vfUGf&_nc_ht=scontent.fdac41-1.fna&oh=00_AfDnpwMH8bsbsA5YQY2LiRRUCv3zkTPnvGFmxCYmFxvpgQ&oe=63EF3EE8" />
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={userAnchorElement}
              sx={{ mt: "45px", marginLeft: "1.5rem" }}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(userAnchorElement)}
              onClose={closeUserMenuHandler}
            >
              {settings.map(setting => (
                <MenuItem key={setting} onClick={closeUserMenuHandler}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>


        </Toolbar>
      </Container>
    </AppBar>
  )
}
