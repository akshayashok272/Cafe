import {React,useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import './Restcards.css'
import Review from './Review';
import OperatingTime from './OperatingTime';




function RestView() {
var[Allcafes,setCafes]=useState([])

const fetchRest=async()=>{
  const result=await fetch('/cafes.json')
  result.json().then(data=>{
    setCafes(data.cafes)
  }
  )
}

const params=useParams()
// console.log(params.id);
// console.log(Allcafes);

const cafe=Allcafes.find(item=>item.id==params.id)
console.log(cafe);

useEffect(()=>
{
    fetchRest()
  },[])

  return (
    <>
    {
      cafe?(
    <Row className='p-5'>
        <Col id='cal' lg={6} md={6} sm={12} className='text-center p-5'>
          <img className='rounded border border-warning' src={cafe.photograph} style={{height:'600px'}}/>
        
        </Col>
        <Col id='cal'lg={6} md={6} sm={12} className='text-center p-5'>
          
        <ListGroup >
      <ListGroup.Item><h2  className='text-success'>{cafe.name}</h2></ListGroup.Item>
      <ListGroup.Item>Neighborhood:<strong>{cafe.neighborhood}</strong></ListGroup.Item>
      <ListGroup.Item>Address:<strong>{cafe.address}</strong></ListGroup.Item>
      <ListGroup.Item>Cuisine_Type:<strong>{cafe.cuisine_type}</strong></ListGroup.Item>
      <ListGroup.Item> 
         <div className='mt-4'>
         <OperatingTime timeData={cafe.operating_hours}/> 
         </div >
         <div className='p-5  '>
          <Review reviewData={cafe.reviews}/></div>
      </ListGroup.Item>

    </ListGroup>
        
        </Col>
      </Row>):""
}
      </>
      
  )
}

export default RestView