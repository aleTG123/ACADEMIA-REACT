import React from 'react';

class Button extends React.Component{

    constructor(props){
        super(props);
        this.state = {};
    }


    render(){
        return (
            <button className="ui primary button"
                    onClick={ () => this.props.func() }  >
                { this.props.texto }
            </button>
        );
    }
        

}

export default Button;