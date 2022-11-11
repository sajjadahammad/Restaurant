import React from 'react'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Restaurant({item}) {
  return (
<Link to={`details/${item.id}`}>
<Card className='my-3 p-3 rounded' style={{ height: '800px'}} >
      <Card.Img variant="top" src={item.photograph1} style={{height: '255px'}}/>
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
            {item.description}
        </Card.Text>
        <Card.Text>
            {item.cuisine_type}
            </Card.Text>        
      </Card.Body>
    </Card>

</Link>
    )
}

export default Restaurant