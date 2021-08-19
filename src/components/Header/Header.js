import React from 'react';
import './Header.css';


function Header() {
  return (
    <div>
        <nav className="navbar">
            <div class="nav-wrapper">
                <a href="#" class="brand-logo">
                    <img src="logo.png" />
                </a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">     
                    <li><a href="#">Destinations</a></li>
                    <li><a href="#">Hotels</a></li>
                    <li><a href="#">Flights</a></li>
                    <li><a href="#">Booking</a></li>
                    <li><a href="#">Login</a></li>
                    <li><a href="#" class="btn white">Sign Up</a></li>
                    <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">EN<i class="material-icons right">arrow_drop_downn</i></a></li>
                </ul>
            </div>    
        </nav>
        <div class="banner">
            <div class="text-content">
                <h6>BEST DESTINATIONS AROUND THE WORLD</h6>
                <h1>Travel, enjoy <br/> and live a new <br/> and full life</h1>
                <p>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
                <div class="buttons">
                    <a class="waves-effect waves-light btn orange">Find out more</a>
                    <a class="btn-floating btn-sm waves-effect waves-light red"><i class="material-icons">play_arrow</i></a><p>Play Demo</p>
                </div>
            </div>
            <img alt="banner" src="banner.png" />
        </div>
    </div>
  )
}

export default Header;