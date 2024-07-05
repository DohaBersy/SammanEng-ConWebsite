
import "./ProjectsP.css";
import NavbarP from "../components/NavBarPrP";
import Footer from "../components/Footer1";


const ProjectsP = () => {
  

  return (
    <div>
<NavbarP/>
<div className="ourSerText">OUR PROJECTS</div>

<div className="firstContainer">
  <div>
  <img src="greenriverprpg@2x.png"/>
  <div className="belowPicTxt">
  GREEN RIVER | CAIRO | 2019-2021
  </div>
  </div>
  <div className="txt-in-first-con">
        With unwavering dedication to excellence, we've successfully completed diverse projects showcasing our expertise in shaping landscapes.
        From precise road construction enhancing transportation to intricate land reclamation harmonizing urban development with environmental sustainability,
        our portfolio reflects our commitment to high-quality solutions.
        Our capabilities include grading and leveling for optimal structures,
        infrastructure development addressing modern community needs,
        and proficiency in canal excavation and tunneling, 
        adding innovation to our repertoire. Explore our transformative impact in civil engineering through our featured projects.
        Here are some of the projects we participted in:
      <ul className="padded">
        <li>Cement Factory in Beni Suef with Kobe Steel <div className="datesColor">1992-1993</div> </li>
        <li>Dream Land <div className="datesColor">1996-2007</div></li>
        <li>Beverly Hills<div className="datesColor">1999</div> </li>
        <li>Mubarak Studios <div className="datesColor">2000</div></li>
        <li>Palm Hills <div className="datesColor">2003-2006</div></li>
        <li>Gardiena Springs <div className="datesColor">2007</div></li>
        <li>Porto Sokhna<div className="datesColor">20009</div> </li>
        <li>New Giza <div className="datesColor">2010-2016</div></li>
        <li>Swan Lake<div className="datesColor">2021</div> </li>
        <li>R5 Buildings <div className="datesColor">2018-2019</div></li>
        <li>New Opera in the New Administrative Capital <div className="datesColor">2017</div></li>
        <li>Green River <div className="datesColor">2019-2022</div></li>
        <li>High-Speed Electric Train <div className="datesColor">2022-now</div></li>
      </ul>
</div>

</div>
<div className="featPr-tit">FEATURED PROJECTS</div>
<div className="firstContainer">
        <div>
            <img class="bgImg" src="swanlakeprpg@2x.png"/>
            <div className="belowPicTxt">
            SWANLAKE | CAIRO | 2021
            </div>
        </div>
        <div>
            <img class="bgImg" src="newopprpg@2x.png"/>
            <div className="belowPicTxt">
            NEW OPERA | NEW CAPITAL | 2003-2006
            </div>
        </div>
</div>
<div className="firstContainer">
        <div>
            <img class="bgImg" src="palmhillsprp@2x.png"/>
            <div className="belowPicTxt">
            PALM HILLS | CAIRO | 2003-2006
            </div>
      </div>
      <div>
          <img class="bgImg" src="portsokhnaprpg@2x.png"/> 
          <div className="belowPicTxt">
          PORTOSOKHNA | AIN SOKHNA | 2003-2006
          </div>
      </div>
</div>
<Footer/>

    </div>
  );
};

export default ProjectsP;
