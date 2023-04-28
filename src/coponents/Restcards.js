import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Restcards.css'

function Restcards({restData}) {
  return (
    <>
    <Link to={`/view-cafe/${restData.id}`} style={{textDecoration:'none',color:'white'}}>
        <Card id='cal' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={restData.photograph} />
      <Card.Body>
        <Card.Title className='text-warning'>{restData.name}</Card.Title>
        <Card.Title><strong>Neighborhood:</strong>{restData.neighborhood}</Card.Title>
        <Card.Text>
          <p>
            <strong>Address :</strong> {restData.address}</p>
          <p>
          <strong>Cuisine Type :</strong> {restData.cuisine_type}</p>
        </Card.Text>
        
      </Card.Body>
    </Card>
    </Link>
    </>
  )
}

export default Restcards