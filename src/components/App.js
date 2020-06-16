import React from 'react';
import Comment from './Comment';
import faker from 'faker'
import Button from './Button';

class App extends React.Component{

    constructor(){
        super();
        this.state= {
            comments: []
        };

    }

    addComment(){
        let comment = {
            id: faker.random.uuid(),
            nombre: faker.name.firstName(),
            avatar: faker.image.avatar(),
            date: new Date().toLocaleDateString(),
            comment: faker.lorem.paragraph(),
        }

        this.setState({
            comments: [...this.state.comments, comment ]
        });

    }

    componentDidUpdate(prevProps, prevState) {
        //console.log(prevState);

        //console.log(this.state);
    }





    render(){
        return(
          <div> 
                
                {
                    this.state.comments.map( comment => {
                        console.log(comment);
                        return <Comment key={ comment.id }
                                        objComment= {comment} />
                        
                    })
                }

       {/*          <button className="ui primary button"   
                        func={ this.addComment }>
                    Comentar
                </button> */}

                <Button func={ () => this.addComment() }
                        texto="Comentar" />
                <Button func= { () => this.addComment() }
                        texto="Borrar"/>
          </div>          
        );
    }

}

export default App;

