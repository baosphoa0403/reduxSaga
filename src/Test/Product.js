import React from "react";
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';
export default function Product(props) {
  let { item, add } = props;
  // console.log(item);
  const [flag , setFlag] = React.useState(false);
  return (
     <div className="card col-3">
       <img className="card-img-top" src={item.img} alt="" onClick={()=>{setFlag(!flag)}}/>
        {flag ? <div className="card-body">
         <h4 className="card-title">{item.name}</h4>
         <p className="card-text">{item.description}</p>
         <button type="button" class="btn btn-primary" onClick={()=>{
           add(item)
         }}>add product</button>
       </div> : ""}
     </div>
  );
}
