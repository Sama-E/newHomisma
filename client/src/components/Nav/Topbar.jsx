import React, { useState } from "react";
import profileImage from "/src/assets/images/profile.jpeg";
// import { useDispatch} from "react-redux";
import {
  // LightModeOutlined,
  // DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  ArrowDropDownOutlined,
} from "@mui/icons-material";
import {
  AppBar,
  Button,
  Box,
  Typography,
  IconButton,
  InputBase,
  Toolbar,
  Menu,
  MenuItem,
  // useTheme,
} from "@mui/material";
import FlexBetween from '/src/components/Custom/FlexBetween';


const Topbar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  // const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <AppBar
      sx={{
        position: "sticky",
        background: "none",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>

        {/* LEFT SIDE */}
        <FlexBetween>
          <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <MenuIcon />
          </IconButton>
        </FlexBetween>

        {/* MIDDLE */}
        <FlexBetween>
          {/* <Box display="flex" alignItems="center" gap="0.5rem">
            <Typography variant="h6" fontWeight="bold" color="grey">
              newHOMISMA
            </Typography>
          </Box> */}
        </FlexBetween>

        {/* RIGHT SIDE */}
        <FlexBetween gap="1.5rem">
          {isSidebarOpen ? (
          <IconButton>
            <Search sx={{ fontSize: "25px" }} />
          </IconButton>
          ) : (
            <>
            {/* <InputBase placeholder="Search..." sx={{ borderBottom: 1 }} /> */}
            <IconButton>
              <Search sx={{ fontSize: "25px" }} />
            </IconButton>
            </>
          )}
          
          {/* <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "light" ? (
              <LightModeOutlined sx={{ fontSize: "25px" }} />
            ) : (
              <DarkModeOutlined sx={{ fontSize: "25px" }} />
            )}
          </IconButton> */}

          <FlexBetween>
            <Button
              onClick={handleClick}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textTransform: "none",
                gap: "1rem",
              }}
            >
              <Box
                component="img"
                alt="profile"
                // src={`../public/uploads/${user.profilePicPath}`}
                src={profileImage}
                height="32px"
                width="32px"
                borderRadius="50%"
                sx={{ objectFit: "cover" }}
              />
              <Box textAlign="left">
                <Typography
                  fontWeight="bold"
                  fontSize="0.85rem"
                  sx={{ color: "black" }}
                >
                  {/* {user.firstName} */}
                  NAME
                </Typography>
              </Box>
              <ArrowDropDownOutlined
                sx={{ color: "black", fontSize: "25px" }}
              />
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={isOpen}
              onClose={handleClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
              <MenuItem>My Homes</MenuItem>
              <MenuItem>My Profile</MenuItem>
              {/* <MenuItem onClick={() => dispatch(setLogout())}>Log Out</MenuItem> */}
              <MenuItem>Log Out</MenuItem>
            </Menu>
          </FlexBetween>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  )
}

export default Topbar;