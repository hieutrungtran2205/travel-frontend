import React from 'react';
import PropTypes from 'prop-types';
import './Destinations.css';

Destinations.propTypes = {
    movies: PropTypes.array,
};

Destinations.defaultProps = {
    movies: [],
}

function Destinations(props) {
    const {des, setDes} = props;
    return (
        <div>
            <div className="title-des">
                <h6>Top Selling</h6>
                <h3>Top Destinations</h3>
            </div>
            <div className="destinations">
                {des.map(e => (
                    <div className="row">
                        <div className="col s12 m6">
                            <div className="card">
                                <div className="card-image">
                                    <img src={e.img} />
                                </div>
                                <div className="card-content">  
                                    <p className="right">{e.price}</p>
                                    <p>{e.name}</p>
                                    <div className="trip">
                                        <i className="material-icons">near_me</i><p>{e.days}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            ))}
            </div>
        </div>
    );
}

export default Destinations;