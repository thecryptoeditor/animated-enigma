import React from 'react'
import Icon from '../heart.png'

export const Footer = () => {
	return (
	  	<div className="text-center p-3" style={{ backgroundColor: "black",color: "white", bottom: "0" }}>
	    	Made with 
	    	<img style={heartModification} src={Icon} alt="hear-icon"/>
	    	in India - Jatin Agrawal
	  	</div>
	)
}	
const heartModification = {
	width: "20px",
	margin: "0px 6px",
}