import { useState } from 'react';
import './App.css';
import Category from './components/Category/Category';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Destinations from './components/Destinations/Destinations';

function App() {

  const [category, setCategory] = useState([
    {
    img: 'category1.png',
    title: 'Calculated Weather',
    content: 'Built Wicket longer admire do barton vanity itself do in it.'
    },
    {
      img: 'category2.png',
      title: 'Best Flights',
      content: 'Engrossed listening. Park gate sell they west hard for the.'
    },
    {
      img: 'category3.png',
      title: 'Local Events',
      content: 'Barton vanity itself do in it. Preferd to men it engrossed listening.'
    },
    {
      img: 'category4.png',
      title: 'Customization',
      content: 'We deliver outsourced aviation services for military customers.'
    }
  ]);

  const [destinations, setDestinations] = useState([
    {
      img: 'destination1.png',
      name:'Rome, Italy',
      price: '$5,42k',
      days: '10 Days Trip'
    },
    {
      img: 'destination2.png',
      name:'London, UK',
      price: '$4,2k',
      days: '12 Days Trip'
    },
    {
      img: 'destination3.png',
      name:'Full Europe',
      price: '$15k',
      days: '28 Days Trip'
    }
  ])

  const patreons_list = ['patreon1.png','patreon2.png','patreon3.png','patreon4.png','patreon5.png'];

  return (
    <div className="App">

      <Header />

      <Category cate={category}/>
      
      <Destinations des={destinations}/>

      <div className="row-trip">
        <div class="title-trip">
          <h6>Easy and Fast</h6>
          <h3>Book Your Next Trip in 3 Easy Steps</h3>
          <ul className="collections">
          <a href="#"><li className="item">
              <img src="tripitem1.png"/>
              <div className="content">
                <span className="title">Choose Destination</span>
                <p>Lorem ipsum dolor sit amet, consectetur
                   adipiscing elit. Urna, tortor tempus.</p>
              </div>
            </li></a>
            <a href="#"><li className="item">
              <img src="tripitem2.png"/>
              <div className="content">
                <span className="title">Make Payment</span>
                <p>Lorem ipsum dolor sit amet, consectetur
                   adipiscing elit. Urna, tortor tempus.</p>
              </div>
            </li></a>
            <a href="#"><li className="item">
              <img src="tripitem3.png"/>
              <div className="content">
                <span className="title">Reach Airport on Selected Date</span>
                <p>Lorem ipsum dolor sit amet, consectetur
                   adipiscing elit. Urna, tortor tempus.</p>
              </div>
            </li></a>
          </ul>
        </div>
        <a href="#"><img className="trip-thumbnail" src="booktrip.png"></img></a>
      </div>

      <div className="row-test">
        <div class="title-test">
          <h6>TESTIMONIALS</h6>
          <h3>What People Say <br/> about Us.</h3>
        </div>
        <a href="#"><img src="comment.png"></img></a>
      </div>
      
      <div className="patreons">
        {patreons_list.map((e) => (
          <a href="#"><img src={e}/></a>
        ))}
      </div>

      <div className="row-es">
        <div className="es">
          <h4>Subscribe to get information, latest news and other <br/> interesting offers about Cobham</h4>
          <div className="email-sub">
            <input className="input-email white" placeholder='Your email'/>
            <a class="waves-effect waves-light btn orange">Subscribe</a>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
