"use client";

import {
  DollarSign,
  CreditCard,
  Users,
  TrendingUp
} from "lucide-react";


export default function RevenuePage(){


const stats=[
  {
    title:"Total Revenue",
    value:"$125,450",
    icon:DollarSign
  },
  {
    title:"Monthly Revenue",
    value:"$45,000",
    icon:TrendingUp
  },
  {
    title:"Transactions",
    value:"3,240",
    icon:CreditCard
  },
  {
    title:"Active Subscribers",
    value:"2,850",
    icon:Users
  }
]



const payments=[
  {
    user:"Samsun Nahar",
    plan:"Pro",
    amount:"$9.99",
    date:"20 July 2026",
    status:"Success"
  },
  {
    user:"Rahim Ahmed",
    plan:"Premium",
    amount:"$19.99",
    date:"18 July 2026",
    status:"Success"
  },
  {
    user:"Karim Hasan",
    plan:"Pro",
    amount:"$9.99",
    date:"15 July 2026",
    status:"Success"
  }
]



return(

<div className="space-y-8">


<div>

<h1 className="text-3xl font-bold">
Payments & Revenue
</h1>

<p className="text-zinc-500 mt-2">
Monitor your platform earnings and transactions
</p>

</div>




<div className="
grid
md:grid-cols-4
gap-5
">


{
stats.map((item)=>(

<div
key={item.title}
className="
bg-white
dark:bg-zinc-900
rounded-xl
shadow
p-6
border
"
>

<div className="
flex
items-center
justify-between
">

<h3 className="text-zinc-500">
{item.title}
</h3>


<item.icon
className="text-violet-600"
/>

</div>


<p className="
text-3xl
font-bold
mt-4
">
{item.value}
</p>


</div>

))
}


</div>





<div className="
bg-white
dark:bg-zinc-900
rounded-xl
shadow
p-6
">


<h2 className="
text-xl
font-bold
mb-5
">
Revenue Overview
</h2>


<div className="
grid
md:grid-cols-3
gap-5
">


<div>
<p className="text-zinc-500">
Pro Plan Revenue
</p>

<h3 className="text-2xl font-bold mt-2">
$24,980
</h3>
</div>



<div>
<p className="text-zinc-500">
Premium Revenue
</p>

<h3 className="text-2xl font-bold mt-2">
$18,450
</h3>
</div>



<div>
<p className="text-zinc-500">
Free Users
</p>

<h3 className="text-2xl font-bold mt-2">
2,450
</h3>
</div>


</div>


</div>






<div className="
bg-white
dark:bg-zinc-900
rounded-xl
shadow
overflow-hidden
">


<h2 className="
text-xl
font-bold
p-6
">
Recent Payments
</h2>



<table className="w-full">


<thead className="
bg-zinc-100
dark:bg-zinc-800
">

<tr>

<th className="p-4 text-left">
User
</th>

<th className="p-4 text-left">
Plan
</th>

<th className="p-4 text-left">
Amount
</th>

<th className="p-4 text-left">
Date
</th>

<th className="p-4 text-left">
Status
</th>

</tr>

</thead>



<tbody>

{
payments.map(payment=>(

<tr
key={payment.user}
className="
border-t
dark:border-zinc-700
"
>


<td className="p-4">
{payment.user}
</td>


<td className="p-4">
{payment.plan}
</td>


<td className="p-4 font-semibold">
{payment.amount}
</td>


<td className="p-4">
{payment.date}
</td>


<td className="p-4">

<span className="
bg-green-100
text-green-600
px-3 py-1
rounded-full
text-sm
">
{payment.status}
</span>

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