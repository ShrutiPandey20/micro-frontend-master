
import { styled, alpha } from "@mui/material/styles";
import "./Navbar.css"
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { makeStyles } from "@material-ui/core/styles";
import GTranslateIcon from '@mui/icons-material/GTranslate';
import LogoutIcon from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar';
import Brightness4SharpIcon from '@mui/icons-material/Brightness4Sharp';
import React, { useState } from "react"
import {ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";

const useStyles = makeStyles({
  custom: {
    color: "black",
    fontWeight: "bold"
  }
});



const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.4),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto"
  }
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "50ch"
    }
  }
}));

export default function Header() {
  const classes = useStyles();

  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    };

    const [state, setState] = React.useState({
      left: false
    });
  
    const toggleDrawer = (anchor, open) => (event) => {
      if (
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };
  
    const list = (anchor) => (
      <Box
        sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          {["Home", "Search", "Streams", "About"].map((text, index) => (
            <ListItem button key={text}>
              <LibraryMusicIcon /> &nbsp; &nbsp;
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Box>
    );
  
  return (
       
    <Box sx={{ flexGrow: 2 }}>
      <AppBar position="static">
        <Toolbar>
        {["left"].map((anchor)=> (
            <React.Fragment key={anchor}>
              <Button onClick={toggleDrawer(anchor, true)}>
                <IconButton
                  size="large"
                  edge="start"
                  // color="inherit"
                  aria-label="open drawer"
                  sx={{ mr: 0 }}
                 
                >
                  <MenuIcon />
                </IconButton>
              </Button>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block", flexGrow: 3 } }}
            // className={classes.custom}
          >
            Svarn
          </Typography>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
            Home
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
            Search
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
            Streams
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
            About
          </Typography>
          <Search >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search For songs"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <GTranslateIcon />
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
                  <GlobalStyles/>
                    <button onClick={() => themeToggler()} ><Brightness4SharpIcon/></button>
                    &nbsp; &nbsp;&nbsp; &nbsp; 
                    <button onClick={event =>  window.location.href='/Home'} className="logout"><LogoutIcon/></button>
           </ThemeProvider>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <Avatar src="/broken-image.jpg" />
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}