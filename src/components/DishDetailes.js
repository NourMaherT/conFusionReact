import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, CardImg,CardImgOverlay,CardBody,CardTitle,CardText ,Breadcrumb, BreadcrumbItem,
    Button, Modal, ModalHeader, ModalBody, ModalFooter,Label,Row,Col} from 'reactstrap'
import { LocalForm, Control,Errors } from "react-redux-form";
import {Link} from "react-router-dom"

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

const ModalExample = (props) => {
    const {
        buttonLabel,
        className
    } = props;


    const [modal, setModal] = useState(false);
  
    const toggle = () => setModal(!modal);

    const submitHandler = (values) => alert("current state is: "+JSON.stringify(values))
  
    const closeBtn = <button className="close" onClick={toggle}>&times;</button>;
  
    return (
    <div>
      <Button outline color="secondary" onClick={toggle} >Add a comment</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} close={closeBtn}>Submit comment</ModalHeader>
        <ModalBody>
            <LocalForm onSubmit={(values)=>submitHandler(values)}>
                <Row className="form-group">
                    <Label for="rate" >Rate</Label>
                    <Col >
                        <Control.select model=".rate" name="rate"
                                className="form-control">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Control.select>
                    </Col>
                </Row>
                <Row className="form-group" >
                    <Label htmlFor="name">Name</Label>
                    <Col>
                        <Control.text
                            className="form-control"
                            model=".name"
                            name="name"
                            id="name"
                            placeholder=" Name"
                            validators={{
                                required:(val) => val && val.length
                            }}
                            />
                        <Errors 
                            className="text-danger"
                            model=".name"
                            show="touched"
                            messages={{
                                required:"Type something brat!"
                            }}
                            />
                    </Col>
                </Row>
                <Row className="form-group" >
                    <Label htmlFor="message">Your Comment</Label>
                    <Col>
                        <Control.textarea model=".message" id="message" name="message"
                            rows="6"
                            className="form-control"></Control.textarea>
                    </Col>
                </Row>
                <Row className="form-group">
                    <Col md={{size: 10}}>
                        <Button type="submit" color="primary" onClick={toggle}>Sunmit</Button>
                    </Col>
                </Row>

            </LocalForm>
        </ModalBody>
        <ModalFooter>
        </ModalFooter>
      </Modal>
    </div>
  );
  }



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
                    <ModalExample />
                </div>
            </div>
        </div>
    )
    
}

export default DishDetailes