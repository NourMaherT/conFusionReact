import React from 'react';
import DishDetailes from './DishDetailes';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, CardImg,CardImgOverlay,CardBody,CardTitle,CardText, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';
import {Loading} from "./Loading"
import {baseUrl} from "../shared/baseUrl"




function Menu (props){
  
    const menu=props.dishes.dishes.map(dish =>{
        return (
          <div className="col-12 col-md-5 mt-1">
              <Card>
                <Link to={`/menu/${dish.id}`} >
                  <CardImg width="100%" src={baseUrl+dish.image} alt={dish.name} />
                  <CardTitle>{dish.name}</CardTitle>
                </Link>
            </Card>
          </div>
        );
    });
    if(props.dishes.isLoading){
      return(
          <div className="container">
              <div className="row">
                  <Loading />
              </div>
          </div>
      )
    }
    else if(props.dishes.errmess){
        return(
            <div className="container">
                <div className="row">
                    <h4>{props.dishes.errmess}</h4>
                </div>
            </div>
        )
    }
    else
      return (
          <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Menu</h3>
                    <hr />
                </div>                
            </div>
            <div className="row">
                  {menu}
            </div>
          </div>
        );
    
}
export default Menu;



