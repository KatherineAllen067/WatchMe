import React from 'react';
import './Header.scss';
import brainFlixLogo from '../../assets/images/Logo-brainflix.png';
import Avatar from '../Avatar/Avatar.js';
import UploadImage from '../../assets/icons/Icon-upload.svg';
import { Link } from 'react-router-dom';

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
            <Link to="/">Watch Me</Link>
        </div> 
    )
}

const SearchBar = () =>{
    return(
        <form className="navBar-search" action="submit" method="post">
            <input className="navBar-search__text" name="search"type="text" placeholder="Search">
            </input>
        </form>
    )
}

const Upload =()=>{
    return(
    <div className="navBar-upload">
        <Link to="/uploads"><button className="navBar-upload__button"> <img src={UploadImage} alt="plus sign"/> UPLOAD</button></Link>
        <Avatar />
    </div>
    )
}

export default Header;