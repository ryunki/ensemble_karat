
import { Container, Row, Col } from 'react-bootstrap';
import {useEffect, useState, useRef} from 'react'

import CarouselFade from '../components/CarouselFade';
// import useIntersectionObsever from '../components/useIntersectionObserver';
import './Home.css';

const Home = () => {
  const [homeData, setHomeData] = useState({
    description: "Do you love sushi? Then Tokyoya is the place for you!",
    contents:[
      {
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum Lorem ipsum doloquet, odio dolor laoreet magna, quis ullamcorper tellus ex at mauris. Morbi in posuere justo. Nullam sed egestas elit. Quisque accumsan, diam vitae tempor tincidunt, urna turpis ullamcorper sem",
        imgUrl:"/sushi/plate/sushi1.png"
      },
      {
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum Lorem ipsum doloquet, odio dolor laoreet magna, quis ullamcorper tellus ex at mauris. Morbi in posuere justo. Nullam sed egestas elit. Quisque accumsan, diam vitae tempor tincidunt, urna turpis ullamcorper sem",
        imgUrl:"/sushi/plate/sushi2.png"
      },
      {
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum Lorem ipsum doloquet, odio dolor laoreet magna, quis ullamcorper tellus ex at mauris. Morbi in posuere justo. Nullam sed egestas elit. Quisque accumsan, diam vitae tempor tincidunt, urna turpis ullamcorper sem",
        imgUrl:"/sushi/plate/sushi3.png"
      },
      {
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum Lorem ipsum doloquet, odio dolor laoreet magna, quis ullamcorper tellus ex at mauris. Morbi in posuere justo. Nullam sed egestas elit. Quisque accumsan, diam vitae tempor tincidunt, urna turpis ullamcorper sem",
        imgUrl:"/sushi/plate/sushi4.png"
      },
      {
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum Lorem ipsum doloquet, odio dolor laoreet magna, quis ullamcorper tellus ex at mauris. Morbi in posuere justo. Nullam sed egestas elit. Quisque accumsan, diam vitae tempor tincidunt, urna turpis ullamcorper sem",
        imgUrl:"/sushi/plate/sushi5.png"
      }
    ]
  })

  const option={
    threshold:1, //100% of the element must be on the screen to trigger the "entries" function
    rootMargin: "", //this sets the margin limits of a container to diplay elements
  }

  window.addEventListener('scroll', (event)=>{ //without this line, intersectionObserver doesnt work
    const rows = document.querySelectorAll('.home-row')
    const observer = new IntersectionObserver((entries)=>{
          entries.forEach(entry=>{
            
            entry.target.classList.toggle("show", entry.intersectionRatio === 1)
            // this stops observing the elements that were once observed
            if(entry.isIntersecting) observer.unobserve(entry.target) 
        })
      },option)
    rows.forEach(row=>{
      observer.observe(row)
    })
  })

  
//without useEffect, the blur effect wont work. because this needs to be applied after all pictures load
// useEffect(()=>{ 
//   const elemsAll = document.querySelectorAll<HTMLElement>('.home-sushi-picture') 
//     const effectEl = document.querySelectorAll<HTMLElement>('.col-contents-blur-effect') 
//     Array.from(elemsAll).map((elem, idx)=>{
//       effectEl[idx].style.height = elem.clientHeight+"px"
//       effectEl[idx].style.width = elem.clientWidth+"px"
//     })
// },[])
// useEffect(()=>{
//   const elemsAll = document.querySelectorAll<HTMLElement>('.home-sushi-picture') 
//   const effectEl = document.querySelectorAll<HTMLElement>('.col-contents-blur-effect') 
//   const obs =  new ResizeObserver(changes => {
//       changes.map((change,idx)=>{
//           effectEl[idx].style.height = change.contentRect.height+"px"
//           effectEl[idx].style.width = change.contentRect.width+"px"
//       })
//     })
//   elemsAll.forEach(elem=>{
//     obs.observe(elem)
//   })

// },[])

  return (
    <>
      <CarouselFade />
      <Container className="mb-0 pb-5">
          <h4 className="home-semi-title text-center">
            {homeData.description}
          </h4>
          {homeData && 
            homeData.contents.map((item,idx)=>(
            (idx+2)%2 === 1 ? (
              <Row key={idx} className="home-row">
                <Col xs={{span:12, order:2}} sm={{span:6, order:1}} className="col-contents-text">
                <p>{item.description}</p>
                </Col>
                
                  <Col xs={{span:12, order:1}} sm={{span:6, order:2}} 
                    className="col-contents-photo"
                    style={{
                      // backgroundImage:"url('/sushi/plate/sushi1.png')"
                    }}>
                    <img className="home-sushi-picture img-fluid" src={item.imgUrl}/>
                      {/* <div className="col-contents-blur-effect">
                      </div> */}
                  </Col>
              </Row>  
            ) : (
              <Row key={idx} className="home-row">
                <Col xs={{span:12, order:2}} sm={{span:6, order:2}} className="col-contents-text">
                <p>{item.description}</p>
                </Col>
                
                  <Col xs={{span:12, order:1}} sm={{span:6, order:1}} 
                    className="col-contents-photo"
                    style={{
                      // backgroundImage:"url('/sushi/plate/sushi1.png')"
                    }}>
                    <img className="home-sushi-picture img-fluid" src={item.imgUrl}/>
                      {/* <div className="col-contents-blur-effect">
                      </div> */}
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
