import React, { useState } from 'react'

export const Addtodo = ({addTodo}) => {
	const [newTitle, setTitle] = useState("");
	const [task, setTask] = useState("");

	const formSubmit = (evt) => {
		evt.preventDefault();
		addTodo(newTitle, task);

		setTitle("");
		setTask("");
	}
	return(
		<div style={{maxWidth: "40%", margin: "auto"}}>
			<form onSubmit={formSubmit}>
			<h5>Please add your task: </h5>
			  	<div className="mb-3">
			    	<label htmlFor="title" className="form-label">Title</label>
			    	<input type="text" value={newTitle} onChange={(evt) => setTitle(evt.target.value)} className="form-control" id="title" aria-describedby="emailhelp" />
			  	</div>
			  	<div className="mb-3">
			    	<label htmlFor="task" className="form-label">task</label>
			    	<input type="text" value={task} onChange={(evt) => setTask(evt.target.value)} className="form-control" id="task" aria-describedby="emailhelpetc" />
			  	</div>
			  	<button type="submit" className="btn btn-primary">Add Todo</button>
			</form>
		</div>
	);
}
