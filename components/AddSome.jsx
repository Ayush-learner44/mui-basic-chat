import {
  Add,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import {
  Fab,
  Modal,
  Tooltip,
  Box,
  styled,
  Avatar,
  Typography,
  TextField,
  Stack,
  ButtonGroup,
  Button,
} from "@mui/material";
import React, { useState } from "react";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "10px",
});

const AddSome = () => {
  const [open, setopen] = useState(false);
  return (
    <>
      <Tooltip
        title="Delete"
        onClick={(e) => setopen(true)}
        sx={{
          position: "fixed",
          bottom: "20px",
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <Add />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setopen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          height={300}
          width={400}
          borderRadius={5}
          p={3}
          bgcolor={"background.default"}
          color={"text.primary"}
        >
          <Typography
            variant="h6"
            fontWeight={700}
            color={"gray"}
            textAlign={"center"}
          >
            Create a Post
          </Typography>
          <UserBox>
            <Avatar
              sx={{ width: "30", height: "30" }}
              alt="Remy Sharp"
              src="https://loremflickr.com/g/320/240/paris,girl/all"
            />
            <Typography variant="subtitle1" m={1} fontWeight={700}>
              John Boyega
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="Default Value"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
          fullWidth
            variant="contained"
            aria-label="outlined primary button group"
           
          >
            <Button>Post</Button>
            <Button sx={{width:'100px'}}><DateRange></DateRange></Button>
          
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default AddSome;
