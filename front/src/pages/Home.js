
import { Container, Row, Col } from 'react-bootstrap';
import {useEffect, useState, useRef} from 'react'

import CarouselFade from '../components/CarouselFade';
// import useIntersectionObsever from '../components/useIntersectionObserver';
import './Home.css';

const Home = () => {
  const [homeData, setHomeData] = useState({
    description: "Musik für den besonderen Anlass",
    contents:[
      {
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum Lorem ipsum doloquet, odio dolor laoreet magna, quis ullamcorper tellus ex at mauris. Morbi in posuere justo. Nullam sed egestas elit. Quisque accumsan, diam vitae tempor tincidunt, urna turpis ullamcorper sem",
        imgUrl:"team_1.png"
      },
      {
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum Lorem ipsum doloquet, odio dolor laoreet magna, quis ullamcorper tellus ex at mauris. Morbi in posuere justo. Nullam sed egestas elit. Quisque accumsan, diam vitae tempor tincidunt, urna turpis ullamcorper sem",
        imgUrl:"team_2.png"
      },
    ]
  })

  // const option={
  //   threshold:1, //100% of the element must be on the screen to trigger the "entries" function
  //   rootMargin: "", //this sets the margin limits of a container to diplay elements
  // }

  // window.addEventListener('scroll', (event)=>{ //without this line, intersectionObserver doesnt work
  //   const rows = document.querySelectorAll('.home-row')
  //   const observer = new IntersectionObserver((entries)=>{
  //         entries.forEach(entry=>{
  //           entry.target.classList.toggle("show", entry.intersectionRatio === 1)
  //           // this stops observing the elements that were once observed
  //           if(entry.isIntersecting) observer.unobserve(entry.target) 
  //       })
  //     },option)
  //   rows.forEach(row=>{
  //     observer.observe(row)
  //   })
  // })

  return (
    <>
      <CarouselFade />
      <Container className="mb-0 pb-5" style={{marginTop:"14rem"}}>
          <h4 className="home-semi-title text-center">
            {homeData.description}
          </h4>
          {homeData && 
            homeData.contents.map((item,idx)=>(
            (idx+2)%2 === 1 ? (
                <Row key={idx} className="home-row">
                  <Col xs={{span:12, order:2}} sm={{span:6, order:1}} 
                    className="col-contents-text">
                    <div className="text-bg-wrapper-1">
                      <p>{item.description}</p>
                    </div>
                  </Col>
          
                  <Col xs={{span:12, order:1}} sm={{span:6, order:2}} 
                    className="col-contents-photo"
                  >  
                    <img className="home-team-picture img-fluid" src={item.imgUrl}/>
                  </Col>
                </Row>  
            ) : (
    
                <Row key={idx} className="home-row">
                  <Col xs={{span:12, order:2}} sm={{span:6, order:2}} 
                    className="col-contents-text">
                    <div className="text-bg-wrapper-1">
                      <p>{item.description}</p>
                    </div>
                  </Col>
                  
                  <Col xs={{span:12, order:1}} sm={{span:6, order:1}} 
                    className="col-contents-photo"
                  >
                    <img className="home-team-picture img-fluid" src={item.imgUrl}/>
                  </Col>
                </Row> 
              )
            )
          )}
      </Container>
    </>
  );
};


export default Home;
