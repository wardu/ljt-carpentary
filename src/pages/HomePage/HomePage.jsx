import Hero from "../../components/Hero/Hero";
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import Services from "../../components/Services/Services";

import "./HomePage.scss";

const HomePage = () => {
  return (
    <section className='home'>
      <div className='home__container'>
        <Hero />
        <div className='home__about'>
          <h3 className='home__title'>Carpentry and joinery Specialists...</h3>
          <p className='home__text'>
            Here at LJT we are a small team of highly skilled and experienced
            professionals. We have a passion for all things carpentry and
            joinery. We are a family run business and have been trading for over
            15 years. We are based on the sunshine coast of East Sussex and
            cover all areas south of London.
          </p>
          <p className='home__text'>
            We are fully insured and all our work is guaranteed. We are happy to
            provide free estimates and advice. We are also happy to provide
            references from previous customers.
          </p>
        </div>
        <hr />
        <Services />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </section>
  );
};

export default HomePage;
