import React, { useState } from 'react'

export const Addtodo = ({Addtodovalue}) => {
	const [newTitle, setTitle] = useState("");
	const [task, setTask] = useState("");

	const formSubmit = (evt) => {
		evt.preventDefault();
		Addtodovalue(newTitle, task);

		setTitle("");
		setTask("");
	}
	return(
		<div className="container">
			<div style={{marginTop: "40px"}}>
				<form onSubmit={formSubmit}>
				<h5>Please add your event in task list: </h5>
				  	<div className="mb-3">
				    	<label htmlFor="title" className="form-label">Title</label>
				    	<input type="text" value={newTitle} onChange={(evt) => setTitle(evt.target.value)} className="form-control" id="title" aria-describedby="emailhelp" />
				  	</div>
				  	<div className="mb-3">
				    	<label htmlFor="task" className="form-label">task</label>
				    	<input type="text" value={task} onChange={(evt) => setTask(evt.target.value)} className="form-control" id="task" aria-describedby="emailhelpetc" />
				  	</div>
				  	<button type="submit" className="btn btn-primary">Add Task</button>
				</form>
			</div>
		</div>
	);
}
