import React from "react"

class Title extends React.Component{
    render(){
        const {title} = this.props;
        return (
            <h2>{title}</h2>
        )
    }
}
Title.defaultProps = {
    title:"Deafult title"
}

export default Title