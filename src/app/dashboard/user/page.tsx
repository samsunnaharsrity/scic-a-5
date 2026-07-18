import {
  Bot,
  Brain,
  Zap,
  Activity,
  CreditCard
} from "lucide-react";


export default function UserDashboard(){

const stats=[
 {
  title:"AI Agents",
  value:"12",
  icon:Brain
 },
 {
  title:"AI Requests",
  value:"8,540",
  icon:Zap
 },
 {
  title:"API Usage",
  value:"78%",
  icon:Activity
 },
 {
  title:"Plan",
  value:"Pro",
  icon:CreditCard
 }
]


return (
<div className="space-y-6">

<h1 className="text-3xl font-bold">
 Welcome back 👋
</h1>

<p className="text-muted-foreground">
 Manage your AI workspace
</p>


<div className="grid md:grid-cols-4 gap-5">

{
stats.map((item)=>{

const Icon=item.icon;

return (
<div 
key={item.title}
className="p-5 rounded-xl border bg-card"
>

<Icon className="mb-3"/>

<h3>{item.title}</h3>

<p className="text-3xl font-bold">
{item.value}
</p>

</div>
)

})
}

</div>


<div className="grid md:grid-cols-2 gap-5">

<div className="border rounded-xl p-6">

<h2 className="font-semibold">
Recent AI Activity
</h2>

<ul className="mt-4 space-y-3 text-sm">

<li>
Generated marketing content
</li>

<li>
Created new AI Agent
</li>

<li>
Used Chat Assistant
</li>

</ul>

</div>


<div className="border rounded-xl p-6">

<h2 className="font-semibold">
Quick Actions
</h2>


<div className="mt-4 space-y-3">

<button className="w-full p-3 rounded-lg bg-primary text-white">
Create AI Agent
</button>

<button className="w-full p-3 rounded-lg border">
Open AI Chat
</button>

</div>


</div>


</div>


</div>
)

}