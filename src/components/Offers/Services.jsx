import "./Services.scss";

const Offers = () => {
  return (
    <>
      <hr />
      <section className='offers'>
        <div className='offers__container'>
          <h3 className='offers__title'>Our Services</h3>

          <div className='offers__cards'>
            <div className='offers__card'>
              <h4 className='offers__card-title'>Kitchens</h4>
              <p className='offers__card-text'>
                Planning, Design, Supply and Installation
              </p>
            </div>
            <div className='offers__card'>
              <h4 className='offers__card-title'>Doors</h4>
              <p className='offers__card-text'>
                Internal, External, Bi-Fold, French, Patio, Stable, Garage doors
              </p>
            </div>
            <div className='offers__card'>
              <h4 className='offers__card-title'>Stairs</h4>
              <p className='offers__card-text'>
                New installations and refurbishments
              </p>
            </div>
            <div className='offers__card'>
              <h4 className='offers__card-title'>Fitted Wardrobes</h4>
              <p className='offers__card-text'>
                Planning, Design and Installation
              </p>
            </div>
            <div className='offers__card'>
              <h4 className='offers__card-title'>Decking and Flooring</h4>
              <p className='offers__card-text'>
                New installations and refurbishments
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Offers;
