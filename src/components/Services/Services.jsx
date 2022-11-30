import "./Services.scss";

const Services = () => {
  return (
    <>
      <hr />
      <section className='services'>
        <div className='services__container'>
          <h3 className='services__title'>Our Services</h3>

          <div className='services__cards'>
            <div className='services__card'>
              <h4 className='services__card-title'>Kitchens</h4>
              <p className='services__card-text'>
                Unique and handcrafted, individually designed and built to
                order. A high-quality, bespoke kitchen can be timeless addition
                to your home, perfectly displaying your individual style.
              </p>
            </div>
            <div className='services__card'>
              <h4 className='services__card-title'>Doors</h4>
              <p className='services__card-text'>
                Made to measeure doors of all varieties (internal, External,
                Bi-Fold, French, Patio, Stable, Garage doors etc.) Designed to
                meet your exacting requirements in different styles and
                finishes.
              </p>
            </div>
            <div className='services__card'>
              <h4 className='services__card-title'>Stairs</h4>
              <p className='services__card-text'>
                New installations and refurbishments. Every staircase is unique
                and represents a opportunity to create something individual and
                to a customers taste and budget, whether modern or contemporary.
              </p>
            </div>
            <div className='services__card'>
              <h4 className='services__card-title'>Fitted Wardrobes</h4>
              <p className='services__card-text'>
                Planning, Design and Installation. There are endless
                possibilities when designing bespoke cabinetry. We can create a
                unique and stylish storage solution to suit your needs that will
                truly make your house, your home.
              </p>
            </div>
            <div className='services__card'>
              <h4 className='services__card-title'>Decking and Flooring</h4>
              <p className='services__card-text'>
                New installations and refurbishments. Wooden flooring and
                decking is a beautiful and timeless addition to any home or
                garden.
              </p>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <hr />
    </>
  );
};

export default Services;
