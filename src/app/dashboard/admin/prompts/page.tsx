"use client";

import {
  Sparkles,
  Save,
  Copy,
  Trash2,
  Wand2,
} from "lucide-react";

import {useEffect, useState} from "react";
import axios from "axios";
import toast from "react-hot-toast";



interface Prompt{

_id:string;

title:string;

content:string;

category:string;

}




export default function PromptPage(){


const [prompt,setPrompt]=useState("");

const [title,setTitle]=useState("");

const [prompts,setPrompts]=useState<Prompt[]>([]);

const [selected,setSelected]=useState<string|null>(null);



const email="admin@gmail.com";



const templates=[

{
title:"Creative Content Writer",
content:
"You are a creative content writer. Create engaging and professional content."
},


{
title:"Code Assistant",
content:
"You are an expert software engineer. Provide clean and optimized code."
},


{
title:"Customer Support AI",
content:
"You are a helpful customer support assistant. Reply politely."
},


{
title:"Research Assistant",
content:
"You are a research assistant. Analyze information and provide accurate answers."
}

];





// Load prompts

useEffect(()=>{


loadPrompts();


},[]);




const loadPrompts=async()=>{


try{


const res =
await axios.get(
`${process.env.NEXT_PUBLIC_API_URL}/api/prompts/${email}`
);


setPrompts(res.data.data);


}
catch(error){

console.log(error);

}


};






// Save Prompt

const savePrompt=async()=>{


if(!prompt){

toast.error("Write prompt first");

return;

}



try{


await axios.post(

`${process.env.NEXT_PUBLIC_API_URL}/api/prompts`,

{

userEmail:email,

title:title || "Untitled Prompt",

content:prompt,

category:"AI"

}

);



toast.success("Prompt saved");


setPrompt("");

setTitle("");

loadPrompts();


}
catch(error){


toast.error("Save failed");


}



};







// Delete

const deletePrompt=async(id:string)=>{


try{


await axios.delete(

`${process.env.NEXT_PUBLIC_API_URL}/api/prompts/${id}`

);



toast.success("Deleted");


loadPrompts();



}
catch(error){

toast.error("Delete failed");

}



};


// copy prompt
const copyPrompt = async(text:string)=>{

try{

await navigator.clipboard.writeText(text);

toast.success("Prompt copied!");

}
catch(error){

toast.error("Copy failed");

}

};



return(


<div className="
min-h-screen
space-y-8
bg-gray-50
dark:bg-[#09090b]
p-6
rounded-2xl
">



{/* Header */}

<div>

<h1 className="
text-3xl
font-bold
flex
items-center
gap-3
dark:text-white
">

<Sparkles
className="text-purple-500"
/>

Prompt Management

</h1>


<p className="
mt-2
text-gray-500
">

Create and manage AI system prompts.

</p>


</div>






<div className="
grid
lg:grid-cols-3
gap-6
">





{/* Editor */}



<div className="
lg:col-span-2
bg-white
dark:bg-white/5
border
dark:border-white/10
rounded-2xl
p-6
">


<div className="
flex
items-center
gap-2
mb-4
">

<Wand2
className="text-indigo-500"
/>


<h2 className="
text-xl
font-semibold
dark:text-white
">

System Prompt

</h2>


</div>





<input

value={title}

onChange={(e)=>
setTitle(e.target.value)
}

placeholder="Prompt title"

className="
w-full
mb-4
rounded-xl
border
p-3
dark:bg-black/20
dark:text-white
"

/>





<textarea

value={prompt}

onChange={(e)=>
setPrompt(e.target.value)
}

className="
w-full
h-64
rounded-xl
border
p-5
resize-none
dark:bg-black/20
dark:text-white
"

placeholder="
Write your AI system prompt...
"

/>





<div className="
flex
justify-between
mt-5
">


<button

onClick={savePrompt}

className="
flex
items-center
gap-2
px-5
py-2
rounded-xl
bg-gradient-to-r
from-indigo-500
to-purple-600
text-white
"

>


<Save size={18}/>

Save Prompt

</button>




<button

onClick={()=>copyPrompt(prompt)}

className="
p-3
rounded-lg
border
dark:border-white/10
hover:bg-indigo-500/10
transition
"

>

<Copy size={18}/>

</button>



</div>


</div>








{/* Templates */}



<div className="
bg-white
dark:bg-white/5
border
dark:border-white/10
rounded-2xl
p-6
">


<h2 className="
text-lg
font-bold
dark:text-white
mb-5
">

Templates

</h2>




<div className="space-y-3">


{

templates.map(item=>(


<button

key={item.title}

onClick={()=>{

setTitle(item.title);

setPrompt(item.content);

}}

className="
w-full
text-left
p-4
rounded-xl
border
dark:border-white/10
hover:border-indigo-500
transition
dark:text-white
"

>

{item.title}


</button>


))


}



</div>



</div>




</div>








{/* Saved Prompts */}



<div className="
bg-white
dark:bg-white/5
border
dark:border-white/10
rounded-2xl
p-6
">


<h2 className="
text-xl
font-bold
dark:text-white
mb-5
">

Saved Prompts

</h2>




<div className="grid md:grid-cols-2 gap-4">


{

prompts.map(item=>(


<div
key={item._id}
className="
border
dark:border-white/10
rounded-xl
p-4
"
>


<h3 className="
font-semibold
dark:text-white
">

{item.title}

</h3>



<p className="
text-sm
text-gray-500
mt-2
line-clamp-3
">

{item.content}

</p>



<div className="
flex
justify-end
mt-3
">


<button

onClick={()=>deletePrompt(item._id)}

className="
text-red-500
"

>

<Trash2 size={18}/>

</button>


</div>


</div>


))


}



</div>


</div>






</div>


)


}