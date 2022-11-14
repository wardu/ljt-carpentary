import Hero from "../../components/Hero/Hero";
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";

import "./HomePage.scss";

const HomePage = () => {
  return (
    <section className='home'>
      <div className='home__container'>
        <Hero />
        <div className='home__about'>
          <h3 className='home__title'>Welcome, a bit about us...</h3>
          <p className='home__text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            libero, consequatur inventore delectus officia velit corporis,
            maiores voluptatum itaque a accusantium, dolorum impedit ducimus
            aliquid ratione soluta nesciunt reiciendis. Minus.
          </p>
          <p className='home__text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            libero, consequatur inventore delectus officia velit corporis,
            maiores voluptatum itaque a accusantium, dolorum impedit ducimus
            aliquid ratione soluta nesciunt reiciendis. Minus.
          </p>
        </div>
        <hr />
        <Projects />
        <Contact />
      </div>
    </section>
  );
};

export default HomePage;
