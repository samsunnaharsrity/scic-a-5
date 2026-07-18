"use client";


import {useEffect,useState} from "react";
import axios from "axios";


interface Agent{

_id:string;
name:string;
description:string;
icon:string;
category:string;

}



export default function AgentsPage(){


const [agents,setAgents]=useState<Agent[]>([]);



useEffect(()=>{


const loadAgents=async()=>{


const {data}=await axios.get(

`${process.env.NEXT_PUBLIC_API_URL}/api/agents`

);


setAgents(data.agents);


};


loadAgents();


},[]);




return (

<div>


<h1 className="text-3xl font-bold">
My AI Agents
</h1>



<div className="
grid
md:grid-cols-3
gap-5
mt-6
">


{
agents.map(agent=>(


<div

key={agent._id}

className="
border
rounded-xl
p-5
hover:shadow-lg
transition
"

>


<div className="text-4xl">
{agent.icon}
</div>



<h2 className="font-semibold text-lg mt-3">

{agent.name}

</h2>



<p className="text-sm text-muted-foreground">

{agent.description}

</p>



<span className="
inline-block
mt-3
text-xs
bg-muted
px-3
py-1
rounded-full
">

{agent.category}

</span>



<button

className="
mt-5
text-primary
"

>

Open Agent

</button>


</div>


))

}


</div>


</div>

)

}