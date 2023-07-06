import { Box, Typography, TextField } from "@mui/material";
import { useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "@arc-web/components/dist/themes/dark.css";
import "@arc-web/components/dist/themes/index.css";
import "@arc-web/components/dist/themes/light.css";

import "@arc-web/components/dist/components/container/arc-container.js";
import "@arc-web/components/dist/components/navbar/arc-navbar.js";
import "@arc-web/components/dist/components/drawer/ArcDrawer";

import { ArcButton } from "@arc-web/components/react";
import { CustomModal } from "./Modal";

export const SidePanel = () => {
  const [openModal1, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);

  const handleOpenModal1 = () => setOpenModal1(true);
  const handleCloseModal1 = () => setOpenModal1(false);
  const handleOpenModal2 = () => setOpenModal2(true);
  const handleCloseModal2 = () => setOpenModal2(false);
  const handleOpenModal3 = () => setOpenModal3(true);
  const handleCloseModal3 = () => setOpenModal3(false);
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap="2rem"
    >
      <Typography variant="h4" sx={{ mb: "-1rem", mt: "1rem" }}>
        Speckler v2
      </Typography>
      <Box display="flex" flexDirection="column" sx={{ maxWidth: "12rem" }}>
        <CustomModal
          open={openModal1}
          onClose={handleCloseModal1}
          title="Export gbXML"
          description=" Please provide an email address and you will recieve a download"
        >
          <Box display="flex">
            <TextField size="small" sx={{ margin: "auto" }}>
              enter something
            </TextField>
            <ArcButton>Export</ArcButton>
          </Box>
        </CustomModal>

        <Typography
          align="justify"
          sx={{
            textAlign: "center",
            marginBottom: "1rem",
          }}
        >
          Fill out space type parameters and press Update Spaces to populate the
          Spaces sheet
        </Typography>

        <ArcButton type="outlined" onClick={handleOpenModal1}>
          Update Spaces
          <KeyboardArrowRightIcon />
        </ArcButton>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        pb=".5rem"
        sx={{ maxWidth: "12rem" }}
      >
        <CustomModal
          open={openModal2}
          onClose={handleCloseModal2}
          title="This is the title"
          description="This is the description"
        >
          <ArcButton>click</ArcButton>
          <TextField>input something here</TextField>
        </CustomModal>
        <Typography
          align="justify"
          sx={{
            textAlign: "center",
            marginBottom: "1rem",
          }}
        >
          Edit data in the newly generated sheets and hit Upload Data to push
          your changes to speckle
        </Typography>

        <ArcButton type="outlined" onClick={handleOpenModal2}>
          Upload Data
          <KeyboardArrowRightIcon />
        </ArcButton>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        pb=".5rem"
        sx={{ maxWidth: "12rem" }}
      >
        <CustomModal
          open={openModal3}
          onClose={handleCloseModal3}
          title="This is the title"
          description="This is the description"
        >
          <ArcButton>click</ArcButton>
          <TextField>input something here</TextField>
        </CustomModal>
        <Typography
          align="justify"
          sx={{
            textAlign: "center",
            marginBottom: "1rem",
          }}
        >
          Once you have uploaded your data to Speckle, it can be exported in
          gbXML format by clicking below
        </Typography>

        <ArcButton type="outlined" onClick={handleOpenModal3}>
          Export gbXML
          <KeyboardArrowRightIcon />
        </ArcButton>
      </Box>
      <Typography
        component="a"
        href="https://example.com/support"
        target="_blank"
        rel="noopener noreferrer"
        color="black"
      >
        Contact support here
      </Typography>
    </Box>
  );
};
