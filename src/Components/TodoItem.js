import React, { Component } from 'react';

export default class TodoItem extends Component {

	constructor(props) {
		super(props)
		this.removeButtonClick = this.removeButtonClick.bind(this)
		this.state = {
			element: 'Remove',
		}
	}

	removeButtonClick(length) {
		if(length === 1) {
			alert("Ah! good all task is finish now.")
		}
	}

	render(){ 
		return (
			<div className="container" style={{ marginBottom: "56px" }}>
				{this.props.itemList.map((item) => {
					return <div key={item.title}>
						<div style={{padding: "20px 0px", borderBottom: "1px solid #E1DEDE"}}>
							<h6 style={mp_0}>{item.title}</h6>
							<p style={mp_1}>{item.task}</p>
							<button style={deleteButton} onClick={ () => {this.props.onDelete(item);this.removeButtonClick(this.props.itemList.length)}}>{this.state.element}</button>
						</div>
					</div>
				})}
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
	backgroundColor: '#fff', 
	color: '#000', 
	border:'1px solid black',
	borderRadius: '4px'
}

const mp_0 = {
	margin: 0,
	padding: 0
}

const mp_1 = {
	margin: 0,
	padding: "6px 0px"
}


// export default TodoItem;
