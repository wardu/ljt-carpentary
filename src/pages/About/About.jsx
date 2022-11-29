import profile from "../../assets/images/profile.jpeg";

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
            Lloyd of LJT Carpentry has been perfecting his craft for over 15
            years. He can produce high-end carpentry, cabinet-making and home
            improvement services. He is a qualified carpenter and has a
            certificate in cabinet-making. He is also a qualified painter and
            decorator. He has a passion for his work and takes pride in his
            workmanship. He is a perfectionist and will not leave a job until it
            is completed to the highest standard. He is a hard worker and will
            always go the extra mile to ensure that his customers are happy with
            the work he has done. He is a friendly and approachable person and
            will always listen to his customers and work with them to achieve
            their desired outcome.
          </p>
        </div>
      </section>
    </section>
  );
};

export default About;
