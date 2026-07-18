"use client";


import axios from "axios";
import {useEffect,useState} from "react";


export default function AgentDetails({
params
}:{
params:{
id:string
}
}){


const [agent,setAgent]=useState<any>(null);



useEffect(()=>{


axios.get(

`${process.env.NEXT_PUBLIC_API_URL}/api/agents/${params.id}`

)
.then(res=>{

setAgent(res.data.data);

});


},[]);



if(!agent)
return <p>Loading...</p>;



return (

<div>


<h1 className="text-3xl font-bold">

{agent.icon} {agent.name}

</h1>


<p className="mt-3 text-muted-foreground">
{agent.description}
</p>



<div className="mt-8 border rounded-xl p-5">


<h2 className="font-semibold">
Chat with {agent.name}
</h2>


<input

placeholder="Ask this agent..."

className="
mt-4
w-full
border
rounded-lg
p-3
"

/>


</div>


</div>

)

}