"use client";

import {
  Bot,
  Cpu,
  Activity,
  Zap,
  Database,
  Brain,
  CheckCircle,
  Server,
  Sparkles,
} from "lucide-react";

import axios from "axios";
import { useEffect, useState } from "react";



interface AIControlData {

status:string;

uptime:string;

models:{
name:string;
performance:number;
}[];

agents:{
running:number;
tasksToday:number;
};

activities:string[];

}




export default function AIControlCenter(){


const [aiData,setAiData]=useState<AIControlData | null>(null);



useEffect(()=>{

getAIData();

},[]);



const getAIData=async()=>{

try{

const {data}=await axios.get(

`${process.env.NEXT_PUBLIC_API_URL}/api/ai/control-center`

);


setAiData(data);



}catch(error){

console.log(error);

}

};




if(!aiData){

return (

<div className="p-10 text-center">

Loading AI Control Center...

</div>

)

}





const stats=[


{
title:"AI System Status",
value:aiData.status,
status:`${aiData.uptime} Uptime`,
icon:Activity,
color:"text-green-500",
bg:"bg-green-100 dark:bg-green-900/30"
},



{
title:"Active Models",
value:`${aiData.models.length} Models`,
status:"AI Providers Connected",
icon:Cpu,
color:"text-blue-500",
bg:"bg-blue-100 dark:bg-blue-900/30"
},



{
title:"Running Agents",
value:`${aiData.agents.running} Agents`,
status:`${aiData.agents.tasksToday} Tasks Today`,
icon:Bot,
color:"text-purple-500",
bg:"bg-purple-100 dark:bg-purple-900/30"
}


];







return (

<div className="space-y-8">



{/* Header */}

<div className="flex flex-col md:flex-row md:justify-between gap-4">


<div>

<h1 className="
text-3xl
font-bold
text-gray-900
dark:text-white
">

AI Control Center

</h1>


<p className="text-gray-500 mt-2">

Manage AI models, agents and system intelligence.

</p>


</div>




<div className="
flex items-center gap-2
px-4 py-2
rounded-full
bg-green-100
text-green-700
dark:bg-green-900/30
dark:text-green-400
">


<span className="
w-2 h-2
rounded-full
bg-green-500
animate-pulse
"/>


AI {aiData.status}


</div>


</div>







{/* Stats */}

<div className="grid md:grid-cols-3 gap-6">


{
stats.map((item)=>{


const Icon=item.icon;


return (

<div
key={item.title}
className="
bg-white
dark:bg-gray-900
border
rounded-2xl
p-6
shadow-sm
hover:shadow-xl
transition
"
>


<div className="flex justify-between">


<div className={`
p-3 rounded-xl
${item.bg}
`}>

<Icon
size={28}
className={item.color}
/>

</div>


<CheckCircle
className="text-green-500"
/>


</div>



<h3 className="mt-5 text-gray-500">

{item.title}

</h3>



<h2 className="
text-2xl
font-bold
mt-2
">

{item.value}

</h2>



<p className="text-sm text-gray-400 mt-2">

{item.status}

</p>


</div>


)


})

}


</div>










{/* Monitoring */}


<div className="grid lg:grid-cols-2 gap-6">






{/* Models */}


<div className="
bg-white
dark:bg-gray-900
border
rounded-2xl
p-6
">


<div className="flex items-center gap-3">


<div className="
p-3
rounded-xl
bg-indigo-100
dark:bg-indigo-900/30
">

<Brain
className="text-indigo-500"
/>

</div>


<h2 className="text-xl font-semibold">

Model Performance

</h2>


</div>






<div className="mt-6 space-y-6">


{

aiData.models.map(model=>(


<div key={model.name}>


<div className="flex justify-between mb-2">

<span>

{model.name}

</span>


<span className="font-semibold">

{model.performance}%

</span>


</div>



<div className="
h-2
bg-gray-200
dark:bg-gray-700
rounded-full
">


<div

className="
h-full
rounded-full
bg-gradient-to-r
from-blue-500
to-purple-500
"

style={{

width:`${model.performance}%`

}}

/>


</div>



</div>


))


}



</div>


</div>









{/* Agent Activity */}



<div className="
bg-white
dark:bg-gray-900
border
rounded-2xl
p-6
">


<div className="flex items-center gap-3">


<div className="
p-3
rounded-xl
bg-yellow-100
dark:bg-yellow-900/30
">

<Zap
className="text-yellow-500"
/>

</div>



<h2 className="text-xl font-semibold">

Agent Activity

</h2>


</div>






<div className="mt-6 space-y-4">


{

aiData.activities.map(activity=>(


<div

key={activity}

className="
flex
items-center
gap-3
p-4
rounded-xl
bg-gray-50
dark:bg-gray-800
"

>


<Database

size={20}

className="text-blue-500"

/>


<p className="text-sm">

{activity}

</p>


</div>


))


}



</div>


</div>




</div>









{/* Health */}


<div className="
rounded-3xl
p-8
text-white
bg-gradient-to-r
from-gray-900
via-black
to-gray-800
">


<div className="
flex
flex-col
md:flex-row
md:items-center
justify-between
gap-5
">



<div className="flex items-center gap-4">


<div className="
p-4
rounded-2xl
bg-white/10
">


<Server size={40}/>


</div>



<div>


<h2 className="text-2xl font-bold">

AI Infrastructure {aiData.status}

</h2>


<p className="text-gray-300">

All AI services, APIs and agents are running smoothly.

</p>


</div>



</div>





<div className="flex items-center gap-2">

<Sparkles className="text-yellow-400"/>

Performance Excellent

</div>




</div>


</div>





</div>


);


}