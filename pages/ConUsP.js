
import "./ConUsP.css";
import NavbarC from "../components/NaBarConUsPg";
const ConUsP = () => {
  return (
    <div >
      <NavbarC/>
      <div className="firstContainerCUsP">
        <div class="title-span-cols">GET IN TOUCH</div>
        <div className="flex-col">
          <div className="circle">
            <img className="imgCirc" src="addwhite@2x.png"></img>
          </div>
          <div class="title">
            ADDRESS
          </div>
          <div class="text">
          21st korash st. Hassanen heikal,nasr city
          </div>
        </div>

        <div className="flex-colMid">
              <div className="circle">
                <img className="imgCirc3" src="phoneiconwhitecupg@2x.png"></img>
              </div>
              <div class="title">
               PHONE
              </div>
             <div className="subTit">
              General Manager
             </div>
             <div className="text">
             01002516081
             </div>
             <div className="subTit">
              Office
             </div>
             <div className="text">
             +201222191447<br></br>+201095602431
             </div>
        </div>

        <div className="flex-col2">
        <div className="circle">
            <img className="imgCirc2" src="emaiconwhitecupg@2x.png"></img>
          </div>
          <div class="title">
            EMAIL
          </div>
          <div className="subTit">
              General Manager
             </div>
             <div className="text">
             Nashaat.nagy@ben.co
             </div>
             <div className="subTit">
              Office
             </div>
             <div className="text">
             
 info@elsammanec.com
             </div>
        </div>
      </div>
      <div className="secContainerGrid">
       <div className="row-flex">
        
          <div className="thinLine"></div>
          <div className="RechOutToUs-txt">Reach Out <br className="lBr"></br>To Us</div>
       </div>
       
        <div className="txtSecCon">We highly value your feedback and inquiries. Our dedicated team is here to provide you with exceptional support and assistance. Please don't hesitate to contact us at your convenience, and we will promptly respond to any questions or concerns you may have. Your satisfaction is our top priority, and we look forward to serving you with the utmost professionalism and efficiency.</div>
      </div>
      <div className="find-us-on-gm">Find Us On Google Maps</div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3453.2074563557408!2d31.338410775554408!3d30.059587374916052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDAzJzM0LjUiTiAzMcKwMjAnMjcuNiJF!5e0!3m2!1sen!2seg!4v1719313945333!5m2!1sen!2seg"
        width="100%"
        height="500"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="endLine"></div>
    </div>
  );
};

export default ConUsP;
