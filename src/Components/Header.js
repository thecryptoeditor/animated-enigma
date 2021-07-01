import React from 'react'

export const Header = (props) =>{
	return (
		<nav class="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
		  	<div class="container-fluid">
		    	<a class="navbar-brand" href="/">TodoItem</a>
		    	<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
		      		<span class="navbar-toggler-icon"></span>
		    	</button>

		    	<div class="collapse navbar-collapse" id="navbarScroll">
		      		<ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
		        		<li class="nav-item">
		          			<a class="nav-link active" aria-current="page" href="/home">Home</a>
		        		</li>
		        		<li class="nav-item">
		          			<a class="nav-link active" aria-current="page" href="/about">About</a>
		        		</li>
		      		</ul>
				</div>
			</div>
		</nav>
	)
}

// Styling for header component
// trying to use same page styling in raect
const rendomText = {
 	padding: "10px 20px",
 	textAlign: "center",
 	color: "red",
 	fontSize: "22px"
}
const thanksText = {
 	textAlign: "center",
 	color: "red",
 	fontSize: "16px"
}