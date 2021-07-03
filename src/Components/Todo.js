import React from 'react'
import TodoItem from '../Components/TodoItem'

export default class Todo extends React.Component {





	render() {
		return (
			<div className="container">
				<div style={{marginTop: "40px"}}>
					<h5>{this.props.todoHeading}</h5>
					<TodoItem itemList={this.props.itemList} key={this.props.itemList.title} onDelete={this.props.onDelete}/>
				</div>
			</div>
		);
	}
}
