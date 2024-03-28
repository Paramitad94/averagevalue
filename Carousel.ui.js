
import React, { useState, useEffect, useRef } from 'react';





const CarouselUi = (props) => {
    const questions = ["Can you code in Ruby?", "Can you code in Javascript?","Can you code in Swift?","Can you code in Java?","Can you code in C#?"];
    const [score, setScore] = useState(Array(questions.length).fill(null));
    const [yesClicked,setYesClicked]=useState(Array(questions.length).fill(false));
    const [noClicked,setNoClicked]=useState(Array(questions.length).fill(false));
    const [averageScore, setAverageScore]=useState(null);

    useEffect(()=>{
         const storedScore=localStorage.getItem('score');
         setAverageScore(storedScore);
        //  if(storedScore!==null){
        //      setScore(parseFloat(storedScore))
        //  }
        // const storedScores=JSON.parse(localStorage.getItem('scores'))||[];
        console.log(storedScore,'score')
        // if(Array.isArray(score)){
        //     const totalScore=score.reduce((acc,curr)=> acc+curr,0);
        //     const avgScore= totalScore===0?0:totalScore/questions.length;
        //     setAverageScore(avgScore);
        //     localStorage.setItem('score', avgScore)
        // }
       
        const storedAttempts=localStorage.getItem('attempts');
        if(storedAttempts){
            setAttempts(storedAttempts+1);
        }
    },[])
    // const calculateScore=()=>{
       
    // }

    const handleClick = (index, answer) => {
        if(answer==='yes'){
            // const newAnswer = [...answers];
            // // const newIndex= index.split('_')[0];
            // // console.log(newIndex,'newindex')
            // newAnswer[index] = answer;
            // setAnswers(newAnswer);
            // const numYes=answers.filter(answer=>answer==='yes').length;
            // const numNo=answers.filter(answer=>answer==='no').length;
            // const calculatedScore= 20*numYes ;
          
            const newScores=[score];
            newScores[index]= 20;
            console.log(newScores,'newscores')
            setScore(newScores);
            const filteredArray=newScores.filter(value=>typeof value==='number');
            console.log(filteredArray,'fil')
            let sum=0;
                for(let i=0; i<filteredArray.length;i++){
                    sum +=filteredArray[i];
                }
            
            setScore(sum);
        //     const sum= filteredArray?.reduce((acc,curr)=>acc+curr,0);
            const average= sum/filteredArray.length;
        //    console.log(average,'average sum')
            setAverageScore(average);
          //  setScore(sum);
            localStorage.setItem('score',average);
            //setScore(calculatedScore);
            // localStorage.setItem('score',calculatedScore);
            // const storedScores=JSON.parse(localStorage.getItem('scores'))||[];
            // console.log(storedScores,'storedScores')
            // const newStoredScores=[...storedScores,calculatedScore];
            // localStorage.setItem('scores', JSON.stringify(newStoredScores))
            // const totalScore=newStoredScores.reduce((acc,curr)=> acc+curr,0);
            // const avgScore=totalScore/newStoredScores.length;
            // setAverageScore(avgScore)
            //setClickedButtonIndex(index);
            const newYesClicked=[...yesClicked];
            newYesClicked[index]=true;
            setYesClicked(newYesClicked);
            setNoClicked(Array(questions.length).fill(false));
        }
        else {
            setYesClicked(Array(questions.length).fill(false));
            const newNoClicked=[...noClicked];
            newNoClicked[index]=true;
            setNoClicked(newNoClicked);
        }
      
    };
   
console.log(score,'score');
console.log(averageScore,'average score')
    return (
        <>
        <div style={{"display": "flex",
        "justifyContent": "space-between",
        "alignItems": "center",
        "padding": "40px"}}>

            {questions.map((question, index) => {
                return (
                    <div key={index} >
                        <p style={{"marginBottom": "20px", "fontSize": "20px"}}>{question}</p>
                        <div style={{ "display": "flex", "justifyContent": "space-between"}}>
                        <button style={{backgroundColor: yesClicked[index]? "#000": "#fff", color: yesClicked[index]? "#fff" : "#000","width" : "50px","height": "30px","cursor":"pointer","fontSize": "16px"}} onClick={() => handleClick(index, 'yes')}>Yes</button>
                        <button style={{backgroundColor:noClicked[index]? "#000": "#fff", color: noClicked[index] ? "#fff" : "#000","width" : "50px","height": "30px","cursor":"pointer","fontSize": "16px"}} onClick={() => handleClick(index, 'no')}>No</button>
                        </div>
                        
                    </div>
                )

            })}
            
        </div>
        {score !==null ?<div style={{"fontSize": "36px","textAlign":"center", "color": "blue"}}>Score: {score}</div>: null}
        {/* {averageScore !==null ?<div style={{"fontSize": "36px","textAlign":"center", "color": "blue"}}>Average Score: {averageScore}</div>: null} */}
        </>
    )
}

export default CarouselUi;
