"use client";


import {useState} from "react";


export default function DataAnalyzer(){

const [file,setFile]=useState<File|null>(null);

const [report,setReport]=useState("");



const analyze=()=>{

setReport(
"AI detected sales trends, growth rate and important insights."
)

}


return(

<section className="min-h-screen bg-slate-950 text-white p-10">


<h1 className="text-4xl font-bold">
AI Data Analyzer
</h1>


<input
type="file"
className="mt-8"
onChange={(e)=>setFile(e.target.files?.[0]||null)}
/>


<button

onClick={analyze}

className="mt-5 bg-violet-600 px-6 py-3 rounded-xl"

>
Analyze Data
</button>


{
report &&
<div className="mt-8 bg-slate-900 p-5 rounded-xl">
{report}
</div>
}


</section>

)

}