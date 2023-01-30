
import { useEffect, useState, useRef, useMemo, useCallback } from 'react';
import {Carousel} from 'react-bootstrap';

import './Carousel.css'
const imgUrl = [
  "team_2.png",
  "team_1.png",
  "ensemble_1.png",
  "ensemble_2.png",
]
function CarouselFade() {
  const [y, setY] = useState(0);

  function handleScroll() {
    setY(window.scrollY) //negative: makes image move slower upwards
    console.log(-window.scrollY)
  }
  function handleTextOverlay() {
    const title1 = document.querySelectorAll('.car-text-overlay.title-1')
    const title2 = document.querySelectorAll('.car-text-overlay.title-2')
    title1.forEach(el=>{
      el.classList.toggle('show')
    })
    title2.forEach(el=>{
      el.classList.toggle('show')
    })
  }
  
  useEffect(()=>{
    handleTextOverlay()
   window.addEventListener("scroll", handleScroll)
    return ()=>{
      window.removeEventListener("scroll", handleScroll)
    }
 },[])

  return (
    <>
    {/* <div>
      <img src="team_1.png"/>
    </div> */}
    {/* <video width="320" height="240" controls>
      <source src="/videos/sample_1.mp4"></source>
    </video> */}

    {/* <Carousel fade interval={1000} >
      {imgUrl.map((item, idx)=>(
        <Carousel.Item key={idx} style={{display:"flex", justifyContent: "center"}} >
          <img src={item}
            className="bg-picture"
          />
          <div
            className="bg-picture"
            style={{backgroundImage: `url(${item})`, backgroundPositionY:y/100+"vw"}}
          />
          <Carousel.Caption className="title-overlay-wrapper">
            <h1 className="car-text-overlay title-1">Tokyoya</h1>
            <p className="car-text-overlay title-2">sushi & bulgogi</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel> */}
    </>
  );
}

export default CarouselFade;

