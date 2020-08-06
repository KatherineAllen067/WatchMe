import React from 'react';
import './Header.scss';
import brainFlixLogo from '../../assets/images/Logo-brainflix.png';
import searchGlass from '../../assets/icons/Icon-search.svg';
// not sure how to get the search glass in the input yet


const Header =()=>{
    return( 
        <div className ="navBar">
            <NavBar />            
            <SearchBar/>
            <Upload />
        </div>
       )
}

const NavBar =() =>{
    return(
        <div className="navBar-logo">
            <img src={brainFlixLogo}/>
        </div> 
    )
}

const SearchBar = () =>{
    return(
        <form class="navBar-search" action="submit" method="">
            <input class="navBar-search__text" name="search" for="search" type="text" placeholder="Search">
            {/* src={searchGlass} */}
            </input>
        </form>
    )
}

const Upload =()=>{
    return(
    <div class="navBar-upload">
        <button className="navBar-upload__button"> + UPLOAD</button>
        <div className="navBar-upload__avatar">
        </div>
    </div>
    )
}

export default Header;
// anywhere you'll be passing data down in a state from an outside source you will want a react Component
// props are like arguments that get passed to a **function**