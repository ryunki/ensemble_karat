import {Container, Row, Col} from 'react-bootstrap'
import "./About.css"
const About = () => {

  const aboutData ={
    main:"Ut sollicitudin elementum leo vitae finibus. Etiam sed lorem hendrerit, eleifend mi ut, fermentum augue. Duis ultrices lobortis viverra. Maecenas odio est, faucibus vitae lobortis non, accumsan auctor nisi. Duis rhoncus rutrum augue, a efficitur sem congue sit amet. Etiam eu ligula at justo rutrum congue. Fusce faucibus ante et hendrerit euismod. Sed commodo ullamcorper suscipit. Nam eu lectus sapien. Curabitur pellentesque nibh vel finibus suscipit.",
    data:
      [{
        imgUrl:"/chef.png",
        name:"Moshi Moshi",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sapien metus, volutpat vel nisi a, pharetra imperdiet augue. Sed ultrices sapien sit amet erat suscipit volutpat. Sed vestibulum sodales tellus, vitae rhoncus ex posuere ut. Cras vel lectus nec ligula vehicula egestas eget id lacus. Curabitur ac mi tincidunt, efficitur odio a, finibus arcu. Duis vitae urna placerat, accumsan ligula vitae, interdum neque. Nulla at augue tincidunt, facilisis tellus feugiat, eleifend nulla. Vivamus tincidunt tellus augue, id volutpat lorem tempor vitae. Nulla elementum at leo vitae semper. Integer ornare imperdiet nunc. Ut tempor ligula lacus, in aliquet dolor bibendum eleifend."
      },
      {
        imgUrl:"/chef.png",
        name:"moshi moshi",
        description:"Ut eu turpis urna. In lectus tortor, efficitur in laoreet in, aliquam ut neque. Donec eget viverra erat, auctor tincidunt elit. Donec maximus, elit vitae viverra tempor, risus purus suscipit metus, ac rutrum nunc felis eget purus. Quisque et dolor a turpis elementum condimentum in non tellus. Maecenas volutpat et orci eget sollicitudin. Praesent rhoncus luctus ultrices. Sed et pellentesque magna. In fermentum ligula vitae est luctus, id commodo metus aliquet."
      }]
  }

  return (
    <>
    <Row className="mt-5 mx-0" style={{marginTop:"14rem"}}>
      <h2 className="text-center">About Us </h2>
      <section className="text-center">
        <p>{aboutData.main}</p>
        </section>
    </Row>
    {aboutData.data.map((item,idx)=>(
      (1 === (idx+2) % 2) ? ( 
      <Row key={idx} 
        className="mt-5 mx-0 px-xs-0">
        <Col xs={{span:12,order:2}} sm={{span:6, order:1}} 
          className="px-4">
        <h2 className="text-center">{item.name}</h2>
          <p>{item.description}</p>
        </Col>
        <Col xs={{span:12,order:1}} sm={{span:6, order:2}} 
          className="px-0 px-md-5 pb-lg-5 align-self-center">
          <img className="about-chef" src={item.imgUrl}/>
        </Col>
      </Row>
      ) : (<Row key={idx} 
        className="mt-5 mx-0 px-xs-0">
      <Col xs={{span:12,order:2}} sm={{span:6, order:2}}
        className="px-4">
      <h2 className="text-center">{item.name}</h2>
        <p>{item.description}</p>
      </Col>
      <Col xs={{span:12,order:1}} sm={{span:6, order:1}} 
        className="px-0 px-md-5 pb-lg-5 align-self-center">
        <img className="about-chef" src={item.imgUrl}/>
      </Col>
    </Row>)
    ))}
      {/* <Row className="mt-5 mx-0">
        <Col xs={{span:12,order:2}} sm={{span:6, order:1}}className="px-4">
        <h2 className="text-center">Moshi Moshi</h2>
          <p></p>
        </Col>
        <Col xs={{span:12,order:1}} sm={{span:6, order:2}}className="px-0">
          <img className="about-chef" src="/chef.png"/>
        </Col>
      </Row>
      <Row className="mt-5 mx-0">
        <Col xs={{span:12,order:1}} sm={{span:6, order:1}}className="px-0">
          <img className="about-chef" src="/chef.png"/>
        </Col>
        <Col xs={{span:12,order:2}} sm={{span:6, order:2}}className="px-4">
        <h2 className="text-center">moshi moshi</h2>
        <p>Ut eu turpis urna. In lectus tortor, efficitur in laoreet in, aliquam ut neque. Donec eget viverra erat, auctor tincidunt elit. Donec maximus, elit vitae viverra tempor, risus purus suscipit metus, ac rutrum nunc felis eget purus. Quisque et dolor a turpis elementum condimentum in non tellus. Maecenas volutpat et orci eget sollicitudin. Praesent rhoncus luctus ultrices. Sed et pellentesque magna. In fermentum ligula vitae est luctus, id commodo metus aliquet.</p>
        </Col>
      </Row> */}
    </>
  )
}

export default About