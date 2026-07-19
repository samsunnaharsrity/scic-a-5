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





export default function UserAnalyticsPage(){


const {data:session}=authClient.useSession();


const [data,setData]=useState<any>(null);



useEffect(()=>{


console.log("USER EMAIL:", session?.user?.email);


if(!session?.user?.email){

console.log("No user email");

return;

}



axios.get(
`${process.env.NEXT_PUBLIC_API_URL}/api/analytics/user/${session.user.email}`
)
.then(res=>{

console.log("ANALYTICS:",res.data);

setData(res.data);

})
.catch(err=>{

console.log("API ERROR:",err);

});


},[session]);





if(!data?.stats){

return (

<div className="p-10">
Loading Analytics...
</div>

)

}




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
value={data.stats.requests}
icon={Activity}
/>


<Card
title="Chats"
value={data.stats.chats}
icon={MessageSquare}
/>


<Card
title="Agents"
value={data.stats.agents}
icon={Bot}
/>


<Card
title="Tokens"
value={data.stats.tokens}
icon={Zap}
/>


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

<p className="text-sm text-slate-500">
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