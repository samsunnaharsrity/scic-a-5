"use client";

import {
  Brain,
  Coins,
  Activity,
  TrendingUp,
  Zap,
  BarChart3,
  Bot,
} from "lucide-react";

import axios from "axios";
import { useEffect, useState } from "react";



interface AnalyticsData {

totalTokens:number;

totalRequests:number;

totalCost:number;

totalAgents:number;

growth?:{

tokens:string;

requests:string;

cost:string;

};

usage:{
day:string;
value:number;
}[];

}




export default function AIAnalytics(){


const [analytics,setAnalytics]=useState<AnalyticsData|null>(null);

const [loading,setLoading]=useState(true);



// temporary user email
const email="admin@gmail.com";



useEffect(()=>{


const fetchAnalytics=async()=>{


try{


const res =
await axios.get(
`${process.env.NEXT_PUBLIC_API_URL}/api/ai-analytics/${email}`
);



setAnalytics(res.data.data);



}
catch(error){

console.log(error);

}
finally{

setLoading(false);

}


};


fetchAnalytics();


},[]);





if(loading){


return (

<div className="
flex
justify-center
items-center
h-96
text-gray-500
">

Loading AI Analytics...

</div>

)


}





const stats=[


{

title:"Total Tokens",

value:
analytics
?
`${(analytics.totalTokens/1000).toFixed(1)}K`
:"0",

icon:Brain,

color:"from-purple-500 to-indigo-600",

desc:"AI tokens processed",

growth:
analytics?.growth?.tokens || "+0%"


},



{

title:"Requests",

value:
analytics?.totalRequests || 0,

icon:Activity,

color:"from-blue-500 to-cyan-600",

desc:"AI requests completed",

growth:
analytics?.growth?.requests || "+0%"


},




{

title:"Cost",

value:
`$${analytics?.totalCost || 0}`,

icon:Coins,

color:"from-emerald-500 to-green-600",

desc:"Monthly AI spending",

growth:
analytics?.growth?.cost || "+0%"


},


];






return(


<div className="
min-h-screen
space-y-8
bg-gray-50
dark:bg-[#09090b]
p-6
rounded-2xl
">


{/* Header */}


<div>


<h1 className="
text-3xl
font-bold
flex
items-center
gap-3
dark:text-white
">

<BarChart3
className="text-indigo-500"
/>

AI Usage Analytics


</h1>



<p className="
text-gray-500
mt-2
">

Track AI agents performance and usage.


</p>


</div>






{/* Stats */}



<div className="
grid
md:grid-cols-4
gap-6
">


{

[

...stats,

{

title:"AI Agents",

value:analytics?.totalAgents || 0,

icon:Bot,

color:"from-orange-500 to-red-500",

desc:"Active AI agents",

growth:"+5%"


}

].map((item)=>{


const Icon=item.icon;


return(


<div
key={item.title}
className="
relative
overflow-hidden
rounded-2xl
border
dark:border-white/10
bg-white
dark:bg-white/5
p-6
hover:shadow-xl
transition
"
>



<div className={`
absolute
right-0
top-0
w-32
h-32
rounded-full
blur-3xl
opacity-30
bg-gradient-to-br
${item.color}
`}/>



<div className="
flex
justify-between
">


<div>


<p className="
text-sm
text-gray-500
">

{item.title}

</p>



<h2 className="
text-4xl
font-bold
mt-3
dark:text-white
">

{item.value}

</h2>



<p className="
text-sm
text-gray-400
mt-2
">

{item.desc}

</p>



<span className="
inline-block
mt-4
px-3
py-1
rounded-full
text-xs
bg-green-500/10
text-green-500
">

{item.growth}

</span>



</div>




<div className={`
w-12
h-12
rounded-xl
flex
items-center
justify-center
text-white
bg-gradient-to-br
${item.color}
`}>

<Icon size={24}/>

</div>


</div>



</div>


)


})


}



</div>







{/* Chart */}



<div className="
rounded-2xl
border
dark:border-white/10
bg-white
dark:bg-white/5
p-6
">


<div className="
flex
justify-between
items-center
">


<div>


<h2 className="
text-xl
font-bold
dark:text-white
">

AI Performance Overview

</h2>


<p className="
text-gray-500
text-sm
">

Last 7 days usage

</p>


</div>



<TrendingUp
className="text-green-500"
/>


</div>






<div className="
mt-10
h-72
flex
items-end
gap-4
">


{

(
analytics?.usage?.length
?
analytics.usage
:
[
{
day:"Mon",
value:20
},
{
day:"Tue",
value:40
},
{
day:"Wed",
value:30
},
{
day:"Thu",
value:70
},
{
day:"Fri",
value:50
},
{
day:"Sat",
value:80
},
{
day:"Sun",
value:60
}
]
).map((item)=>(


<div
key={item.day}
className="
flex-1
flex
flex-col
items-center
gap-2
">


<div

className="
w-full
rounded-t-xl
bg-gradient-to-t
from-indigo-600
to-purple-400
hover:scale-105
transition
"

style={{

height:`${item.value}%`

}}

/>


<span className="
text-xs
text-gray-400
">

{item.day}

</span>


</div>



))


}



</div>





<div className="
mt-6
flex
justify-center
gap-2
text-sm
text-gray-400
">


<Zap
size={16}
className="text-yellow-400"
/>


AI activity updated from real usage


</div>



</div>



</div>


)


}