import { Container, Row, Col } from 'react-bootstrap';

import './Contact.css'

const Contact = () => {
  return (
    <>
        <Row className="justify-content-lg-center contact-row mx-0 " style={{marginTop:"14rem"}}>
          
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
