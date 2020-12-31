import React, {Component} from "react"





class InputTodo extends Component {
    


    state = {

        title: " "
        //username: " "
        //email: " "
        //password: " "
    

    };



    onChange = e => {

        this.setState({

           [e.target.name]: e.target.value,

        });

    };


    handleSubmit = e => {

        e.preventDefault();
       //console.log(this.state.title);
        this.props.addTodoProps(this.state.title);
        this.setState({
            title: ""
        });
    }

    render(){

        return(

            <form onSubmit={this.handleSubmit} className="form-container">

                <input 
                type="text" 
                placeholder="Add an Item..." 
                value={this.state.title} 
                onChange={this.onChange}
                name="title"
                className= "input-text"
                />

                <input 
                type = "submit" 
                value="Submit" 
                className="input-submit"
                />

            </form>
        )
    }
}

export default InputTodo


// Since we will be getting data through the user’s interaction 
//(i.e through the input field), this component will, therefore, hold state.
// For that reason, it will be a class-based component.

//Don’t forget, it can be a functional component if we use React Hooks. 
//Coming to that later in the series.