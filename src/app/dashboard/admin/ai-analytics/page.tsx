export default function AIAnalytics(){

return(

<div>

<h1 className="text-3xl font-bold">
AI Usage Analytics
</h1>


<div className="grid md:grid-cols-3 gap-5 mt-6">

{
[
"Total Tokens",
"Requests",
"Cost"
].map(x=>(

<div 
key={x}
className="bg-white shadow rounded-xl p-6"
>

<h3>
{x}
</h3>

<p className="text-3xl font-bold mt-2">
25K
</p>

</div>

))
}


</div>


</div>

)

}