import React from "react";
import Modal from "react-modal";
import { useState } from "react";
import books from '../images/book.jpeg';

const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "white",
      width: 400,
      height:400,
    },
  };

const handleIssue=async(book_serial_no,availability,book_name)=>{
    if(!availability){
        alert("This book ins not available");
        return;
    }
    let response=await fetch("http://localhost:5000/api/IssueBooks",{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            serial_no:book_serial_no
        })
    });
    console.log("Issue Response",response)
    if(response.status===200){
        //dispatch({type:"DROP"})
        alert(book_name+" issued successfully");
        document.getElementById(book_serial_no).classList.add("opacity-50")
        availability=0;
    }
}

function Card(props){
    const className=["card mt-3",(!props.availability)?"opacity-50":""].join(' ')
    const [modalOpen, setModalOpen]=useState(false);
    return (
            <div className={className} style={{width: "12rem"}} id={props.serial_no}>
            <img className="card-img-top" src={books} alt="Card image cap" style={{height:"120px",
           objectFit:"fill"}}/>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.genre}</p>
                {/* <button className="btn btn-primary" onClick={()=>handleIssue(props.serial_no,props.availability,props.name)}>Issue Book</button> */}
                <button className="btn btn-primary"  onClick={setModalOpen}>Take it!</button>
                <Modal
                isOpen={modalOpen}
                onRequestClose={()=>setModalOpen(false)}
                style={customStyles}
                >
                <div>
                    <button className="btn btn-primary" onClick={()=>handleIssue(props.serial_no,props.availability,props.name)}>Issue Book</button>
                </div>
                <button className="btn btn-primary"  onClick={()=>setModalOpen(false)}>Close Modal</button>
                </Modal>
            </div>
            </div>
    )
};
export default Card;