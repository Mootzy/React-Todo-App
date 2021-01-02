import React from "react";
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import {v4 as uuidv4} from "uuid";
import axios from "axios";



class ToDoContainer extends React.Component {

   


   
    state = {
        todos: [
        ]
    };




    //handle change created in parent container/component 
    //pass in the todos:id as a parameter, return it with handleChange
    handleChange = (id) => {

        this.setState(prevState => ({

            todos: prevState.todos.map((todo) => {

                if (todo.id === id){

                    todo.completed = !todo.completed;
                }

                return todo;
            })

        }))

        console.log("clicked", id)
    }

    //function to delete items from todo List
    delTodo = (id) => {

        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(response => this.setState ({
            todos: [
                ...this.state.todos.filter(todo => {
                    return todo.id !== id
                })
            ]
        }))





        // this.setState({

        //     todos: [

        //         ...this.state.todos.filter(todo => {

        //             return todo.id !== id;
        //         })
        //     ]
        // })
        // console.log("deleted", id)
    };
    
    //function to add items to todo list 
    addTodo = title => {

        axios.post("https://jsonplaceholder.typicode.com/todos", {
            title: title,
            completed: false,
            })
        .then(response => this.setState({todos: [...this.state.todos, response.data]}))

      
    }

    componentDidMount() {

        axios.get("https://jsonplaceholder.typicode.com/todos?_limit=3")
        
        .then(response => this.setState({ todos: response.data}))
    }
 

    render() {

        return (
          
          /*  <div>
               {this.state.todos.map(todo =>(
                    <li>{todo.title}</li>
                ))}
                
            </div> */



                //handle change is passed down to the child comp. TodosList
            <div className="container">
                <Header />
                <InputTodo addTodoProps={this.addTodo} />
                <TodosList 
                todos={this.state.todos} 
                handleChangeProps ={this.handleChange} 
                deleteTodoProps={this.delTodo} 
                //addTodoProps={this.addTodo}
                />

            </div>

            
        )
    }
}

export default ToDoContainer