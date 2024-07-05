import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar1.css";

const Navbar = () => {
  const navigate = useNavigate();

  const onServicesTextClick = useCallback(() => {
    navigate("/homep");
  }, [navigate]);

  const onServicesText1Click = useCallback(() => {
    navigate("/servicesp");
  }, [navigate]);

  const onProjectsTextClick = useCallback(() => {
    navigate("/projectsp");
  }, [navigate]);

  const onServicesText2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="navbar3">
      <div className="services-services" />
      <img
        className="logo-4-icon3"
        loading="lazy"
        alt=""
        src="/logo-4@2x.png"
      />
      <div className="road-construction-text">
        <h3 className="services10" onClick={onServicesTextClick}>
          Home
        </h3>
        <h3 className="services11" onClick={onServicesText1Click}>
          Services
        </h3>
        <div className="grading-leveling-frame">
          <h3 className="projects3" onClick={onProjectsTextClick}>
            Projects
          </h3>
          <h3 className="services12" onClick={onServicesText2Click}>
            Contact Us
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
