"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";


interface Tool {
  _id:string;
  title:string;
  category:string;
  description:string;
  image:string;
  price:"Free"|"Premium";
  rating:number;
}


export default function ExplorePreview(){

const [tools,setTools] = useState<Tool[]>([]);


useEffect(()=>{

const loadTools = async()=>{

try{

const res = await fetch(
`${process.env.NEXT_PUBLIC_API_URL}/api/exploreTools`
);


const data = await res.json();


setTools(
data.data?.slice(0,4) || []
);


}catch(error){

console.log(error);

}


};


loadTools();


},[]);



return (

<section className="
py-20
bg-white
dark:bg-zinc-950
border-t
border-zinc-200
dark:border-zinc-800
">


<div className="max-w-6xl mx-auto px-4">


{/* Header */}

<div className="flex flex-col md:flex-row justify-between items-center mb-12">


<div>

<h2 className="
text-3xl
sm:text-4xl
font-bold
text-zinc-900
dark:text-white
">

Explore Powerful AI Tools

</h2>


<p className="
mt-3
text-zinc-500
dark:text-zinc-400
">

Discover intelligent agents and AI solutions
for every workflow.

</p>

</div>



<Link
href="/Explore"
className="
mt-5
md:mt-0
flex
items-center
gap-2
rounded-xl
bg-violet-600
px-6
py-3
text-white
font-semibold
hover:bg-violet-700
transition
"
>

View All Tools

<ArrowRight size={18}/>

</Link>


</div>



{/* Cards */}


<div className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-4
gap-6
">


{
tools.map((tool)=>(


<div
key={tool._id}
className="
rounded-2xl
overflow-hidden
border
border-zinc-200
dark:border-zinc-800
bg-zinc-50
dark:bg-zinc-900
hover:shadow-xl
transition
"
>


<Image

src={tool.image}

alt={tool.title}

width={500}

height={300}

className="
h-40
w-full
object-cover
"

/>



<div className="p-5">


<h3 className="
font-bold
text-lg
text-zinc-900
dark:text-white
">

{tool.title}

</h3>


<p className="
text-sm
text-zinc-500
mt-1
">

{tool.category}

</p>



<div className="
flex
justify-between
items-center
mt-4
">


<div className="
flex
items-center
gap-1
text-sm
">

<Star
size={16}
className="
fill-yellow-400
text-yellow-400
"
/>

{tool.rating}

</div>



<span className="
text-violet-600
font-semibold
text-sm
">

{tool.price}

</span>


</div>


</div>


</div>


))

}



</div>



</div>


</section>


);

}