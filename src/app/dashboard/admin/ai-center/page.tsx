export default function AIControlCenter(){

return(
<div>

<h1 className="text-3xl font-bold">
AI Control Center
</h1>


<div className="grid md:grid-cols-3 gap-5 mt-6">


{
[
"AI Status",
"Active Models",
"Running Agents"
].map(item=>(

<div 
key={item}
className="p-6 rounded-xl bg-white shadow"
>

<h2 className="font-semibold">
{item}
</h2>

<p className="text-2xl mt-3">
Active
</p>

</div>

))
}


</div>

</div>
)

}