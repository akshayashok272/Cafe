import  {React ,useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import './Restcards.css'

function Review({reviewData}) {
    const [open, setOpen] = useState(false);
  return (
    <div>
           <Button id='cal'
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        
      >
        Reviews
      </Button>
      <div className='p-5 ' style={{ minHeight: '150px' }}>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text" >

{
           reviewData.map(item=>(   
            <Card body style={{ width: '400px' }}>
             <h6>{item.name}{item.date}</h6>
             <p>Rating{item.rating}</p>
             <p>Comments{item.comments}</p>

            </Card>
           ))
}

          </div>
        </Collapse>
      </div>
    </div>
  )
}

export default Review