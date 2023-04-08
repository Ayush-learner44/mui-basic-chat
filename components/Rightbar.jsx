import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box  width={300}>
        <Typography variant="h6" fontWeight={700} marginTop={2} marginBottom={3}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar
            alt="Remy Sharp"
            src="https://loremflickr.com/g/320/240/girl/all"
          />
          <Avatar
            alt="Travis Howard"
            src="https://loremflickr.com/g/320/240/mickey/all"
          />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <Avatar
            alt="Agnes Walker"
            src="https://loremflickr.com/g/320/240/boy/all"
          />
          <Avatar
            alt="Mavis"
            src="https://loremflickr.com/g/320/240/tiger/all"
          />
          <Avatar
            alt="Jarvis"
            src="https://loremflickr.com/g/320/240/lion/all"
          />
          <Avatar
            alt="Trevor Shukla"
            src="https://loremflickr.com/g/320/240/puma/all"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={700} mt={3} marginBottom={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              alt="Trevor Shukla"
              src="https://loremflickr.com/g/320/240/roses,pineapple,peaches,beaches,water,hill,space,earth,sun,moon,girl,boy,man,woman,love,smile,dog,cat"
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              alt="Trevor Shukla"
              src="https://loremflickr.com/g/320/240/roses,pineapple,"
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              alt="Trevor Shukla"
              src="https://loremflickr.com/g/320/240/roses"
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              alt="Trevor Shukla"
              src="https://loremflickr.com/g/320/240/dog,cat"
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              alt="Trevor Shukla"
              src="https://loremflickr.com/g/320/240/smile,dog"
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              alt="Trevor Shukla"
              src="https://loremflickr.com/g/320/240/love,smile,dog,cat"
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              alt="Trevor Shukla"
              src="https://loremflickr.com/g/320/240/love"
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              alt="Trevor Shukla"
              src="https://loremflickr.com/g/320/240/beaches,water"
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              alt="Trevor Shukla"
              src="https://loremflickr.com/g/320/240/hill,space,earth,sun"
              loading="lazy"
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={700} mt={2} marginBottom={1}>
          Ongoing Converstions
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp"  src="https://loremflickr.com/g/320/240/man" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard"  src="https://loremflickr.com/g/320/240/boy"/>
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker"  src="https://loremflickr.com/g/320/240/person" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker"  src="https://loremflickr.com/g/320/240/monkey" />
            </ListItemAvatar>
            <ListItemText
              primary="Buri Xi Ping"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — I wanted a cup of tea by 10:00AM ...."}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
