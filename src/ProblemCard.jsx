import React, {useState, useEffect} from "react";

function ProblemCard(props) {


    return(
        <>
            <div className="parentCard">
                <a href={`https://codeforces.com/contest/${props.id}/problem/${props.index}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
                    <div className="problemContainer">
                        <p>{props.name}</p>
                        <p>Rating: {props.rating}</p>
                        <p>Contest: {props.id}</p>
                        <p>Problem {props.index}</p>
                    </div>
                </a>
                <p>click box to view problem</p>
            </div>

        </>
    );
}

export default ProblemCard;
