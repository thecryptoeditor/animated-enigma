import React from 'react'

export const Header = (props) => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
			<div className="container">
		    	<a className="navbar-brand" href="/">TodoItem</a>
		    	<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
		      		<span className="navbar-toggler-icon"></span>
		    	</button>

		    	<div className="collapse navbar-collapse" id="navbarScroll">
		      		<ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
		        		<li className="nav-item">
		          			<a className="nav-link active" aria-current="page" href="/home">Home</a>
		        		</li>
		        		<li className="nav-item">
		          			<a className="nav-link active" aria-current="page" href="/about">About</a>
		        		</li>
		      		</ul>
				</div>
			</div>
		</nav>
	)
}

// Styling for header component
// trying to use same page styling in raect
// const rendomText = {
//  	padding: "10px 20px",
//  	textAlign: "center",
//  	color: "red",
//  	fontSize: "22px"
// }
// const thanksText = {
//  	textAlign: "center",
//  	color: "red",
//  	fontSize: "16px"
// }