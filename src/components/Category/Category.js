import React from 'react';
import PropTypes from 'prop-types';
import './Category.css';

Category.propTypes = {
    movies: PropTypes.array,
};

Category.defaultProps = {
    movies: [],
}


function Category(props) {
    const {cate, setCate} = props;
    return (
        <div>
            <div className="title-category">
                <h6>CATEGORY</h6>
                <h3>We Offer Best Services</h3>
            </div>
            <div className="category">
                {cate.map(e => (
                    <div className="row">
                        <div className="col s12 m6">
                            <div className="card">
                                <div className="card-image">
                                    <img src={e.img} />
                                </div>
                            <div className="card-content">
                                <span className="card-title">{e.title}</span>
                                <p>{e.content}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))} 
            </div>
        </div>
    );
}

export default Category;