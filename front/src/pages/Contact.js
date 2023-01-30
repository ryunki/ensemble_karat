import { Container, Row, Col } from 'react-bootstrap';

import './Contact.css'

const Contact = () => {
  return (
    <>
        <Row className="justify-content-lg-center contact-row mx-0">
          <Col className="me-lg-4 px-0" lg={5} sm={12}>
              <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d602.3457998228718!2d8.622816399670064!3d50.223715014719346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd07bd59524b7b%3A0x66786841bf27cfa4!2sLouisenstra%C3%9Fe%20115%2C%2061348%20Bad%20Homburg%20vor%20der%20H%C3%B6he%2C%20Germany!5e0!3m2!1sen!2skr!4v1671373605137!5m2!1sen!2skr"
            style={{ border: '0', width: '100%', height: '45vh' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
          </Col>
          <Col className="text-center mt-4" lg={3} sm={6} xs={12}>
            <h3>OUR LOCATION</h3>
            <ul>
              <li className="italic-text mb-1 ">BTS Tokyoya Sushi & Bulgogi</li>
              <li>Louisenstraße 115</li>
              <li>61348 Bad Homburg</li>
              <li className="mt-4">E-mail: soonwonkang@gmail.com</li>
              <li className="mt-2">Tel: 0160 9822 7444</li>
            </ul>
          </Col>
          <Col className="text-center mt-4" lg={3} sm={6} xs={12}>
            <h3>OPENING HOURS</h3>
            <ul>
              <li className="italic-text mb-1">Monday - Sunday</li>
              <li>11:30 am - 2:30 pm &</li>
              <li>4:30 pm - 9:30 pm</li>
              <li>(Delivery time from 5:00 p.m.)</li>
            </ul>
          </Col>
        </Row>
      
    </>
  );
};

export default Contact;
