import "./App.css";
import AOS from "aos";
import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import Background from "./components/background/Background";
import ThemeToggler from "./hooks/ThemeToggler";
import Spinner from "components/styledComponents/Spinner";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const CoursesPage = React.lazy(() => import("./pages/CoursesPage"));
const ProfesionalExperiencePage = React.lazy(() =>
  import("./pages/ProfesionalExperiencePage")
);
const AcademicBackgroundPage = React.lazy(() =>
  import("./pages/AcademicBackgroundPage")
);

const SkillsPage = React.lazy(() => import("./pages/SkillsPage"));

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <ThemeToggler>
          <div>
            <NavBar></NavBar>
          </div>
          <Background style={{ padding: "1rem", display: "flex", marginTop:"56px"}}>
            <React.Suspense fallback={<><Spinner/></>}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                  path="/professional-experience"
                  element={<ProfesionalExperiencePage />}
                />
                <Route path="/skills" element={<SkillsPage />} />
                <Route path="/courses" element={<CoursesPage />} />
                <Route
                  path="/academic-background"
                  element={<AcademicBackgroundPage />}
                />
              </Routes>
            </React.Suspense>
          </Background>
        </ThemeToggler>
      </BrowserRouter>
    </>
  );
}

export default App;
