import React from 'react'
import TodoItem from '../Components/TodoItem'

export default class Todo extends React.Component {
// export const Todo = ({todoHeading, itemList, onDelete}) =>{

	// constructor(props) {
	// 	super(props)
	// }

	// callbackFunction = (childData) => {
	//    console.log(childData)
	// }


	render() {
		return (
			<div style={{textAlign: "center", marginTop: "20px"}}>
				{this.props.todoHeading}
				 { /* <TodoItem list={this.props.itemList} parentCallback={this.callbackFunction}/> */}
				 <TodoItem itemList={this.props.itemList} key={this.props.itemList.title} onDelete={this.props.onDelete}/>
			</div>
		);
	}
}
