import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import ConUsP from "./pages/ConUsP";
import ProjectsP from "./pages/ProjectsP";
import ServicesP from "./pages/ServicesP";
import HomeP from "./pages/HomeP";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/projectsp":
        title = "";
        metaDescription = "";
        break;
      case "/servicesp":
        title = "";
        metaDescription = "";
        break;
      case "/homep":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]',
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/contactUs" element={<ConUsP/>} />
      <Route path="/projectsp" element={<ProjectsP/>} />
      <Route path="/servicesp" element={<ServicesP/>} />
      <Route path="/" element={<HomeP/>} />
    </Routes>
  );
}
export default App;
