import { AiOutlineSafety } from "react-icons/ai";

import room from "../../assets/images/wooden-room.JPG";
import smoothWood from "../../assets/images/smooth-wood.JPG";
import sawDust from "../../assets/images/sawdust.JPG";
import chas from "../../assets/images/chas.png";

import "./Projects.scss";

const Projects = () => {
  return (
    <section className='projects'>
      <div className='projects__side'>
        <h2 className='projects__title'>View recent projects:</h2>
        <div className='projects__icons'>
          <img src={chas} alt='Chas Logo' />
          <h2>Fully Insured</h2>
          <AiOutlineSafety className='projects__icon' />
        </div>
      </div>
      <div className='projects__container'>
        <article className='projects__card'>
          <h3>Timber Door Frames</h3>
          <img
            className='projects__card-image'
            src={room}
            alt='A wooden room'
          ></img>
        </article>
        <article className='projects__card'>
          <h3>Pergola</h3>
          <img
            className='projects__card-image'
            src={smoothWood}
            alt='Some smooth wood'
          ></img>
        </article>
        <article className='projects__card'>
          <h3>Dormer Window</h3>
          <img
            className='projects__card-image'
            src={sawDust}
            alt='Lots of sawdust'
          ></img>
        </article>
      </div>
    </section>
  );
};

export default Projects;
