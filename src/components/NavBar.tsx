import { useState } from "react";
import "@arc-web/components/dist/themes/dark.css";
import "@arc-web/components/dist/themes/index.css";
import "@arc-web/components/dist/themes/light.css";

import "@arc-web/components/dist/components/container/arc-container.js";
import "@arc-web/components/dist/components/navbar/arc-navbar.js";
import "@arc-web/components/dist/components/drawer/ArcDrawer";
import {
  ArcContainer,
  ArcNavbar,
  ArcButton,
  ArcMenuItem,
  ArcDrawer,
} from "@arc-web/components/react";

import bimBamLogo from "../assets/bimbimbimbam.png";
import LoginIcon from "@mui/icons-material/Login";
import PersonIcon from "@mui/icons-material/Person";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

export const NavBar = () => {
  const [loginStatus, setLoginStatus] = useState(false);
  return (
    <ArcNavbar tabs={3} logo={bimBamLogo}>
      <ArcButton type="tab" onClick={() => console.log("something")}>
        Info
      </ArcButton>
      <ArcButton type="tab" onClick={() => console.log("something")}>
        Docs
      </ArcButton>
      <ArcButton
        type="tab"
        onClick={() =>
          loginStatus ? setLoginStatus(false) : setLoginStatus(true)
        }
      >
        Login
        {loginStatus ? <PersonIcon /> : <PersonOutlineIcon />}
      </ArcButton>
    </ArcNavbar>
  );
};
