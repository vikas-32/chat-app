import React, { useState } from "react";
import {Link} from "react-router-dom";
import './Join.css';
const Join =()=>{
    const [name, setname] = useState('');
    const [room, setroom] = useState('');
    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">Join</h1>
                <div><input placeholder="NAME" className="joinInput" type="text" onChange={(e)=>setname(e.target.value)} /></div>
                <div><input placeholder="ROOM" className="joinInput mt-20" type="text" onChange={(e)=>setroom(e.target.value)} /></div>
                <Link onClick={(event)=>(!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                    <button className="button mt-20" type="submit">Sign In</button>
                </Link>
            </div>
        </div>
    )
};

export default Join;