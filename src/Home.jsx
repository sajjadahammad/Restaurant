import React from 'react'
import {useState,useEffect} from 'react'
import {Row,Col} from 'react-bootstrap'
import Restaurant from './Restaurant'


function Home() {

    const[hotel,setHotel] = useState([])

    const testData = async () =>{
        await fetch('/res.json')
        .then((res)=>res.json())
        .then((data)=>setHotel(data.restaurants))
    }
    
    useEffect(()=>{
        testData()
    },[])

    console.log("data: ",hotel)

  return (
    <Row >
      {hotel.map((item)=>(
        <Col sm={12} md={8} xl={3} key={item.id}>
          <Restaurant item={item}/>
        </Col>
      ))}

    </Row>
  )
}

export default Home