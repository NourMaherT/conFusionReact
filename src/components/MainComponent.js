import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from "../index.css"
import DishDetailes from "./DishDetailes";
import Header from "./Header"
import Menu from "./menu"
import Contact from "./Contact";
import Home from "./HomeComponent"
import About from "./AboutUs";
import Footer from "./Footer"
import {Switch ,Route,Redirect, withRouter} from "react-router-dom"
import { connect } from 'react-redux';
import { postComment,postFeedback ,fetchComments,fetchDishes,fetchPromos,fetchLeaders} from "../redux/ActionCreators";
import { actions } from "react-redux-form";
import {TransitionGroup,CSSTransition} from "react-transition-group"


const mapStateToProps=(state)=>{
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

const mapDispatchToProps = (dispatch) => ({
  postComment:(dishId,rating,auther,comment) => dispatch(postComment(dishId,rating,auther,comment)),
  postFeedback :(firstname,lastname,telnum,email,agree,contactType,message) => dispatch(postFeedback(firstname,lastname,telnum,email,agree,contactType,message)),
  fetchDishes:()=>{dispatch(fetchDishes())},
  fetchComments:()=>{dispatch(fetchComments())},
  fetchPromos:()=>{dispatch(fetchPromos())},
  fetchLeaders:()=>{dispatch(fetchLeaders())},
  resetFeedbackForm:() =>{dispatch(actions.reset("feedback"))}
})

class Main extends React.Component {

  constructor(props){
    super(props);

  }
  
  componentDidMount(){
    this.props.fetchDishes()
    this.props.fetchComments()
    this.props.fetchPromos()
    this.props.fetchLeaders()
  }
  
  
  render(){
    const DishWithId = ({match}) => {
      return(
          <DishDetailes dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            isLoading={this.props.dishes.isLoading}
            errmess={this.props.dishes.errMess}
            comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} 
            commentsErrMess={this.props.comments.errMess}
            postComment={this.props.postComment}
            />
      );
    };
    const HomePage= () =>{
      return(
        <Home 
          dish={this.props.dishes.dishes.filter((item) => item.featured)[0]}
          dishesLoading={this.props.dishes.isLoading}
          errmess={this.props.dishes.errMess}
          promotion={this.props.promotions.promotions.filter((item) => item.featured)[0]}
          promosLoading={this.props.promotions.isLoading}
          promoserrmess={this.props.promotions.errMess}
          leader={this.props.leaders.leaders.filter((item) => item.featured)[0]}
          leadersLoading={this.props.leaders.isLoading}
          leaderserrmess={this.props.leaders.errMess}
          />
      )
      }
      const AboutUs=()=>{
        return(
          <About
          leaders={this.props.leaders.leaders}  
          isLoading={this.props.leaders.isLoading}
          errMess={this.props.leaders.errMess}
            />
        )
      }
      return (
        <div>
          <Header />
            <TransitionGroup>
                <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                    <Switch>
                      <Route path="/home" component={HomePage} />
                      <Route exact path="/aboutus" component={AboutUs} />
                      <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
                      <Route path="/menu/:dishId" component={DishWithId} />
                      <Route exact path='/contactus' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm}  postFeedback={this.props.postFeedback}  />}/>
                      <Redirect to="/home" />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
          <Footer />
        </div>
      );
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
