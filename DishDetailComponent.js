import React, { Component } from 'react';
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, CardSubtitle
} from 'reactstrap';

const  DishDetail = (props) => {
 
    let { image, name, description, comments, designation } = props.dish != null ?  props.dish  : [];

    return (

     name  &&

     <div className="row "> 
         <div className="col align-scol-12 col-md-5 m-1">
        <Card>
            <CardImg src={image} alt={name} />
            <CardBody>
            <CardTitle>{name}</CardTitle>
            {designation && <CardSubtitle>{designation}</CardSubtitle>}
            <CardText>{description}</CardText>
            </CardBody>
        </Card>
        </div>
                {
                    comments &&
                    <div className="col align-self-center">
                     <h4>Comments</h4>
                        <ul className="list-unstyled">
                             {
                                 comments.map( ({id, comment, author, date}) => {
                                 return (
                                  <li key={id}>
                                     <p>{comment}</p>
                                     <p>--{author} , 
                                     {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(date)))}</p>
                                  </li>
                                 );
                                })
                              }
                       </ul>
                     </div>
                }

        </div> 
    );    
}

export default DishDetail;
