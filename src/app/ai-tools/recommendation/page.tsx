"use client";

import {useState} from "react";


export default function Recommendation(){

const [interest,setInterest]=useState("");

const [result,setResult]=useState("");



const recommend=()=>{

setResult(
`Based on your interest "${interest}", AI recommends:
- Learning resources
- Productivity tools
- Personalized courses`
)

}


return(

<section className="min-h-screen bg-slate-950 text-white p-10">


<h1 className="text-4xl font-bold">
AI Recommendation Engine
</h1>


<input

className="mt-8 bg-slate-900 p-4 rounded-xl w-full"

placeholder="Your interest"

onChange={(e)=>setInterest(e.target.value)}

/>


<button

onClick={recommend}

className="mt-5 bg-violet-600 px-6 py-3 rounded-xl"

>
Get Recommendation
</button>


{
result &&
<div className="mt-8 bg-slate-900 p-5 rounded-xl">

{result}

</div>
}


</section>

)

}