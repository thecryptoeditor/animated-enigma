import React, { Component } from 'react';

export default class TodoItem extends Component {

	constructor(props) {
		super(props)
		// this.deleteFunction = this.deleteFunction.bind(this);
		// this.onDelete = this.onDelete.bind(this);

		this.state = {
			element: 'Delete it!',
		}
	}

	// onDelete(newProps) {
	// 	this.props.parentCallback("newProps");
	// }

	// deleteFunction() {		
	// 	console.log("delete")
	// }
	render(){ 
		return (
			<div style={{margin: "auto", width: "40%"}}>
			{this.props.itemList.length === 0 ? "What's wrong with you man!" : 
				this.props.itemList.map((item) => {
					return <div key={item.title} style={{ margin: "10px 0px", border:'1px solid black'}}>
						<div style={{textAlign: 'center'}}>
							<h6 style={mp_0}>{item.title}</h6>
							<p style={mp_0}>{item.task}</p>
							<button style={deleteButton} onClick={ () => {this.props.onDelete(item)}}>{this.state.element}</button>
							{/*<button style={deleteButton} onClick={() => {this.onDelete(this.props)}}>{this.state.element}</button>*/}
						</div>
					</div>
				})

			}
			</div>
		);
	}
} 

// this is a just sample code for how to pass default props in react js
// We can't use this code in any conditon.

TodoItem.defaultProps = {
	title: "This is not working."
}

const deleteButton = {
	backgroundColor: '#b8657b', 
	color: '#fff', 
	border:'1px solid black',
	borderRadius: '4px'
}

const mp_0 = {
	margin: 0,
	padding: 0
}

// export default TodoItem;
