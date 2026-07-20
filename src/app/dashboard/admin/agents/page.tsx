"use client";

import {
  Bot,
  Cpu,
  MoreVertical,
  Play,
  Pause,
  Sparkles,
  Trash2,
  Edit,
  Plus,
  X
} from "lucide-react";

import axios from "axios";
import {useEffect,useState} from "react";
import { authClient } from "@/lib/auth-client";


interface Agent{

_id:string;

name:string;
model:string;
status?:string;
tasks?:number;
icon?:string;

}



export default function AgentsPage(){

const [agents,setAgents]=useState<Agent[]>([]);

const [showCreate,setShowCreate] = useState(false);

const [openMenu,setOpenMenu] = useState<string | null>(null);

const [editAgent,setEditAgent]=useState<Agent | null>(null);
const {data:session}=authClient.useSession();

const email=session?.user?.email;

const [newAgent,setNewAgent] = useState({

name:"",
model:"GPT-5",
status:"Active",
tasks:0,
icon:"🤖"

});


useEffect(()=>{

if(email){
loadAgents();
}

},[email]);



const loadAgents=async()=>{

if(!email) return;


try{

const {data}=await axios.get(
`${process.env.NEXT_PUBLIC_API_URL}/api/agents/${email}`
);


setAgents(data.agents);


}catch(error){

console.log(error);

}

};


const createAgent = async()=>{

try{


await axios.post(

`${process.env.NEXT_PUBLIC_API_URL}/api/agents`,

{
...newAgent,
userEmail:email
}

);


setShowCreate(false);

loadAgents();


}catch(error){

console.log(error);

}

};


const deleteAgent=async(id:string)=>{

try{

await axios.delete(
`${process.env.NEXT_PUBLIC_API_URL}/api/agents/${id}`
);


setOpenMenu(null);

loadAgents();


}catch(error){

console.log(error);

}

};


const updateAgent=async()=>{

try{


await axios.put(

`${process.env.NEXT_PUBLIC_API_URL}/api/agents/${editAgent?._id}`,

editAgent

);


setEditAgent(null);

loadAgents();



}catch(error){

console.log(error);

}


};


const activeAgents =
agents.filter(
agent=>agent.status==="Active"
).length;


const pausedAgents =
agents.filter(
agent=>agent.status==="Paused"
).length;



return(
<div className="space-y-8">


<div className="flex justify-between items-center">

<div>

<h1 className="text-3xl font-bold dark:text-white">
AI Agents
</h1>

<p className="text-gray-500 mt-2">
Manage autonomous AI workflows.
</p>

</div>


<button
onClick={()=>setShowCreate(true)}
className="
flex items-center gap-2
px-5 py-3
rounded-xl
bg-gradient-to-r
from-blue-600
to-purple-600
text-white
font-semibold
"
>

<Sparkles size={18}/>

Create Agent

</button>


</div>



<div className="
bg-white dark:bg-gray-900
rounded-3xl
border
overflow-hidden
">


<div className="overflow-x-auto">

<table className="w-full">

<thead>

<tr className="
border-b
bg-gray-50
dark:bg-gray-800
text-gray-500
">

<th className="p-5 text-left">
Agent
</th>

<th className="p-5 text-left">
Model
</th>

<th className="p-5 text-left">
Tasks
</th>

<th className="p-5 text-left">
Status
</th>

<th className="p-5">
Action
</th>

</tr>

</thead>



<tbody>

{
agents.map(agent=>(

<tr
key={agent._id}
className="
border-b
hover:bg-gray-50
dark:hover:bg-gray-800
"
>

<td className="p-5">

<div className="flex items-center gap-4">

<div
className="
w-12 h-12
rounded-2xl
bg-gradient-to-br
from-blue-500
to-purple-500
flex
items-center
justify-center
text-white
text-xl
font-bold
"
>
{
  agent.icon
  ?
  agent.icon
  :
  agent.name?.charAt(0).toUpperCase()
}
</div>


<div>

<h3 className="font-semibold dark:text-white">
{agent.name}
</h3>

<p className="text-sm text-gray-500">
AI Autonomous Agent
</p>

</div>


</div>

</td>



<td className="p-5">

<span className="
flex items-center gap-2
px-3 py-1
rounded-full
bg-blue-100
text-blue-700
dark:bg-blue-900/30
dark:text-blue-400
w-fit
">

<Cpu size={16}/>

{agent.model}

</span>

</td>



<td className="p-5 dark:text-gray-300">

{agent.tasks} Tasks

</td>



<td className="p-5">

<div className={
agent.status==="Active"
?
"flex items-center gap-2 text-green-500"
:
"flex items-center gap-2 text-yellow-500"
}>


<span className="
w-2 h-2
rounded-full
bg-current
"/>

{agent.status}

</div>

</td>



<td className="p-5 text-center">

<div className="relative">


<button
onClick={()=>setOpenMenu(
openMenu===agent.name
?null
:agent.name
)}
className="
p-2 rounded-xl
hover:bg-gray-100
dark:hover:bg-gray-700
"
>

<MoreVertical size={20}/>

</button>




{
openMenu===agent.name && (

<div
className="
absolute
right-0
top-12
w-40
bg-white
dark:bg-gray-800
border
rounded-xl
shadow-xl
z-20
p-2
"
>


<button

onClick={()=>{

setEditAgent(agent);

setOpenMenu(null);

}}

className="
flex
items-center
gap-2
w-full
px-3
py-2
rounded-lg
hover:bg-gray-100
dark:hover:bg-gray-700
"

>

<Edit size={16}/>

Edit

</button>



<button

onClick={()=>deleteAgent(agent._id)}
className="
flex
items-center
gap-2
w-full
px-3
py-2
rounded-lg
text-red-500
hover:bg-red-50
"

>

<Trash2 size={16}/>

Delete

</button>


</div>

)

}


</div>
</td>


</tr>

))

}

</tbody>


</table>

</div>

</div>





<div className="grid md:grid-cols-3 gap-6">


<div className="
p-6 rounded-2xl
bg-gradient-to-br
from-blue-500 to-indigo-600
text-white
">

<Bot/>

<h2 className="text-3xl font-bold mt-3">
{agents.length}
</h2>

<p>Total Agents</p>

</div>



<div className="
p-6 rounded-2xl
bg-gradient-to-br
from-green-500 to-emerald-600
text-white
">

<Play/>

<h2 className="text-3xl font-bold mt-3">
{activeAgents}
</h2>

<p>Running Agents</p>

</div>



<div className="
p-6 rounded-2xl
bg-gradient-to-br
from-orange-500 to-red-500
text-white
">

<Pause/>

<h2 className="text-3xl font-bold mt-3">
{pausedAgents}
</h2>

<p>Paused Agents</p>

</div>


</div>

{
showCreate && (

<div className="
fixed inset-0
bg-black/60
backdrop-blur-sm
flex
items-center
justify-center
z-50
px-4
">


<div className="
w-full
max-w-md
bg-white
dark:bg-gray-900
rounded-3xl
shadow-2xl
border
dark:border-gray-800
p-8
">


{/* Header */}

<div className="
flex
items-center
justify-between
mb-6
">


<div>

<h2 className="
text-2xl
font-bold
dark:text-white
">

Create AI Agent

</h2>


<p className="
text-sm
text-gray-500
mt-1
">

Build your autonomous AI workflow

</p>


</div>


<button

onClick={()=>setShowCreate(false)}

className="
p-2
rounded-xl
hover:bg-gray-100
dark:hover:bg-gray-800
"

>

<X size={20}/>

</button>


</div>





{/* Icon */}

<label className="
text-sm
font-medium
dark:text-gray-300
">

Agent Icon

</label>


<input

className="
w-full
mt-2
p-3
rounded-xl
border
bg-gray-50
dark:bg-gray-800
dark:border-gray-700
dark:text-white
outline-none
focus:ring-2
focus:ring-blue-500
"

placeholder="🤖"

value={newAgent.icon}

onChange={(e)=>
setNewAgent({
...newAgent,
icon:e.target.value
})
}

/>





{/* Name */}

<label className="
block
mt-5
text-sm
font-medium
dark:text-gray-300
">

Agent Name

</label>


<input

className="
w-full
mt-2
p-3
rounded-xl
border
bg-gray-50
dark:bg-gray-800
dark:border-gray-700
dark:text-white
outline-none
focus:ring-2
focus:ring-blue-500
"

placeholder="Example: Marketing Assistant"

value={newAgent.name}

onChange={(e)=>
setNewAgent({

...newAgent,

name:e.target.value

})
}

/>





{/* Model */}

<label className="
block
mt-5
text-sm
font-medium
dark:text-gray-300
">

AI Model

</label>


<select

className="
w-full
mt-2
p-3
rounded-xl
border
bg-gray-50
dark:bg-gray-800
dark:border-gray-700
dark:text-white
"

value={newAgent.model}

onChange={(e)=>
setNewAgent({

...newAgent,

model:e.target.value

})
}

>

<option>
GPT-5
</option>

<option>
Gemini-2.0-Flash
</option>

<option>
Claude-3
</option>


</select>





{/* Status */}

<label className="
block
mt-5
text-sm
font-medium
dark:text-gray-300
">

Status

</label>


<select

className="
w-full
mt-2
p-3
rounded-xl
border
bg-gray-50
dark:bg-gray-800
dark:border-gray-700
dark:text-white
"

value={newAgent.status}

onChange={(e)=>
setNewAgent({

...newAgent,

status:e.target.value

})
}

>


<option>
Active
</option>


<option>
Paused
</option>


</select>





{/* Button */}

<button

onClick={createAgent}

className="
mt-7
w-full
py-3.5
rounded-xl
bg-gradient-to-r
from-blue-600
to-purple-600
text-white
font-semibold
flex
items-center
justify-center
gap-2
hover:scale-[1.02]
transition
"

>


<Plus size={18}/>

Create AI Agent


</button>



</div>


</div>

)

}





{
editAgent && (

<div className="
fixed
inset-0
bg-black/60
backdrop-blur-sm
flex
items-center
justify-center
z-50
px-4
py-6
overflow-y-auto
">


<div className="
w-full
max-w-md
bg-white
dark:bg-gray-900
rounded-3xl
shadow-2xl
border
dark:border-gray-800
p-8
my-auto
max-h-[90vh]
overflow-y-auto
scrollbar-thin
">



{/* Header */}

<div className="
flex
items-center
justify-between
mb-6
">


<div>

<h2 className="
text-2xl
font-bold
dark:text-white
">

Edit AI Agent

</h2>


<p className="
text-sm
text-gray-500
mt-1
">

Update your AI workflow settings

</p>


</div>



<button

onClick={()=>setEditAgent(null)}

className="
p-2
rounded-xl
hover:bg-gray-100
dark:hover:bg-gray-800
"

>

<X size={20}/>

</button>


</div>






{/* Icon */}

<label className="
text-sm
font-medium
dark:text-gray-300
">

Agent Icon

</label>


<input

className="
w-full
mt-2
p-3
rounded-xl
border
bg-gray-50
dark:bg-gray-800
dark:border-gray-700
dark:text-white
outline-none
focus:ring-2
focus:ring-blue-500
"

value={editAgent.icon || ""}

onChange={(e)=>

setEditAgent({

...editAgent,

icon:e.target.value

})

}

/>






{/* Name */}

<label className="
block
mt-5
text-sm
font-medium
dark:text-gray-300
">

Agent Name

</label>


<input

className="
w-full
mt-2
p-3
rounded-xl
border
bg-gray-50
dark:bg-gray-800
dark:border-gray-700
dark:text-white
outline-none
focus:ring-2
focus:ring-blue-500
"

value={editAgent.name}

onChange={(e)=>

setEditAgent({

...editAgent,

name:e.target.value

})

}

/>







{/* Model */}

<label className="
block
mt-5
text-sm
font-medium
dark:text-gray-300
">

AI Model

</label>


<select

className="
w-full
mt-2
p-3
rounded-xl
border
bg-gray-50
dark:bg-gray-800
dark:border-gray-700
dark:text-white
"

value={editAgent.model}

onChange={(e)=>

setEditAgent({

...editAgent,

model:e.target.value

})

}

>


<option>
GPT-5
</option>


<option>
Gemini-2.0-Flash
</option>


<option>
Claude-3
</option>


</select>








{/* Status */}

<label className="
block
mt-5
text-sm
font-medium
dark:text-gray-300
">

Status

</label>


<select

className="
w-full
mt-2
p-3
rounded-xl
border
bg-gray-50
dark:bg-gray-800
dark:border-gray-700
dark:text-white
"

value={editAgent.status || "Active"}

onChange={(e)=>

setEditAgent({

...editAgent,

status:e.target.value

})

}

>


<option>
Active
</option>


<option>
Paused
</option>


</select>







{/* Tasks */}

<label className="
block
mt-5
text-sm
font-medium
dark:text-gray-300
">

Tasks

</label>


<input

type="number"

className="
w-full
mt-2
p-3
rounded-xl
border
bg-gray-50
dark:bg-gray-800
dark:border-gray-700
dark:text-white
"

value={editAgent.tasks || 0}

onChange={(e)=>

setEditAgent({

...editAgent,

tasks:Number(e.target.value)

})

}

/>







<button

onClick={updateAgent}

className="
mt-7
w-full
py-3.5
rounded-xl
bg-gradient-to-r
from-blue-600
to-purple-600
text-white
font-semibold
flex
items-center
justify-center
gap-2
hover:scale-[1.02]
transition
"

>


<Edit size={18}/>

Save Changes


</button>



</div>


</div>

)

}
</div>



)

}