import "./Footer.scss";

import logo from "../../assets/images/logo.JPG";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <section className='footer'>
      <div className='footer__container'>
        <ul>
          <li>
            <div className='footer__logo'>
              <img src={logo} alt='LJT logo' />
            </div>
          </li>

          <li>
            <div className='footer__tel'>
              <p>TEL: 07939-961667</p>
            </div>
          </li>
          <li>
            <a
              href='https://www.facebook.com/'
              target='_blank'
              rel='noreferrer'
            >
              <FiFacebook />
            </a>
          </li>
          <li>
            <a
              href='https://www.instagram.com/'
              target='_blank'
              rel='noreferrer'
            >
              <AiOutlineInstagram />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
