export default function AgentsPage(){

const agents=[
"Marketing Assistant",
"Code Generator",
"SEO Writer"
]


return (

<div>

<h1 className="text-3xl font-bold">
My AI Agents
</h1>


<div className="grid md:grid-cols-3 gap-5 mt-6">

{
agents.map(agent=>(

<div
key={agent}
className="border rounded-xl p-5"
>

<h2 className="font-semibold">
{agent}
</h2>


<button className="mt-4 text-sm text-primary">
Open Agent
</button>


</div>

))
}


</div>

</div>

)

}