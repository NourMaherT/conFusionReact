import React from "react"
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col , Row, FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom';

class Contact extends React.Component{

    constructor(props){
        super(props)
        this.state={
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message: '',
            touched:{
                firstname: false,
                lastname: false,
                telnum: false,
                email: false
            }
        }
        this.changeHandler=this.changeHandler.bind(this)
        this.submitHandler=this.submitHandler.bind(this)
        this.blurHandler=this.blurHandler.bind(this)
    }
    changeHandler(event){
        const {name ,checked ,type ,value}=event.target
        const valuee=type === "checkbox" ? checked : value
        this.setState({
            [name]:valuee
        })
    }
    submitHandler(event){
        alert("current state is: "+JSON.stringify(this.state))
        event.preventDefault()
    }
    blurHandler= (field) => (evt) => {
        this.setState({
            touched:{...this.state.touched , [field]: true}
        })
    }
    validate(firstname,lastname,telnum,email){
        const error={
            firstname: '',
            lastname: '',
            telnum: '',
            email: ''
        }
        if(this.state.touched.firstname && firstname.length < 3)
            error.firstname="Shut up and write a real name!"
            else if (this.state.touched.firstname && firstname.length > 10)
                    error.firstname="What are you a fucking viking!"
        
        if (this.state.touched.lastname && lastname.length < 3)
            error.lastname = 'Shut up and write a real name!';
            else if (this.state.touched.lastname && lastname.length > 10)
                error.lastname = 'What are you a fucking viking!';
        const reg=/^\d+$/;
        if (this.state.touched.telnum && !reg.test(telnum))
            error.telnum="Hey..Write a damn real number!" 
        if (this.state.touched.email && email.split("").filter((e) => e==="@").length !== 1) 
            error.email="Dump ass write a correct email!"
        return error
              
    }
    render(){
        const message=this.validate(this.state.firstname,this.state.lastname,this.state.telnum,this.state.email)
        return(
            <div className="container">
                 <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Contact Us</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                   <div className="col-12">
                      <h3>Send us your Feedback</h3>
                   </div>
                   <div className="col-12 col-md-9">
                       <form onSubmit={this.submitHandler}>
                           <FormGroup row >
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input
                                        type="text"
                                        name="firstname"
                                        id="firstname"
                                        value={this.state.firstname}
                                        valid={message.firstname===""}
                                        invalid={message.firstname !==""}
                                        onBlur={this.blurHandler("firstname")}
                                        placeholder="First Name"
                                        onChange={this.changeHandler}
                                        />
                                    <FormFeedback>{message.firstname}</FormFeedback>
                                </Col>
                           </FormGroup>
                           <FormGroup row>
                                <Label htmlFor="lasttname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input
                                        type="text"
                                        name="lastname"
                                        id="lastname"
                                        valid={message.lastname===""}
                                        invalid={message.lastname !==""}
                                        onBlur={this.blurHandler("lastname")}
                                        value={this.state.lastname}
                                        placeholder="Last Name"
                                        onChange={this.changeHandler}
                                        />
                                    <FormFeedback>{message.lastname}</FormFeedback>
                                </Col>
                           </FormGroup>
                           <FormGroup row>
                            <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Input type="tel" id="telnum" name="telnum"
                                        placeholder="Tel. number"
                                        value={this.state.telnum}
                                        valid={message.telnum===""}
                                        invalid={message.telnum !==""}
                                        onBlur={this.blurHandler("telnum")}
                                        onChange={this.changeHandler} />
                                    <FormFeedback>{message.telnum}</FormFeedback>   
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="email" id="email" name="email"
                                        placeholder="Email"
                                        valid={message.email===""}
                                        invalid={message.email !==""}
                                        onBlur={this.blurHandler("email")}
                                        value={this.state.email}
                                        onChange={this.changeHandler} />
                                    <FormFeedback>{message.email}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 6, offset: 2}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox"
                                                name="agree"
                                                checked={this.state.agree}
                                                onChange={this.changeHandler} /> {' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{size: 3, offset: 1}}>
                                    <Input type="select" name="contactType"
                                            value={this.state.contactType}
                                            onChange={this.changeHandler}>
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Input type="textarea" id="message" name="message"
                                        rows="12"
                                        value={this.state.message}
                                        onChange={this.changeHandler}></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </FormGroup>
                       </form>
                   </div>
                </div>
            </div>
        );

    }
}

export default Contact