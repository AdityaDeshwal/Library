import React from "react";
import books from '../images/book.jpeg'

function Card(props){
    return (
            <div className="card mt-3" style={{width: "12rem"}}>
            <img className="card-img-top" src={books} alt="Card image cap" style={{height:"120px",
           objectFit:"fill"}}/>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                <p className="card-text">{props.genre}</p>
                <a href="#" className="btn btn-primary">Issue Book</a>
            </div>
            </div>
    )
};
export default Card;