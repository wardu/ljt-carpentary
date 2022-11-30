import profile from "../../assets/images/profile.jpeg";
import Footer from "../../components/Footer/Footer";

import "./About.scss";

const About = () => {
  return (
    <section className='about'>
      <section className='about__head'>
        <div className='about__head-container'>
          <div className='about__head-text'>
            <h2 className='about__head-title'>A Little Bit About Us...</h2>
          </div>
          <div className='about__head-img'>
            <img src={profile} alt='profile LJT Carpentry' />
          </div>
        </div>
      </section>
      <section className='about__body'>
        <div className='about__body-container'>
          <p className='about__body-text'>
            LJT Carpentry is lead by myself, Lloyd. I have been perfecting my
            craft for over 15 years. I pride myself in producing high-end
            carpentry, cabinet-making projects and home improvements. I have
            passion for my work and take pride in my workmanship. I am a bit of
            a perfectionist and will not leave a job until it is completed to
            the highest standard.
          </p>
          <p>
            I will always go the extra mile to ensure that my customers are
            happy with the work I have done. People say that I am a friendly and
            approachable person. I will always listen to my customers and work
            with them to achieve their desired outcome.
          </p>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default About;
