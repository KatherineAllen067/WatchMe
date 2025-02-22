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

const Upload =()=>{
    return(
    <div class="navBar-upload">
        <button className="navBar-upload__button"> <img src={UploadImage} alt="plus sign"/> UPLOAD</button>
        <Avatar />
    </div>
    )
}

export default Header;