import React from "react"









const Header = () => { // same as function Header() { *code here* }
    
const headerStyle = {
    padding: "20px 0",
    lineHeight: "2em",
}

    return (

        <header style={headerStyle}>

            <h1 style={{ fontSize: "50px", marginBottom: "15px", float: "center"}}>
                React Todo App
            </h1>
            <p style ={{fontSize: "14px"}}>
                please add to-do item(s) through the input field
            </p>
            
        </header>
        
    )
}


//SAME THING
// function Header() {code here}
// const Header = () => {code here}










export default Header 