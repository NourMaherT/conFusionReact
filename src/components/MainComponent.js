import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import DishDetailes from "./DishDetailes";
import Header from "./Header"
import Menu from "./menu"
import Contact from "./Contact";
import Home from "./HomeComponent"
import About from "./AboutUs";
import Footer from "./Footer"
import {Switch ,Route,Redirect, withRouter} from "react-router-dom"
import { connect } from 'react-redux';

const mapStateToProps=(state)=>{
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

class Main extends React.Component {

  constructor(props){
    super(props);

  }
  
  
  
  render(){
    const DishWithId = ({match}) => {
      return(
          <DishDetailes dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    };
    const HomePage= () =>{
      return(
        <Home 
        dish={this.props.dishes.filter((item) => item.featured)[0]}
        promotion={this.props.promotions.filter((item) => item.featured)[0]}
        leader={this.props.leaders.filter((item) => item.featured)[0]}
          />
      )
      }
      return (
        <div>
          <Header />
            <Switch>
              <Route path="/home" component={HomePage} />
              <Route exact path="/aboutus" component={()=><About leaders={this.props.leaders}/>} />
              <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
              <Route path="/menu/:dishId" component={DishWithId} />
              <Route exact path='/contactus' component={() => <Contact />} /> 
              <Redirect to="/home" />
            </Switch>
          <Footer />
        </div>
      );
    }
}

export default withRouter(connect(mapStateToProps)(Main));
