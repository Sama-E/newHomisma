import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import ListAltIcon from "@mui/icons-material/ListAlt";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import { Container } from "@mui/system";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { LinkOffTwoTone } from "@mui/icons-material";
import CustomButton from "/src/components/Custom/CustomButton";
import logoImg from "/src/assets/images/logo.png";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.type === "Tab" || event.type === "Shift")
    ) {
      return;
    }

    setMobileMenu({ ...mobileMenu, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Home", "Features", "Services", "Listed", "Contact", "Sign Up", "Register"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index === 0 && <HomeIcon />}
                  {index === 1 && <FeaturedPlayListIcon />}
                  {index === 2 && <MiscellaneousServicesIcon />}
                  {index === 3 && <ListAltIcon />}
                  {index === 4 && <ContactsIcon />}
                  {index === 5}
                  {index === 6}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  const Link = styled(Typography)(({ theme }) => ({
    underline: "none",
  }));

  const NavLink = styled(Typography)(({ theme }) => ({
    fontSize: "14px",
    color: "#4F5361",
    fontWeight: "bold",
    cursor: "pointer",
    "&:hover": {
      color: "#fff",
    },
  }));

  const NavbarLinksBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    cursor: "pointer",
    display: "none",
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  }));

  const NavbarContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(2),
    },
  }));

  const NavbarLogo = styled("img")(({ theme }) => ({
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));
  return (
    <NavbarContainer>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2.5rem",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CustomMenuIcon onClick={toggleDrawer("right", true)} />
          <Drawer
            anchor="right"
            open={mobileMenu["right"]}
            onClose={toggleDrawer("right", false)}
          >
            {list("right")}
          </Drawer>
          <Typography
            sx={{
              color: "#4F5361",
              fontSize: "18px",
              fontWeight: "bold",
            }}>
          .Homisma
          </Typography>
        </Box>

        <NavbarLinksBox>
          <NavLink variant="body2">Home</NavLink>
          <NavLink variant="body2">Features</NavLink>
          <NavLink variant="body2">Services</NavLink>
          <NavLink variant="body2">Listed</NavLink>
          <NavLink variant="body2">Contact</NavLink>
        </NavbarLinksBox>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <NavbarLinksBox>
          <Link to="/login">
            <CustomButton
              backgroundColor="#0F1B4C"
              color="#fff"
              buttonText="Login"
            />
          </Link>
          <Link to="/register">
            <CustomButton
              backgroundColor="gray"
              color="#fff"
              buttonText="Register"
              heroBtn={true}
            />
          </Link>
        </NavbarLinksBox>

      </Box>
    </NavbarContainer>
  );
}

export default Navbar