import React from "react"
import TodoItem from "./TodoItem"


class TodosList extends React.Component {



    render() {

        return (

            <div>

                {this.props.todos.map(todo => (        

                    //<li key = {todo.id}>{todo.title}</li>
                    <TodoItem 
                    key = {todo.id} 
                    todo = {todo} 
                    //handleChange funct. passed in from parent allowing access to this comp. child, TodoItem
                    handleChangeProps={this.props.handleChangeProps}
                    deleteTodoProps={this.props.deleteTodoProps}
                    addTodoProps={this.props.addTodoProps}
                    />
                    

                ))}

            </div>
       )
    }
}


//console.log(TodosList)
export default TodosList