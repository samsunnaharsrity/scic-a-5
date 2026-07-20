"use client";

import {
  Sparkles,
  Bot,
  SlidersHorizontal,
  Play,
  Cpu,
  Zap,
  Loader2
} from "lucide-react";

import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";


export default function Playground(){


const [model,setModel]=useState(
  "llama-3.1-8b-instant"
);

const [task,setTask]=useState(
"Chat Assistant"
);

const [prompt,setPrompt]=useState("");

const [temperature,setTemperature]=useState(0.7);

const [tokens,setTokens]=useState(1000);


const [response,setResponse]=useState("");

const [loading,setLoading]=useState(false);





const runAI = async()=>{


if(!prompt){

toast.error(
"Please enter a prompt"
);

return;

}


try{


setLoading(true);

setResponse("");



/*
 Replace this API with your backend
*/

const {data}=await axios.post(

`${process.env.NEXT_PUBLIC_API_URL}/api/ai/playground`,

{

model,
task,
prompt,
temperature,
tokens

}

);



setResponse(
  data.result
);


}

catch(error){


console.log(error);


toast.error(
"AI generation failed"
);


}

finally{

setLoading(false);

}


};




return (

<div className="space-y-8">



{/* Header */}

<div className="flex items-center gap-3">


<div className="
h-12
w-12
rounded-2xl
bg-primary/10
flex
items-center
justify-center
">


<Sparkles
className="text-primary"
/>


</div>



<div>

<h1 className="
text-3xl
font-bold
">

AI Playground 🪄

</h1>


<p className="
text-muted-foreground
">

Test AI models, prompts and parameters.

</p>


</div>


</div>









<div className="
grid
lg:grid-cols-3
gap-6
">



{/* Controls */}


<div className="
lg:col-span-2
rounded-3xl
border
bg-card
p-6
space-y-6
">





<div className="
flex
gap-2
items-center
font-semibold
">

<Bot
size={20}
className="text-primary"
/>

Model Configuration

</div>







<div className="
grid
md:grid-cols-2
gap-4
">


<div>

<label className="text-sm font-medium">

AI Model

</label>


<select

value={model}

onChange={(e)=>
setModel(e.target.value)
}

className="
mt-2
w-full
rounded-xl
border
bg-background
p-3
"

>


<option>
Gemini 2.5 Flash
</option>

<option>
GPT-5
</option>

<option>
Claude Sonnet
</option>


</select>


</div>







<div>


<label className="text-sm font-medium">

Task Type

</label>



<select

value={task}

onChange={(e)=>
setTask(e.target.value)
}

className="
mt-2
w-full
rounded-xl
border
bg-background
p-3
"

>


<option>
Chat Assistant
</option>


<option>
Content Generator
</option>


<option>
Data Analyzer
</option>


<option>
Document Intelligence
</option>


</select>



</div>


</div>








<div>


<label className="text-sm font-medium">

Your Prompt

</label>



<textarea


value={prompt}

onChange={(e)=>
setPrompt(e.target.value)
}


placeholder="Ask AI anything..."

className="
mt-2
min-h-[180px]
w-full
rounded-2xl
border
bg-background
p-4
resize-none
focus:ring-2
focus:ring-primary
outline-none
"


/>



</div>










<div className="
grid
md:grid-cols-2
gap-5
">



<div className="
rounded-xl
border
p-4
bg-muted/30
">


<div className="
flex
items-center
gap-2
mb-3
">


<SlidersHorizontal size={18}/>

Temperature

<span className="ml-auto text-sm">

{temperature}

</span>


</div>


<input

type="range"

min="0"
max="1"
step="0.1"

value={temperature}

onChange={(e)=>
setTemperature(
Number(e.target.value)
)
}

className="w-full"

/>


</div>







<div className="
rounded-xl
border
p-4
bg-muted/30
">


<div className="
flex
items-center
gap-2
mb-3
">

<Zap size={18}/>

Max Tokens

</div>



<input

type="number"

value={tokens}

onChange={(e)=>
setTokens(
Number(e.target.value)
)
}

className="
w-full
rounded-lg
border
bg-background
p-2
"

/>


</div>



</div>








<button

onClick={runAI}

disabled={loading}

className="
flex
items-center
justify-center
gap-2
w-full
rounded-xl
bg-primary
py-3
text-white
font-semibold
hover:opacity-90
disabled:opacity-50
"


>


{

loading ?

<>

<Loader2
className="animate-spin"
/>

Generating...

</>

:

<>

<Play size={18}/>

Run AI Experiment

</>

}


</button>







</div>









{/* Response */}



<div className="
rounded-3xl
border
bg-card
p-6
space-y-5
">


<div className="
flex
items-center
gap-2
font-semibold
">


<Cpu
size={20}
className="text-primary"
/>


AI Response


</div>





<div className="
min-h-[300px]
rounded-2xl
border
bg-muted/30
p-5
overflow-auto
">


{

response ?

<p className="
whitespace-pre-wrap
leading-relaxed
">

{response}

</p>


:

<div className="
h-full
flex
items-center
justify-center
text-center
text-muted-foreground
">


<div>

<Sparkles
size={35}
className="
mx-auto
mb-3
text-primary
"
/>


Waiting for AI output...

</div>


</div>

}



</div>




</div>





</div>





</div>


)

}