import React from 'react'


export default class Comment extends React.Component{

    constructor( {objComment} ){
        super();
        
        console.log(objComment);

        //const { id, nombre, avatar, date, comment } = objComment;
        
        this.state = {
            nombre: objComment.nombre,
            avatar: objComment.avatar,
            date: objComment.date,
            comment: objComment.comment
/*             nombre: nombre,
            avatar: avatar,
            date: date,
            comment: comment */
        }
        
        
    }

    render(){
        return(
            <div className="ui comments">
                <div className="comment">
                    <a className="avatar" href="/">
                        <img src={ this.state.avatar } alt=""/>
                    </a>
                    <div className="content">
                        <a className="author" href="/">{ this.state.nombre }</a>
                        <div className="metadata">
                            <div className="date">{ this.state.date }</div>
                        </div>
                        <div className="text">
                            { this.state.comment }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    

}