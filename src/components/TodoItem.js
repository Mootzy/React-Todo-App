import React from "react"

//two ways to create the component... 

//1. Class Method 

// class TodoItem extends React.Component {
//     render() {
//         return (
//             <li>{this.props.todo.title}</li>
//         )
//     }
// }



// 2. function method 
//doesnt require render method 

//prefered to create react components only with functions && hooks

function TodoItem(props) {

    const completedStyle = {
        fontStyle: "italic",
        color: "#d35e0f",
        opacity: 0.4,
        textDecoration: "line-through",
    }

const { completed, id, title } = props.todo    
    return (

    <ul className="todo-item">

            <input 
            type="checkbox" 
            checked={completed} 
            //final child recieves access to change state in parent comp. TodoContainer
            onChange={()=>props.handleChangeProps(id)}
            />

            <button 
            onClick={()=> props.deleteTodoProps(id)}> 
                delete 
            </button>
            
            <span 

            //Ternary Operator, inline-if statment: 
            //(condition) ? (true return value) : (false return value)
            style={props.todo.completed ? completedStyle : null }>
               {props.todo.title}
            </span>
    </ul>)
        
    // return <ul><input type="checkbox" />{props.todo.title}</ul>
 }












export default TodoItem