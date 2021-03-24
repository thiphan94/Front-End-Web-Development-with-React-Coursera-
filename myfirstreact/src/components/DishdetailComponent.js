  
import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component{

    constructor(props) {
        super(props);
        
        this.state = {
            selectedDishDetail: this.props.dsdetail
        };
    }

    onDishSelect(dish) {
      this.setState({ selectedDish: dish});
    }
    //Implement a function named renderDish() that takes the dish as a parameter
    renderDish(dish) {

        if (dish != null) {
            return (
                <div className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle> {dish.name}</CardTitle>
                            <CardText> {dish.description} </CardText>
                        </CardBody>
                    </Card>
                </div>   
            );
        }
        else {
          return (<div></div>)
        }
    }

    //Implement a function named renderComments() that takes the comments array as a parameter
    renderComments(comments){
        if (comments != null) {
          const liste = comments.map(comment => {
            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'
                    }).format(new Date(comment.date))}
                    </p>
                </li>
            ) 
          })
          return(
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">{liste}</ul>
            </div>
          )
        }
        else {
          return (<div></div>)
        }
    }


    render() {
      const dish = this.props.dish
      
      if (dish != null){
        return (
          <div className='row'>
              {this.renderDish(dish)}
              {this.renderComments(dish.comments)}
          </div>
        )
      }
      else {
        return (<div></div>)
      }
      
    }

}

export default DishDetail;