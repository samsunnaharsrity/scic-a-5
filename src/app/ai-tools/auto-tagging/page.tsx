"use client";

import {useState} from "react";


export default function AutoTagging(){

const [text,setText]=useState("");

const [tags,setTags]=useState<string[]>([]);



const generate=()=>{

setTags([
"technology",
"AI",
"automation",
"productivity"
]);

}


return(

<section className="min-h-screen bg-slate-950 text-white p-10">


<h1 className="text-4xl font-bold">
AI Auto Tagging
</h1>


<textarea

className="mt-8 bg-slate-900 p-4 rounded-xl w-full"

rows={5}

placeholder="Enter content"

onChange={(e)=>setText(e.target.value)}

/>


<button

onClick={generate}

className="mt-5 bg-violet-600 px-6 py-3 rounded-xl"

>
Generate Tags
</button>



<div className="flex gap-3 mt-8">

{
tags.map(tag=>(

<span
key={tag}
className="bg-violet-100 text-violet-700 px-4 py-2 rounded-full"
>
{tag}
</span>

))
}


</div>


</section>

)

}