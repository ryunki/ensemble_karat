import { Container, Row, Col, Card } from 'react-bootstrap';
import CarouselFade from './CarouselFade';

import './Footer.css';
const Footer = () => {
  return (
    <>
      <div className="footer-clean">
        <footer>
        
          <div className="row" style={{display:"block"}}>
            <div className="col-sm-2 col-md-2 item" style={{margin:"auto"}}>
              <div className="mb-2 center_logo_and_text" >
                <img className="footer-logo" src="/logo_2.png"/>
              </div>
              {/* <h3 className="title">Contact</h3> */}
              {/* <ul>
                <li>ensemble.karat@gmail.com</li>
              </ul> */}
              <div className="center_logo_and_text" >
                ensemble.karat@gmail.com
              </div>
            </div>
            
            <div className="col-lg-3 item social" style={{margin:"auto"}}>
              <a href="#">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://www.instagram.com/ensemble_karat">
                <i className="bi bi-instagram"></i>
              </a>
              {/* <p className="copyright">Tokyoya © 2022</p> */}
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
