import React, { useEffect, useRef } from "react";

function StudentMarks() {
  let firstNameRef=useRef();
  let lastNameRef=useRef();
  let telMarksRef=useRef();
  let hinMarksRef=useRef();
  let engMarksRef=useRef();
  let matMarksRef=useRef();
  let sciMarksRef=useRef();
  let socMarksRef=useRef();
  let buttonRef=useRef();

  let firstNameResultRef=useRef();
  let lastNameResultRef=useRef();

  let engResultRef=useRef();
  let telResultRef=useRef();
  let hinResultRef=useRef();
  let matResultRef=useRef();
  let sciResultRef=useRef();
  let socResultRef=useRef();


  let nameCheck= /^[a-zA-Z]{4,20}$/ ;

  function onFocusFun(allMarksLink){
    allMarksLink.current.style.backgroundColor="green";
  }
  function onBlurFun(allMarksLink){
    allMarksLink.current.style.backgroundColor="white"
  }
  function onChangeFun(allMarksLink,allResultRef){
    let marks=allMarksLink.current.value;
    if(marks>0&&marks<100){
      if( marks>=35){
        allResultRef.current.innerHTML="Pass";
       }
       else{
        allResultRef.current.innerHTML="Fail";
       }
       if(marks>=35){
        allResultRef.current.style.backgroundColor="green"
       }
       else{
        allResultRef.current.style.backgroundColor="red"
       }
     }
     else{
      allResultRef.current.innerHTML="invalid";
      allResultRef.current.style.backgroundColor="red"
      console.log("sameoutput")
     }
  }

  function button(){
    let firstName=firstNameRef.current.value;
            let lastName=lastNameRef.current.value;
              let telMarks=Number(telMarksRef.current.value)
              let hinMarks=Number(hinMarksRef.current.value)
              let engMarks=Number(engMarksRef.current.value)
              let matMarks=Number(matMarksRef.current.value)
              let sciMarks=Number(sciMarksRef.current.value)
              let socMarks=Number(socMarksRef.current.value)
              let totalMarks=telMarks+hinMarks+engMarks+matMarks+sciMarks+socMarks
              
              let para=document.getElementById("total")
              if(engMarks>0&&engMarks<100&&telMarks>0&&telMarks<100&&hinMarks>0&&hinMarks<100&&matMarks>0&&matMarks<100&&sciMarks>0&&sciMarks<100&&socMarks>0&&socMarks<100){
                if(engMarks>=35&&telMarks>=35&&hinMarks>=35&&matMarks>=35&&sciMarks>=35&&socMarks>=35){

                  buttonRef.current.style.backgroundColor="green"
                  alert(firstName+" "+lastName +" passed and total marks: "+totalMarks)
                  para.innerHTML=firstName+" "+lastName +" passed and total marks: "+totalMarks
                }
                else{
                  buttonRef.current.style.backgroundColor="red"

                  alert(firstName+" "+lastName +" failed and total marks: "+totalMarks)
                  para.innerHTML=firstName+" "+lastName +" failed and total marks: "+totalMarks
  
                }
              }else{
                buttonRef.current.style.backgroundColor="red"
                alert("invalid data.Please enter valid data")
              } 
  }
let subjectArr=["Telugu","Hindi","English","Maths","Science","Social"];
let inputArr=[telMarksRef,hinMarksRef,engMarksRef,matMarksRef,sciMarksRef,socMarksRef];
let resultArr=[telResultRef,hinResultRef,engResultRef,matResultRef,sciResultRef,socResultRef];

  return (
    <div>
      <form className="main-form">
        <div>
          <label > First Name:</label>
          <input type="text" ref={firstNameRef} onBlur={()=>{onBlurFun(firstNameRef)}} onChange={()=>{

              let firstNameResult=nameCheck.test(firstNameRef.current.value);

            if(firstNameResult==true){
              
              firstNameRef.current.style.backgroundColor="green"
              firstNameResultRef.current.innerHTML="valid"
              firstNameResultRef.current.style.backgroundColor="green"
            }
            else{
              
              firstNameRef.current.style.backgroundColor="red"
              firstNameResultRef.current.innerHTML="invalid"
              firstNameResultRef.current.style.backgroundColor="red"
            }
          }}></input>
          <label ref={firstNameResultRef} className="result"></label>

        </div>
        <div>
          <label> Last Name:</label>
          <input type="text" ref={lastNameRef} onBlur={()=>{onBlurFun(lastNameRef)}} onChange={()=>{
              let lastNameResult=nameCheck.test(lastNameRef.current.value);

            if(lastNameResult==true){
              
              lastNameRef.current.style.backgroundColor="green"
              lastNameResultRef.current.innerHTML="valid"
              lastNameResultRef.current.style.backgroundColor="green"
            }
            else{
              lastNameRef.current.style.backgroundColor="red"
              lastNameResultRef.current.innerHTML="invalid"
              lastNameResultRef.current.style.backgroundColor="red"
            }
          }} ></input>
          <label ref={lastNameResultRef} className="result"></label>

        </div>{
        
          subjectArr.map((ele,index)=>{return(
            <div>
            <label> {ele}</label>
            <input type="number" ref={inputArr[index]} 
            onFocus={()=>{
           onFocusFun(inputArr[index])
            }}
           onBlur={()=>{
            onBlurFun(inputArr[index])
           }}
           onChange={()=>{
           onChangeFun(inputArr[index],resultArr[index])
             }}
            ></input>
            <label ref={resultArr[index]} className="result"></label>
  
          </div>)
          })
        
        }
        <div>
          <button type="button" className="btn" ref={buttonRef} onClick={()=>{
             button()

          }}> calculate</button>
          <p id="total"></p>
        </div>
      </form>
    </div>
  );
}

export default StudentMarks;
