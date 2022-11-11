import React from 'react'
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { Col,Row,ListGroup,Image } from 'react-bootstrap'

function RestaurantDetails() {

  const[data,setData] = useState([])
  const params = useParams()

  const fetchData = async ()=>{
    await fetch('/res.json').then((res)=>res.json())
    .then((data)=>setData(data.restaurants))
    console.log("DATA: ",data)
  }

useEffect(()=>{
fetchData()},[])


 const details = data.find((i)=>i.id == params.id)
 console.log("Details", details)
  return (
<>
(
  {details?(
    <Row>
    <Col md={3}>
      <Image className='img pt-4' src={details.photograph1} alt={details.name} style={{height: '500px' ,width:'500px'}} fluid/>
    </Col>
    <Col md={4}>
      <ListGroup>
        <ListGroup.Item>
        <h2>{details.name}</h2>
          <p>cuisine_type:{details.description}</p>
        </ListGroup.Item>
        <ListGroup.Item>
          <h2>{details.address}</h2>
          <p>cuisine_type:{details.cuisine_type}</p>
        </ListGroup.Item>
      </ListGroup>
      <ListGroup>
        <ListGroup.Item>
          <h4>Operating Hours</h4>
          <p>Monday:{details.operating_hours.Monday}</p>
          <p>Tuesday:{details.operating_hours.Tueday}</p>
          <p>Wenesday:{details.operating_hours.Wenesday}</p>
          <p>Thurday:{details.operating_hours.Thurday}</p>
          <p>Friday:{details.operating_hours.Friday}</p>
          <p>Saturday:{details.operating_hours.Saturday}</p>
          <p>Sunday:{details.operating_hours.Sunday}</p>

        </ListGroup.Item>
      </ListGroup>
    </Col>
    </Row>):'null'}
)
</>  )
}

export default RestaurantDetails