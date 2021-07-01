import React from 'react'

export const Header = (props) =>{
	return (

		<div className="">
			<h5 style={rendomText}>{props.Heading}</h5>
			<h6 style={thanksText}>{props.subHeading}</h6>
		</div>

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