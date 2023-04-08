import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material";
import { AccountBox, Article, Group, Settings, Store, ModeNight } from "@mui/icons-material";


const Sidebar = ({mode,setMode}) => {
  return (
    <Box      
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position={"fixed"}>

     
      <List>
        <ListItem disablePadding>
          <ListItemButton component = "a" href="#home">
            <ListItemIcon>   
              <HomeIcon></HomeIcon>
            </ListItemIcon>
            <ListItemText primary="Homepage" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component = "a" href="#pages">
            <ListItemIcon>   
              <Article></Article>
            </ListItemIcon>
            <ListItemText primary="Pages" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component = "a" href="#groups">
            <ListItemIcon>   
              <Group></Group>
            </ListItemIcon>
            <ListItemText primary="Groups" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component = "a" href="#market">
            <ListItemIcon>   
              <Store></Store>
            </ListItemIcon>
            <ListItemText primary="Marketplace" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component = "a" href="#friends">
            <ListItemIcon>   
              <Group></Group>
            </ListItemIcon>
            <ListItemText primary="Friends" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component = "a" href="#settings">
            <ListItemIcon>   
              <Settings></Settings>
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component = "a" href="#profile">
            <ListItemIcon>   
              <AccountBox></AccountBox>
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component = "a" href="#profile">
            <ListItemIcon>   
              <ModeNight></ModeNight>
            </ListItemIcon>
            <Switch onChange={e=>setMode(mode==='light'?'dark':'light')}></Switch>
          </ListItemButton>
        </ListItem>
      </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
