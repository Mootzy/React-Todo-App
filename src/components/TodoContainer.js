import React from "react";
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import {v4 as uuidv4} from "uuid";



class ToDoContainer extends React.Component {

   


   
    state = {
        todos: [
            {
                id: uuidv4(),
                title: "Setup development environment",
                completed: true
            },
            {
                id: uuidv4(),
                title: "Develop website and add content",
                completed: false
            },
            {
                id: uuidv4(),
                title: "Deploy to live server",
                completed: false
            }
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

        this.setState({

            todos: [

                ...this.state.todos.filter(todo => {

                    return todo.id !== id;
                })
            ]
        })
        console.log("deleted", id)
    };
    
    //function to add items to todo list 
    addTodo = title => {

        const newTodo = {

            id: uuidv4(),
            title: title,
            completed: false

        };

        this.setState({

            todos: [...this.state.todos, newTodo]

        });

        //for debugging 
        console.log(title);
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