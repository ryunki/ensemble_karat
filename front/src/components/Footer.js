import { Container, Row, Col, Card } from 'react-bootstrap';
import CarouselFade from './CarouselFade';

import './Footer.css';
const Footer = () => {
  return (
    <>
      <div className="footer-clean">
        <footer>
        
          <div className="row justify-content-center">
            <div className="col-sm-4 col-md-3 item">
              <div className="mb-2" style={{textAlign: "center"}}>
                <img className="footer-logo" src="/tokyoya_logo_white.png"/>
              </div>
              <ul>
                <li>
                  Tokyoya Sushi in Bad Homburg offers fresh, quality sushi. All
                  dishes are also available as a delivery service and take-away.
                </li>
              </ul>
            </div>
            <div className="col-sm-4 col-md-3 item">
              <h3 className="title">Contact</h3>
              <ul>
                <li>Tokyoya Sushi & Bulgogi</li>
                <li>Louisenstraße 115 61348 Bad Homburg before the heigh</li>
                <li>email@gmail.com</li>
                <li>Tel: 123 4567 890</li>
              </ul>
            </div>
            <div className="col-sm-4 col-md-3 item">
              <h3 className="title">Opening hours</h3>
              <ul>
                <li>Monday - Sunday</li>
                <li>11:30 am - 2:30 pm &</li>
                <li>4:30 pm - 9:30 pm</li>
                <li>(Delivery time from 5:00 p.m.)</li>
              </ul>
            </div>
            <div className="col-sm-4 col-md-3 item">
              <h3 className="title">delivery areas</h3>
              <ul>
                <li>Bad Homburg/61348/61350/61352/</li>
                <li>Oberursel (Taunus)/61440/</li>
                <li>Friedrichsdorf/61381 / </li>
              </ul>
            </div>
            <div className="col-lg-3 item social">
              <a href="#">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#">
                <i className="bi bi-snapchat"></i>
              </a>
              <a href="#">
                <i className="bi bi-instagram"></i>
              </a>
              <p className="copyright">Tokyoya © 2022</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
