import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer class="page-footer white">
        <div class="container">
            <div class="row">
                <div class="col">
                    <h5 class="black-text">Jadoo</h5>
                    <p class="text-lighten-4">Book your trip in minute, get full Control for much longer.</p>
                </div>
                <div class="col">
                    <h5 class="black-text">Company</h5>
                    <ul>
                        <li><a class="text-lighten-3" href="#!">About</a></li>
                        <li><a class="text-lighten-3" href="#!">Careers</a></li>
                        <li><a class="text-lighten-3" href="#!">Moblie</a></li>
                    </ul>
                    </div>
                <div class="col">
                    <h5 class="black-text">Contact</h5>
                    <ul>
                        <li><a class="text-lighten-3" href="#!">Help/FAQ</a></li>
                        <li><a class="text-lighten-3" href="#!">Press</a></li>
                        <li><a class="text-lighten-3" href="#!">Affilates</a></li>
                    </ul>
                </div>
                <div class="col">
                    <h5 class="black-text">More</h5>
                    <ul>
                        <li><a class="text-lighten-3" href="#!">Airlinefees</a></li>
                        <li><a class="text-lighten-3" href="#!">Airline</a></li>
                        <li><a class="text-lighten-3" href="#!">Low fare tips</a></li>
                    </ul>
                </div>
                <div class="col">
                    <div class="social">
                        <a class="btn-floating btn-sm waves-effect waves-light"><i class="fa fa-facebook"/></a>
                        <a class="btn-floating btn-sm waves-effect waves-light"><i class="fa fa-instagram"/></a>
                        <a class="btn-floating btn-sm waves-effect waves-light"><i class="fa fa-twitter"/></a>
                    </div>
                    <h5>Discover our app</h5>
                        <a href="#"><img src="ggplay.png"/></a>
                        <a href="#"><img src="ios.png"/></a>
                </div>
            </div>
            <div class="copyright center">
                <a class="text-lighten-4" href="#!">All rights reserved@jadoo.com</a>
            </div>
        </div>
    
    </footer>
  );
}

export default Footer;