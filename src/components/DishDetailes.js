import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, CardImg,CardImgOverlay,CardBody,CardTitle,CardText ,Breadcrumb, BreadcrumbItem} from 'reactstrap'
import {Link} from "react-router-dom"

function RenderDish({dish}){
    
    if (dish != null){
        return(
            <Card>
                <CardImg top src={dish.image} alt={dish.name}/>
                <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
                <CardBody>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }
    else
    return (<div></div>);
}
function DishDetailes (props){

    const comments=props.comments.map(comment => {
        return(
            <div>
                <p>{comment.author}</p>
                <p>{comment.date}</p>
                <p>{comment.comment}</p>
            </div>
        )
    })
    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>                
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} /> 
                </div>
                <div className="col-12 col-md-5 m-1">
                    {comments}
                </div>
            </div>
        </div>
    )
    
}

export default DishDetailes