import React from 'react';
import './style.css';
import Projects from './projects.json';

function Cards(props) {
    const {name, image, github, description} = props;

    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={image} className="card-img-top" alt={`${name}`}></img>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <a href={github} className="btn btn-primary" target='_blank'>Go somewhere</a>
            </div>
        </div>
    );
}

export default Cards;