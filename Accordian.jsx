import React, { useState } from "react";
import { questions } from "./Api";
import { MyAccordian } from './MyAccordian';
import "./Accordian.css";
export const Accordian=()=>{
    const [data,setData]=useState(questions)
 return(
    <>  
        <section className="main_div">
        <h1>React Js Interview Questions✔</h1>
        {data.map((currData)=>{
            return <MyAccordian key={currData.id} {...currData}/>
        })}
        </section>
    </>
 );
}
