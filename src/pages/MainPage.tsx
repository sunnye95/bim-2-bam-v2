import { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Spreadsheet from "react-spreadsheet";
import { SidePanel } from "../components/SidePanel";
export const MainPage = () => {
  const data = [
    [
      { value: "Vanilla" },
      { value: "Chocolate" },
      { value: "Strawberry" },
      { value: "Cookies" },
      { value: "Strawberry" },
      { value: "Cookies" },
      { value: "Strawberry" },
      { value: "Cookies" },
      { value: "Strawberry" },
      { value: "Cookies" },
      { value: "Cookies" },
    ],
    [
      { value: "Strawberry" },
      { value: "Cookies" },
      { value: "Strawberry" },
      { value: "Cookies" },

      { value: "Strawberry" },
      { value: "Cookies" },

      { value: "Strawberry" },
      { value: "Cookies" },
    ],
    [{ value: "Strawberry" }, { value: "Cookies" }],
    [{ value: "Strawberry" }, { value: "Cookies" }],
    [{ value: "Strawberry" }, { value: "Cookies" }],
    [{ value: "Strawberry" }, { value: "Cookies" }],
  ];

  const labels = [
    "material",
    "something",
    "something",
    "three",
    "four",
    "something",
    "something",
    "material",
    "something",
    "three",
    "four",
  ];
  return (
    <Box display="flex" gap="2rem">
      <Box flexGrow={6} p="2rem" sx={{ overflow: "auto", margin: "1rem" }}>
        <Typography>Tables bruv</Typography>
        <Box sx={{ maxWidth: "8rem", maxHeight: "35rem" }}>
          <Spreadsheet data={data} rowLabels={labels}></Spreadsheet>
        </Box>
      </Box>
      <Box
        m="1.5rem"
        p=".5rem"
        flexGrow={1}
        sx={{
          border: 1,
          borderRadius: ".5rem",
          boxShadow: "6px 4px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <SidePanel />
      </Box>
    </Box>
  );
};
