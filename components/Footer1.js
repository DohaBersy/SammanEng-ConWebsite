import "./Footer1.css";

const Footer = ({
  
}) => {
  return (
    <div>
    <div className="cont">
      <div >
      <img className="logo-footer" src="sammanlogowhitefooter@2x.png" />
      </div>
      <div className="flex-row">
        <img className="img-footer" src="emaiconwhitecupg@2x.png" />
        <div class="footerText"> info@elsammanec.com</div>
      </div>

      <div className="flex-row">
        <img className="img-footer" src="phoneiconwhitefooter@2x.png"/>
        <div className="footerText">+201222191447<br></br>
          +201095602431</div>
      </div>

      <div className="flex-row">
        <img className="img-footer" src="addwhite@2x.png"/>
        <div className="footerText">21st korash st. Hassanen heikal,nasr city</div>
      </div>

      
     

    </div>
    <div className="end-line"></div>
    </div>
  );
};

export default Footer;
