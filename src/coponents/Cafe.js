import {React,useState,useEffect} from 'react'
import Restcards from './Restcards'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Cafe() {

    //sate-for stor data in api call
    var[cafelist,setCafe]=useState([])

    //function to call api
    //single with empty bracket ()  arguments are not there
     // async use in before bracket
     // await use before fetch

    const fetchData=async()=>{
     const  result=await fetch('/cafes.json')
     result.json().then(

        data=>{
            setCafe(data.cafes)
        }
     )                                        //fetch the data ,store in result, convert json into js  ,then-is used to acess again, 
       
    }

useEffect(()=>{
    fetchData()
},[])                       //useEffect is use to call function ,  [] is used to avoid repetation

  return (
    <Row>
       {
        cafelist.map(item=>(
       <Col className='p-5' lg={4} md={6}>                           
           <Restcards restData={item}></Restcards>
           </Col>
        ))

        }
    </Row>
  )
}

export default Cafe