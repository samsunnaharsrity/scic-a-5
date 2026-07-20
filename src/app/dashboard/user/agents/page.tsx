"use client";


import axios from "axios";
import {useEffect,useState} from "react";
import {useDashboard} from "@/app/components/dashboardData/dashboardProvider";
import {Bot} from "lucide-react";


export default function AgentsPage(){


const {session}=useDashboard();


const [agents,setAgents]=useState<any[]>([]);



useEffect(()=>{

if(session?.user?.email){

loadAgents();

}

},[session]);




const loadAgents = async()=>{

try{


const {data}=await axios.get(

`${process.env.NEXT_PUBLIC_API_URL}/api/agents/${session.user.email}`

);


console.log(
"MY AGENTS RESPONSE:",
data
);


setAgents(data.agents || []);


}
catch(error:any){

console.log(
"AGENT LOAD ERROR:",
error.response?.data || error.message
);

}

};





return (


<div className="
space-y-8
">


{/* Header */}

<div className="
flex
items-center
gap-3
">


<div className="
p-3
rounded-xl
bg-violet-100
dark:bg-violet-500/20
text-violet-600
dark:text-violet-400
">

<Bot size={30}/>

</div>



<div>

<h1 className="
text-3xl
font-bold
text-gray-900
dark:text-white
">

My AI Agents

</h1>


<p className="
text-gray-500
dark:text-gray-400
mt-1
">

Manage and use your custom AI assistants.

</p>


</div>


</div>






{

agents.length === 0 ? (



<div className="
flex
flex-col
items-center
justify-center
py-20
rounded-2xl
border
bg-gray-50
dark:bg-neutral-900
dark:border-neutral-800
">


<div className="
text-6xl
">

🤖

</div>



<h2 className="
mt-5
text-xl
font-bold
text-gray-900
dark:text-white
">

No AI Agents Found

</h2>



<p className="
mt-2
text-center
max-w-md
text-gray-500
dark:text-gray-400
">

You haven't created any AI agents yet.
Create your first AI agent and start building intelligent assistants.

</p>



</div>



)

:

(



<div className="
grid
md:grid-cols-2
xl:grid-cols-3
gap-6
">



{

agents.map((agent)=>(



<div

key={agent._id}

className="
rounded-2xl
border
bg-white
dark:bg-neutral-900
dark:border-neutral-800
p-6
shadow-sm
hover:shadow-xl
transition
group
"


>


{/* Icon */}

<div className="
flex
items-center
justify-between
">


<div className="
flex
h-14
w-14
items-center
justify-center
rounded-xl
bg-violet-100
dark:bg-violet-500/20
text-3xl
">

{
agent.icon || "🤖"
}

</div>



<span className="
text-xs
rounded-full
bg-green-100
dark:bg-green-500/20
text-green-700
dark:text-green-400
px-3
py-1
font-medium
">

Active

</span>


</div>






<h2 className="
mt-5
text-xl
font-bold
text-gray-900
dark:text-white
">

{agent.name}

</h2>





<p className="
mt-2
text-sm
leading-relaxed
text-gray-600
dark:text-gray-400
">

{agent.description}

</p>







<div className="
mt-5
space-y-2
text-sm
">


<div className="
flex
justify-between
text-gray-600
dark:text-gray-400
">

<span>
Model
</span>


<span className="
font-semibold
text-gray-900
dark:text-white
">

{agent.model}

</span>


</div>





<div className="
flex
justify-between
text-gray-600
dark:text-gray-400
">

<span>
Category
</span>


<span className="
font-semibold
text-gray-900
dark:text-white
">

{agent.category}

</span>


</div>



</div>







<button

className="
mt-6
w-full
rounded-xl
bg-violet-600
hover:bg-violet-700
py-3
text-white
font-medium
transition
"

>

Open Agent

</button>





</div>



))


}



</div>


)

}



</div>


)

}