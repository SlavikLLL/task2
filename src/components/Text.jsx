import React from "react"

class Text extends React.Component{
    render(){
        const {text} = this.props;
        return(
            <p>{text}</p>
        )
    }
}

Text.defaultProps = {
    text:"Default Text"
}

export default Text