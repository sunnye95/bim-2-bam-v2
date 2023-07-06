import { AppProvider } from "./context/AppContext";
import { NavBar } from "./components/NavBar";
import { LandingPage } from "./pages/LandingPage";
import { ArcContainer } from "@arc-web/components/react";
import { MainPage } from "./pages/MainPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./styles/theme";
const AppWrapper = () => {
  return (
    <>
      <NavBar />
      <ArcContainer>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/main-page" element={<MainPage />} />
        </Routes>
      </ArcContainer>
    </>
  );
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <AppWrapper />
      </AppProvider>
    </ThemeProvider>
  );
};

export default App;
