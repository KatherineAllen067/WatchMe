import React from 'react';
import './Header.scss';
import brainFlixLogo from '../../assets/images/Logo-brainflix.png';
import Avatar from '../Avatar/Avatar.js';
import UploadImage from '../../assets/icons/Icon-upload.svg';

class Header extends React.Component{
    render(){
        return( 
            <div className ="navBar">
                <NavBar />            
                <SearchBar/>
                <Upload />
            </div>
           )
    }  
}

const NavBar =() =>{
    return(
        <div className="navBar-logo">
            <img src={brainFlixLogo} alt="brainflix logo"/>
        </div> 
    )
}

const SearchBar = () =>{
    return(
        <form class="navBar-search" action="submit" method="post">
            <input class="navBar-search__text" name="search" for="search" type="text" placeholder="Search">
            </input>
        </form>
    )
}

// not sure how to place the avater inside this section yet as a component
const Upload =()=>{
    return(
    <div class="navBar-upload">
        <button className="navBar-upload__button"> <img src={UploadImage} alt="plus sign"/> UPLOAD</button>
        <Avatar />
    </div>
    )
}

export default Header;
// anywhere you'll be passing data down in a state from an outside source you will want a react Component
// props are like arguments that get passed to a **function**