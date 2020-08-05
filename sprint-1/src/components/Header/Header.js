import React from "react";

class NavBar extends React.Component{
    render(){
       return( 
        <div className="navBar">
            <img src=""/>
            <SearchBar/>
            <button>UPLOAD</button>
            <image/>
        </div>
       );
    }
}

class SearchBar extends React.Component{
    render(){
        <form>
            <input type="text" placeholder="Search">
            </input>
        </form>
    }
}

ReactDOM.render(<NavBar/>,
    document.getElementById('app'))

export default Headers;