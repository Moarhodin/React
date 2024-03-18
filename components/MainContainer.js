import React from "react";

class MainContainier extends React.Component{
	render(){
		return(
			<div className="main-container">
				{this.props.children}
			</div>
		)
	}
}
export default MainContainier;