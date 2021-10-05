import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { DISHES } from '../shared/DISHES';
import {PROMOTIONS} from "../shared/PROMOTIONS"
import {LEADERS} from "../shared/LEADERS"
import {COMMENTS} from "../shared/COMMENTS"
import DishDetailes from "./DishDetailes";
import Header from "./Header"
import Menu from "./menu"
import Contact from "./Contact";
import Home from "./HomeComponent"
import About from "./AboutUs";
import Footer from "./Footer"
import {Switch ,Route,Redirect} from "react-router-dom"


class Main extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      leaders: LEADERS,
      promotions: PROMOTIONS
    };
  }
  
  
  
  render(){
    const DishWithId = ({match}) => {
      return(
          <DishDetailes dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    };
    const HomePage= () =>{
      return(
        <Home 
        dish={this.state.dishes.filter((item) => item.featured)[0]}
        promotion={this.state.promotions.filter((item) => item.featured)[0]}
        leader={this.state.leaders.filter((item) => item.featured)[0]}
          />
      )
      }
      return (
        <div>
          <Header />
            <Switch>
              <Route path="/home" component={HomePage} />
              <Route exact path="/aboutus" component={()=><About leaders={this.state.leaders}/>} />
              <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
              <Route path="/menu/:dishId" component={DishWithId} />
              <Route exact path='/contactus' component={() => <Contact />} /> 
              <Redirect to="/home" />
            </Switch>
          <Footer />
        </div>
      );
    }
}

export default Main;
