"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import {
  Copy,
  Loader2,
  Sparkles,
  Wand2,
  RefreshCw,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useSession } from "@/lib/auth-client";


const contentTypes = [
  "Blog",
  "Email",
  "Facebook Post",
  "Instagram Caption",
  "LinkedIn Post",
  "Product Description",
];


// Prompt Templates
const templates = [
  {
    name: "Professional",
    value:
      "Write professional and engaging content with clear structure.",
  },

  {
    name: "Marketing",
    value:
      "Create persuasive marketing content focused on audience engagement and conversion.",
  },

  {
    name: "SEO Optimized",
    value:
      "Generate SEO friendly content with keywords and proper formatting.",
  },

  {
    name: "Creative",
    value:
      "Create creative, unique and attention grabbing content.",
  },
];


const lengths = [
  "Short",
  "Medium",
  "Long",
];


export default function AIContentGenerator() {


  const [type, setType] = useState("Blog");

  const [prompt, setPrompt] = useState("");

  const [template, setTemplate] = useState(
    templates[0].value
  );

  const [length, setLength] = useState("Medium");

  const [result, setResult] = useState("");

  const [loading, setLoading] = useState(false);



  const router = useRouter();

  const { data: session, isPending } = useSession();



  useEffect(() => {

    if(!isPending && !session){
      router.replace("/login");
    }

  },[session,isPending,router]);



  if(isPending){
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }



  if(!session){
    return (
      <div className="min-h-screen flex items-center justify-center">
        Redirecting...
      </div>
    );
  }





const generateContent = async () => {

 if(!prompt.trim()) return;


 try{

  setLoading(true);


  const {data} = await axios.post(

    `${process.env.NEXT_PUBLIC_API_URL}/api/ai/content`,

    {

      type,

      prompt,

      template,

      length

    }

  );


  setResult(data.content);



 }
 catch(error){

  console.log(error);

  setResult(
    "Failed to generate content"
  );

 }
 finally{

  setLoading(false);

 }

};





const copyContent = async()=>{

 await navigator.clipboard.writeText(result);

 alert("Content copied!");

};






return (

<div className="
rounded-3xl
border
bg-white
dark:bg-slate-900
shadow-xl
overflow-hidden
">


{/* Header */}

<div className="
bg-gradient-to-r
from-blue-900
to-violet-600
p-6
text-white
">


<div className="flex items-center gap-3">


<Sparkles size={32}/>


<div>

<h2 className="text-2xl font-bold">
AI Content Generator
</h2>


<p>
Generate professional AI content instantly
</p>


</div>


</div>


</div>





<div className="p-6 space-y-6">





{/* Content Type */}

<div>

<label className="font-semibold">
Content Type
</label>


<select

value={type}

onChange={(e)=>setType(e.target.value)}

className="
w-full
mt-2
rounded-xl
border
px-4
py-3
bg-transparent
"

>

{
contentTypes.map(item=>(

<option key={item}>
{item}
</option>

))
}

</select>


</div>





{/* Template */}

<div>

<label className="font-semibold">
Prompt Template
</label>


<select

value={template}

onChange={(e)=>setTemplate(e.target.value)}

className="
w-full
mt-2
rounded-xl
border
px-4
py-3
bg-transparent
"

>


{
templates.map(item=>(

<option
key={item.name}
value={item.value}
>

{item.name}

</option>

))
}


</select>


</div>





{/* Length */}

<div>

<label className="font-semibold">
Output Length
</label>


<div className="flex gap-3 mt-3">


{
lengths.map(item=>(


<button

key={item}

onClick={()=>setLength(item)}

className={`
px-5
py-2
rounded-xl
border
${
length===item
?
"bg-violet-600 text-white"
:
"bg-white dark:bg-slate-800"
}

`}

>

{item}

</button>


))
}


</div>


</div>







{/* Prompt */}

<div>


<label className="font-semibold">
Prompt
</label>


<textarea

rows={5}

value={prompt}

onChange={(e)=>setPrompt(e.target.value)}

placeholder="
Example: Write a blog about AI productivity tools
"

className="
w-full
mt-2
rounded-xl
border
px-4
py-3
resize-none
bg-transparent
"

/>


</div>







{/* Generate */}

<button

onClick={generateContent}

disabled={loading}

className="
w-full
bg-violet-600
hover:bg-violet-700
text-white
py-3
rounded-xl
font-semibold
flex
justify-center
gap-2
"

>


{
loading ?

<>

<Loader2 className="animate-spin"/>

Generating...

</>

:

<>

<Wand2/>

Generate Content

</>

}


</button>









{/* Result */}


{
result &&

<div className="
bg-slate-100
dark:bg-slate-800
rounded-2xl
p-5
">


<div className="flex justify-between mb-4">


<h3 className="font-bold text-lg">
Generated Content
</h3>



<div className="flex gap-4">


<button

onClick={generateContent}

className="
flex
items-center
gap-2
text-violet-600
"

>

<RefreshCw size={18}/>

Regenerate

</button>



<button

onClick={copyContent}

className="
flex
items-center
gap-2
text-violet-600
"

>

<Copy size={18}/>

Copy

</button>



</div>


</div>



<p className="
whitespace-pre-wrap
leading-7
">

{result}

</p>


</div>


}



</div>


</div>


);


}