import "./Contact.scss";

const Contact = () => {
  return (
    <>
      <h3 className='contact__title'>Contact Us</h3>
      <section className='contact'>
        <div className='contact__container'>
          <form>
            <div className='form__input'>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Enter your name...'
                className='form__input-box'
              />
            </div>

            <div className='form__input'>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='Enter email address...'
                className='form__input-box'
              />
            </div>

            <div className='form__input'>
              <input
                type='text'
                name='subject'
                id='subject'
                placeholder='Enter subject...'
                className='form__input-box'
              />
            </div>

            <div className='form__input'>
              <textarea
                rows='6'
                name='message'
                id='message'
                placeholder='Your message...'
                className='form__input-box'
              ></textarea>
            </div>

            <div>
              <button className='form-btn'>Send</button>
            </div>
          </form>
        </div>
      </section>
      <hr />
      <hr className='form__end' />
    </>
  );
};

export default Contact;
