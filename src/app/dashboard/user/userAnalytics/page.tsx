"use client";

import {
  MessageSquare,
  Zap,
  Bot,
  Activity
} from "lucide-react";


import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";


import axios from "axios";
import {useEffect,useState} from "react";
import { authClient } from "@/lib/auth-client";



const COLORS:string[] = [
  "#8b5cf6",
  "#06b6d4",
  "#22c55e",
  "#f97316",
  "#ef4444",
  "#eab308"
];





export default function UserAnalyticsPage(){


const {data:session}=authClient.useSession();


const [data,setData]=useState<any>(null);
const [loading,setLoading]=useState(true);



useEffect(()=>{


if(!session?.user?.email)
return;


axios.get(

`${process.env.NEXT_PUBLIC_API_URL}/api/analytics/user/${session.user.email}`

)
.then(res=>{

console.log("ANALYTICS:",res.data);

setData(res.data);

})
.catch(err=>{

console.log(
"ANALYTICS ERROR:",
err
);

})
.finally(()=>{

setLoading(false);

});


},[session]);






if(loading){

return (

<div className="p-10 text-center">

Loading Analytics...

</div>

)

}


if(!data?.stats){

return (

<div className="p-10 text-center">

No Analytics Data Found

</div>

)

}





const stats=data.stats;



const chartData = data.agentsUsage?.length
?
data.agentsUsage
:
[
{
date:"No Data",
agents:0
}
];




const chatData:{
name:string;
value:number;
}[] = data.chatUsage?.length
?
data.chatUsage
:
[
{
name:"No Chat",
value:1
}
];






return (

<div className="
min-h-screen
bg-slate-50
dark:bg-slate-950
p-6
">



<h1 className="
text-3xl
font-bold
dark:text-white
">

AI Analytics

</h1>





<div className="
grid
md:grid-cols-4
gap-5
mt-8
">


<Card
title="AI Requests"
value={stats.requests || 0}
icon={Activity}
/>



<Card
title="Chats"
value={stats.chats || 0}
icon={MessageSquare}
/>



<Card
title="Agents"
value={stats.agents || 0}
icon={Bot}
/>



<Card
title="Tokens"
value={stats.tokens || 0}
icon={Zap}
/>



</div>







{/* Agent Create Trend */}


<div className="
bg-white
dark:bg-slate-900
rounded-2xl
p-6
mt-8
">


<h2 className="
font-bold
text-xl
dark:text-white
mb-5
">

Create Agents Data

</h2>



<ResponsiveContainer
width="100%"
height={300}
>


<LineChart data={chartData}>


<XAxis dataKey="date"/>


<YAxis/>


<Tooltip/>


<Line

type="monotone"

dataKey="agents"

strokeWidth={3}

/>



</LineChart>


</ResponsiveContainer>


</div>









{/* Chat Usage */}


<div className="
bg-white
dark:bg-slate-900
rounded-2xl
p-6
mt-8
">


<h2 className="
text-xl
font-bold
dark:text-white
mb-5
">

AI Usage Trend

</h2>




<div className="flex justify-center">


<ResponsiveContainer
width="100%"
height={300}
>


<PieChart>


<Pie

data={chatData}

dataKey="value"

nameKey="name"

outerRadius={100}

label

>


{
chatData.map((_,index)=>(

<Cell

key={`cell-${index}`}

fill={
COLORS[index % COLORS.length]
}

/>

))
}



</Pie>



<Tooltip/>


</PieChart>


</ResponsiveContainer>


</div>


</div>






</div>


)

}







function Card({

title,

value,

icon:Icon

}:any){


return (

<div className="
bg-white
dark:bg-slate-900
rounded-2xl
p-5
flex
items-center
gap-4
shadow-sm
">


<div className="
p-3
rounded-xl
bg-violet-100
text-violet-600
">


<Icon size={22}/>


</div>



<div>


<p className="
text-sm
text-slate-500
">

{title}

</p>


<h3 className="
text-2xl
font-bold
dark:text-white
">

{value}

</h3>


</div>


</div>

)

}