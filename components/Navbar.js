import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const onServicesTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onServicesText1Click = useCallback(() => {
    navigate("/servicesp");
  }, [navigate]);

  const onProjectsTextClick = useCallback(() => {
    navigate("/projectsp");
  }, [navigate]);

  const onServicesText2Click = useCallback(() => {
    navigate("/contactUs");
  }, [navigate]);

  return (
    <div className="bigCont">
      <div className="logoCon">
      <img className="img" alt="" src="logo-4@2x.png" />
      </div>
      <div className="txtCon">
        <div className="nonActiveP" onClick={onServicesText2Click}>
          ContactUs
        </div>
        <div className="nonActiveP" onClick={onProjectsTextClick}>
          Projects
        </div>
        <div className="nonActiveP" onClick={onServicesText1Click}>
          Services
        </div>  
        <div className="activeP" onClick={onServicesTextClick}>
          Home
        </div>            
      </div>
    </div>
  );
};

export default Navbar;
