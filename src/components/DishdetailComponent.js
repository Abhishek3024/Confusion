import React, { Component } from 'react';
import {Card, CardTitle,CardBody, CardText, CardImg } from 'reactstrap';

class Dishdetail extends Component{
	constructor(props){
		super(props);
}
	
	renderDish(dish){
    	if (this.props.dish != null){
    		return(
    			<Card>
    				<CardImg width="100%" src={dish.image} alt={dish.name} />
    				<CardBody>
    			    	<CardTitle>{dish.name}</CardTitle>	
    			    	<CardText>{dish.description}</CardText>
    				</CardBody>
    			</Card>
    		);
    	}else{
    		return(
    			<div></div>
    		);
    	}
    }
    renderComments(dish){
    	if (dish != null){
    		let options = { year: 'numeric', month: 'short', day: 'numeric' };
    		const dishComments = dish.comments.map((comment,index) =>{
    			return(
    					<div>
    					<p>{comment.comment}</p>
    					<p>-- {comment.author},<span>{new Date(comment.date).toLocaleDateString("en-US", options)}</span></p>
    					</div>
    				);
    		});
    		return(
    			<div>
    				<h4>Comment</h4>
    				{dishComments}
    			</div>
    		);
    	} else{
    		return(<div></div>);
    	}

    }
    render() {
    	return(
    		<div className="row">
    			<div className="col-12 col-md-5 m-1">
    				{this.renderDish(this.props.dish)}
    			</div>
    			<div className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.dish)}
                </div>
    		</div>
    	);

    };
}

export default Dishdetail;