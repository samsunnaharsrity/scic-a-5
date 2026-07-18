export default function SubscriptionPage(){

return(

<div>

<h1 className="text-3xl font-bold">
Subscriptions
</h1>


<div className="grid md:grid-cols-3 gap-5 mt-6">

{
["Free","Pro","Premium"].map(plan=>(

<div
key={plan}
className="bg-white shadow rounded-xl p-6"
>

<h2 className="text-xl font-bold">
{plan}
</h2>

<p>
2450 users
</p>

</div>

))
}

</div>


</div>

)

}