import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ComingSoon, getIsUnlocked } from "./components/ComingSoon";
import { Layout } from "./components/Layout";
import { ScrollToTop } from "./components/ScrollToTop";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { CampusPage } from "./pages/CampusPage";
import { SkillsPage } from "./pages/SkillsPage";
import { ResumePage } from "./pages/ResumePage";

function App() {
  const [unlocked, setUnlocked] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setUnlocked(getIsUnlocked());
  }, []);

  if (!mounted) {
    return null;
  }

  if (!unlocked) {
    return <ComingSoon onUnlock={() => setUnlocked(true)} />;
  }

  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="campus" element={<CampusPage />} />
          <Route path="skills" element={<SkillsPage />} />
          <Route path="resume" element={<ResumePage />} />
        </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
