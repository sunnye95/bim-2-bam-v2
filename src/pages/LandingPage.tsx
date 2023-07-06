import "@arc-web/components/dist/themes/dark.css";
import "@arc-web/components/dist/themes/index.css";
import "@arc-web/components/dist/themes/light.css";

import "@arc-web/components/dist/components/container/arc-container.js";
import "@arc-web/components/dist/components/navbar/arc-navbar.js";
import "@arc-web/components/dist/components/card/arc-card";
import { Typography, Box, TextField } from "@mui/material";
import {
  ArcContainer,
  ArcNavbar,
  ArcButton,
  ArcMenuItem,
  ArcCard,
} from "@arc-web/components/react";
import buildingImg from "../assets/bc7u_mupi_220518.jpg";
import bimBamLogo from "./assets/bimbimbimbam.png";
import LoginIcon from "@mui/icons-material/Login";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";

const handleClick = () => {
  const link = "https://v2.speckle.arup.com/authn/verify/3bda9bb5fa/1234";
  const url = new URL(link);
  const urlAsString = url.href;

  console.log(urlAsString); // Output: "https://v2.speckle.arup.com/authn/verify/3bda9bb5fa/
};

export const LandingPage = () => {
  return (
    <Box display="flex" flexDirection="column">
      <Box sx={{ m: "2rem 2.5rem" }}>
        <Typography sx={{ fontWeight: 700 }} variant="h4">
          BIM to BAM
        </Typography>
        <Typography
          color="primary.main"
          sx={{ fontStyle: "italic", marginBottom: "2rem" }}
          variant="h5"
        >
          Building Information Model to Building Analytical Model
        </Typography>
        <Link
          to="https://v2.speckle.arup.com/authn/verify/3bda9bb5fa/1234"
          target="_blank"
        >
          <ArcButton onClick={handleClick}>click</ArcButton>
        </Link>
        <Box display="flex" gap="1rem">
          <TextField
            id="outlined"
            size="small"
            label="id"
            sx={{ color: "red" }}
          />
          <Link to="/main-page">
            <ArcButton onClick={handleClick} type="filled">
              <Typography>Find</Typography>
              <ArrowForwardIcon />
            </ArcButton>
          </Link>
        </Box>
      </Box>
      <img src={buildingImg}></img>
    </Box>
  );
};
