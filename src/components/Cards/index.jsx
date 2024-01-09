import React from 'react';
import './style.css';

function Cards(props) {
    const {name, github, image} = props;

    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={image} className="card-img-top" alt={`${name}`}></img>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href={github} className="btn btn-primary" target='_blank'>Go somewhere</a>
            </div>
        </div>
    );
}

export default Cards;