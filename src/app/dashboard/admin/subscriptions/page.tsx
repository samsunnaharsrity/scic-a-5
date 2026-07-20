"use client";

import { Eye } from "lucide-react";


export default function SubscriptionPage(){

const purchases=[
  {
    id:1,
    user:"Samsun Nahar",
    email:"samsun@gmail.com",
    plan:"Pro",
    amount:"$9.99",
    payment:"Stripe",
    transaction:"TXN_849302",
    purchaseDate:"20 July 2026",
    expiryDate:"20 August 2026",
    status:"Active"
  },
  {
    id:2,
    user:"Rahim Ahmed",
    email:"rahim@gmail.com",
    plan:"Premium",
    amount:"$19.99",
    payment:"Stripe",
    transaction:"TXN_948321",
    purchaseDate:"18 July 2026",
    expiryDate:"18 August 2026",
    status:"Active"
  },
  {
    id:3,
    user:"Karim Hasan",
    email:"karim@gmail.com",
    plan:"Free",
    amount:"$0",
    payment:"Free Plan",
    transaction:"FREE_10293",
    purchaseDate:"15 July 2026",
    expiryDate:"15 August 2026",
    status:"Expired"
  }
]


return(

<div>


<h1 className="text-3xl font-bold">
Subscription Purchases
</h1>


<p className="text-zinc-500 mt-2">
View customer subscription purchase details
</p>



<div className="
mt-6
bg-white
dark:bg-zinc-900
rounded-xl
shadow
overflow-x-auto
">


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
Payment
</th>

<th className="p-4 text-left">
Transaction
</th>

<th className="p-4 text-left">
Purchase Date
</th>

<th className="p-4 text-left">
Expiry
</th>

<th className="p-4 text-left">
Status
</th>

<th className="p-4 text-left">
Action
</th>

</tr>

</thead>



<tbody>

{
purchases.map(item=>(

<tr
key={item.id}
className="
border-t
dark:border-zinc-700
hover:bg-zinc-50
dark:hover:bg-zinc-800
transition
"
>


<td className="p-4">

<p className="font-semibold">
{item.user}
</p>

<p className="text-sm text-zinc-500">
{item.email}
</p>

</td>



<td className="p-4 font-medium">
{item.plan}
</td>



<td className="p-4">
{item.amount}
</td>



<td className="p-4">
{item.payment}
</td>



<td className="p-4 text-sm">
{item.transaction}
</td>



<td className="p-4">
{item.purchaseDate}
</td>



<td className="p-4">
{item.expiryDate}
</td>



<td className="p-4">

<span
className={`
px-3 py-1 rounded-full text-sm
${
item.status==="Active"
?
"bg-green-100 text-green-600"
:
"bg-red-100 text-red-600"
}
`}
>
{item.status}
</span>

</td>



<td className="p-4">

<button
className="
flex items-center gap-2
px-3 py-2
rounded-lg
bg-violet-600
text-white
text-sm
hover:bg-violet-700
"
>

<Eye size={16}/>

Details

</button>

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