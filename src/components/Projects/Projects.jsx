import balconyDecking from "../../assets/images/project-photos/finished-decking-2.jpg";
import treehouse from "../../assets/images/project-photos/treehouse.jpg";
import fence from "../../assets/images/project-photos/fence-after.jpg";
import wardrobe from "../../assets/images/project-photos/wardrobe1.jpg";
import staircase from "../../assets/images/project-photos/staircase.jpg";

import "./Projects.scss";

const Projects = () => {
  return (
    <section className='projects'>
      <div className='projects__side'>
        <h2 className='projects__title'>Recent Projects...</h2>
      </div>
      <div className='projects__container'>
        <article className='projects__card'>
          <h3>Balcony Decking</h3>
          <img
            className='projects__card-image'
            src={balconyDecking}
            alt='A wooden Decking'
          ></img>
        </article>
        <article className='projects__card'>
          <h3>Treehouse</h3>
          <img
            className='projects__card-image'
            src={treehouse}
            alt='Wooden treehouse'
          ></img>
        </article>
        <article className='projects__card'>
          <h3>Fencing</h3>
          <img
            className='projects__card-image'
            src={fence}
            alt='New fence'
          ></img>
        </article>
        <article className='projects__card'>
          <h3>Built-in Storage</h3>
          <img
            className='projects__card-image'
            src={wardrobe}
            alt='Built-in wardobe'
          ></img>
        </article>
        <article className='projects__card'>
          <h3>Oak Staircase</h3>
          <img
            className='projects__card-image'
            src={staircase}
            alt='Oak staircase'
          ></img>
        </article>
      </div>
      <hr />
      <hr />
    </section>
  );
};

export default Projects;
