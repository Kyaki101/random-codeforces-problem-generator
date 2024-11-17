import RangeInput from "./RangeInput";
import SearchButton from "./SearchButton";
import { useEffect, useState } from 'react'
import ProblemCard from "./ProblemCard";

import React, { useRef } from 'react'


function InputBox(props) {

    const [loaded, setLoaded] = useState(false);
    const [choseProblem, setChosenProblem] = useState(null);
    
    const inpRef1 = useRef(null)
    const inpRef2 = useRef(null)

    const isNumber = () => {
        if(!isNaN(inpRef1.current.value) && !isNaN(inpRef2.current.value) && inpRef2.current.value.trim() !== "" && inpRef1.current.value.trim() !== "") {
            return true;
        }
        return false;
    }

    const handleSubmit = () => {

        let problems = props.problems;

        let resList = [];

        if(!isNumber()) {
            alert("The lower bound or upper bound isn't a number");
            setLoaded(false);


            return;
        }


        for(let i = 0; i < problems.length; i++) {
            if(problems[i].rating >= Number(inpRef1.current.value) && problems[i].rating <= Number(inpRef2.current.value)) {
                resList.push(problems[i]);
            }
        }

        if(resList.length != 0) {
            let index = Math.floor(Math.random() * resList.length);
            console.log(resList[index]);
            setChosenProblem(resList[index]);
            setLoaded(true);

        }
        else {
            alert("Problems haven't loaded or there aren't any problems in this range")
            setLoaded(false);
        }

        

    }
    if(loaded) {
        return(
            <>
                <div className="inpContainer">
                    <RangeInput ref={inpRef1} bound="lower bound(rating)"></RangeInput>
                    <RangeInput ref={inpRef2} bound="upper bound(rating)"></RangeInput>
                </div>
                <SearchButton ref1={inpRef1} ref2={inpRef2} onSubmit={handleSubmit}></SearchButton>
                <ProblemCard name={choseProblem.name} id={choseProblem.contestId} rating={choseProblem.rating} index={choseProblem.index}></ProblemCard>

            </>
        );
    }


    return(
        <>
            <div className="inpContainer">
                <RangeInput ref={inpRef1} bound="lower bound(rating)"></RangeInput>
                <RangeInput ref={inpRef2} bound="upper bound(rating)"></RangeInput>
            </div>
            <SearchButton ref1={inpRef1} ref2={inpRef2} onSubmit={handleSubmit}></SearchButton>

        </>
    );
}

export default InputBox
