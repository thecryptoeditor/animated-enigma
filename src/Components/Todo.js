import React from 'react'
import TodoItem from '../Components/TodoItem'

export default class Todo extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			heading: 'Default Heading'
		}
	}

	componentDidMount() {
		if(this.props.itemList.length === 0){
			this.setState({heading: 'Your list will be display here:'})
		}
		else {
			this.setState({heading: 'Todo list is here:'})
		}
	}

	render() {
		return (
			<div className="container">
				<div style={{marginTop: "40px"}}>
					<h5>{this.state.heading}</h5>
					<TodoItem itemList={this.props.itemList} key={this.props.itemList.title} onDelete={this.props.onDelete}/>
				</div>
			</div>
		);
	}
}
