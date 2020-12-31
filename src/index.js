import React from "react"
import ReactDOM from "react-dom"

//component file
import ToDoContainer from "./components/TodoContainer"
import "./App.css"




//const element = <h1>Hello friends</h1>

//first arg is what to render second arg is where to render it -> index.html
ReactDOM.render(<ToDoContainer />, document.getElementById("root"))



//ReactDOM.render(element, document.getElementById("root"))
