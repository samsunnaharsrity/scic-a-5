"use client";

import {
  Users,
  Bot,
  Activity,
  DollarSign,
  TrendingUp,
  ShieldCheck,
  Server,
} from "lucide-react";

import axios from "axios";
import { useEffect, useState } from "react";


export default function AdminDashboard(){


const [data,setData]=useState<any>(null);



useEffect(()=>{


const loadDashboard=async()=>{

try{

const res = await axios.get(
`${process.env.NEXT_PUBLIC_API_URL}/api/admin/dashboard`
);


setData(res.data);


}
catch(error){

console.log(error);

}


}


loadDashboard();


},[]);



if(!data)
return(

<div className="
p-10
text-center
text-gray-500
">

Loading Dashboard...

</div>

)



const stats=[

{
title:"Total Users",
value:data.stats.totalUsers,
desc:"Registered accounts",
icon:Users,
color:"from-blue-500 to-cyan-500",
growth:"+12%"
},


{
title:"AI Agents",
value:data.stats.totalAgents,
desc:"Active AI workers",
icon:Bot,
color:"from-purple-500 to-indigo-500",
growth:"+8%"
},


{
title:"API Requests",
value:data.stats.totalRequests,
desc:"AI model requests",
icon:Activity,
color:"from-emerald-500 to-green-500",
growth:"+24%"
},


{
title:"Revenue",
value:`$${data.stats.revenue}`,
desc:"Monthly earnings",
icon:DollarSign,
color:"from-orange-500 to-red-500",
growth:"+15%"
}


];



return(

<div className="
min-h-screen
space-y-8
p-6
bg-gray-50
dark:bg-[#09090b]
rounded-3xl
">



{/* Header */}


<div className="
flex
justify-between
items-center
">


<div>


<h1 className="
text-3xl
font-bold
flex
items-center
gap-3
dark:text-white
">

<ShieldCheck
size={34}
className="
text-indigo-500
"/>


Admin Dashboard

</h1>


<p className="
text-gray-500
mt-2
">

Monitor AI platform performance and business analytics.

</p>


</div>



<div className="
flex
items-center
gap-2
px-4
py-2
rounded-full
bg-green-500/10
text-green-500
font-medium
">

<span className="
w-2
h-2
rounded-full
bg-green-500
">
</span>

System Online

</div>


</div>






{/* Stats Cards */}


<div className="
grid
md:grid-cols-4
gap-6
">


{
stats.map((item)=>{


const Icon=item.icon;


return(


<div
key={item.title}
className="
relative
overflow-hidden
bg-white
dark:bg-white/5
border
dark:border-white/10
rounded-3xl
p-6
shadow-sm
hover:shadow-xl
transition
group
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
relative
flex
justify-between
items-start
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
mt-4
dark:text-white
">

{item.value}

</h2>



<p className="
text-gray-400
text-sm
mt-2
">

{item.desc}

</p>



<div className="
flex
items-center
gap-2
text-green-500
mt-4
font-medium
">

<TrendingUp size={16}/>

{item.growth}

</div>


</div>






<div className={`
w-14
h-14
rounded-2xl
flex
items-center
justify-center
text-white
bg-gradient-to-br
${item.color}
group-hover:scale-110
transition
shadow-lg
`}>

<Icon
size={28}
/>


</div>


</div>



</div>



)


})

}


</div>








{/* Overview */}



<div className="
grid
md:grid-cols-3
gap-6
">



<div className="
bg-white
dark:bg-white/5
border
dark:border-white/10
rounded-3xl
p-6
">


<div className="
flex
items-center
gap-3
">

<Server
className="text-green-500"
/>


<h3 className="
font-semibold
dark:text-white
">

Platform Health

</h3>


</div>



<p className="
text-5xl
font-bold
text-green-500
mt-5
">

{data.overview.uptime}

</p>



<p className="
text-gray-400
mt-2
">

System uptime

</p>


</div>







<div className="
bg-white
dark:bg-white/5
border
dark:border-white/10
rounded-3xl
p-6
">


<h3 className="
font-semibold
dark:text-white
">

Active Sessions

</h3>


<p className="
text-5xl
font-bold
text-blue-500
mt-5
">

{data.overview.activeSessions}

</p>


<p className="
text-gray-400
mt-2
">

Users online now

</p>


</div>








<div className="
bg-white
dark:bg-white/5
border
dark:border-white/10
rounded-3xl
p-6
">


<h3 className="
font-semibold
dark:text-white
">

AI Cost Today

</h3>


<p className="
text-5xl
font-bold
text-purple-500
mt-5
">

${data.overview.aiCostToday}

</p>


<p className="
text-gray-400
mt-2
">

API consumption

</p>


</div>





</div>




</div>

)

}