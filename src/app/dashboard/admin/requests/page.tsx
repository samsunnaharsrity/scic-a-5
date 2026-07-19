"use client";

import {
Search,
Clock,
CheckCircle,
XCircle
} from "lucide-react";


const requests=[

{
user:"john@gmail.com",
tool:"AI Chat",
model:"Gemini 2.5",
status:"Success",
time:"2 min ago"
},

{
user:"sarah@gmail.com",
tool:"Content Generator",
model:"GPT-4",
status:"Success",
time:"5 min ago"
},

{
user:"alex@gmail.com",
tool:"Document Analyzer",
model:"Claude",
status:"Failed",
time:"10 min ago"
}


];


export default function AIRequestsPage(){


return (

<div className="
min-h-screen
bg-slate-50
dark:bg-slate-950
p-6
">


<div className="mb-8">

<h1 className="
text-3xl
font-bold
dark:text-white
">

AI Request Logs

</h1>


<p className="
text-slate-500
mt-2
">

Track every AI request made by users.

</p>


</div>



{/* Search */}

<div className="
bg-white
dark:bg-slate-900
rounded-xl
p-4
mb-6
flex
items-center
gap-3
">

<Search
className="text-slate-400"
/>


<input
placeholder="Search user or tool..."
className="
bg-transparent
outline-none
w-full
dark:text-white
"
/>


</div>




<div className="
bg-white
dark:bg-slate-900
rounded-2xl
overflow-hidden
shadow
">


<table className="
w-full
text-sm
">


<thead className="
bg-slate-100
dark:bg-slate-800
">

<tr>

<th className="p-4 text-left">
User
</th>

<th className="p-4 text-left">
Tool
</th>

<th className="p-4 text-left">
Model
</th>

<th className="p-4 text-left">
Status
</th>

<th className="p-4 text-left">
Time
</th>

</tr>

</thead>



<tbody>


{
requests.map((item,index)=>(


<tr
key={index}
className="
border-t
dark:border-slate-800
"
>


<td className="p-4 dark:text-white">
{item.user}
</td>


<td className="p-4 dark:text-white">
{item.tool}
</td>


<td className="p-4 dark:text-white">
{item.model}
</td>


<td className="p-4">

{
item.status==="Success"?

<span className="
flex items-center gap-2
text-green-600
">

<CheckCircle size={16}/>
Success

</span>

:

<span className="
flex items-center gap-2
text-red-600
">

<XCircle size={16}/>
Failed

</span>

}

</td>


<td className="p-4 text-slate-500">

<div className="flex gap-2 items-center">

<Clock size={15}/>

{item.time}

</div>

</td>


</tr>


))

}


</tbody>


</table>


</div>



</div>

)

}