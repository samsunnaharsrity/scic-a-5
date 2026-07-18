"use client";

import { useState } from "react";
import { Copy, Search, Sparkles, Wand2 } from "lucide-react";
import toast from "react-hot-toast";


const prompts = [

{
title:"Marketing Plan Generator",
category:"Marketing",
prompt:
"Generate a professional marketing plan with target audience, marketing channels, budget allocation, campaign strategy and expected ROI."
},


{
title:"SEO Blog Writer",
category:"SEO",
prompt:
"Write an SEO optimized blog article with keyword research, SEO title, meta description, headings, internal links and conclusion."
},


{
title:"Code Review Assistant",
category:"Programming",
prompt:
"Review this code and provide optimization suggestions, security improvements, performance issues and best practices."
},


{
title:"Business Strategy",
category:"Business",
prompt:
"Create a complete business growth strategy including market analysis, competitors, customer acquisition and revenue opportunities."
},


{
title:"Email Generator",
category:"Productivity",
prompt:
"Write a professional business email with a clear subject line, polite tone and effective communication."
},


{
title:"AI Product Description",
category:"E-commerce",
prompt:
"Create a high converting product description with benefits, features, SEO keywords and persuasive marketing copy."
},


{
title:"Social Media Content Creator",
category:"Social Media",
prompt:
"Generate 30 days of engaging social media content ideas with captions, hashtags and posting strategy."
},


{
title:"Customer Support AI",
category:"Support",
prompt:
"Create a customer support response system that handles complaints, refunds, questions and customer satisfaction."
},


{
title:"Data Analysis Assistant",
category:"Analytics",
prompt:
"Analyze this dataset and provide insights, trends, patterns, visualization ideas and business recommendations."
},


{
title:"Startup Idea Generator",
category:"Startup",
prompt:
"Generate innovative startup ideas with target users, business model, market opportunity and growth strategy."
},


{
title:"Learning Tutor AI",
category:"Education",
prompt:
"Act as a personal tutor. Explain complex topics simply with examples, exercises and learning roadmap."
},


{
title:"Resume Builder",
category:"Career",
prompt:
"Create a professional ATS-friendly resume highlighting skills, experience, achievements and career goals."
},


{
title:"UI/UX Design Assistant",
category:"Design",
prompt:
"Analyze this UI design and provide suggestions for better user experience, accessibility and modern design improvements."
}

];



export default function PromptLibrary(){


const [search,setSearch]=useState("");



const filteredPrompts = prompts.filter((item)=>
item.title.toLowerCase().includes(search.toLowerCase()) ||
item.category.toLowerCase().includes(search.toLowerCase())
);



const copyPrompt=(text:string)=>{

navigator.clipboard.writeText(text);

toast.success("Prompt copied");

};



return (

<div className="space-y-8">



{/* Header */}

<div className="flex items-center gap-4">


<div className="
rounded-2xl
bg-violet-100
dark:bg-violet-500/20
p-4
text-violet-600
dark:text-violet-400
">

<Sparkles size={32}/>

</div>



<div>

<h1 className="
text-3xl
font-bold
text-gray-900
dark:text-white
">

Prompt Library

</h1>


<p className="
text-gray-500
dark:text-gray-400
mt-1
">

Ready-to-use AI prompts to boost your productivity

</p>


</div>


</div>





{/* Search */}

<div className="relative max-w-xl">


<Search

className="
absolute
left-4
top-3.5
text-gray-400
"

size={20}

/>



<input

value={search}

onChange={(e)=>setSearch(e.target.value)}

placeholder="Search AI prompts..."

className="
w-full
rounded-xl
border
bg-white
dark:bg-neutral-900
dark:border-neutral-800
dark:text-white
py-3
pl-12
pr-4
outline-none
focus:ring-2
focus:ring-violet-500
"

/>


</div>





{/* Cards */}

<div className="
grid
md:grid-cols-2
xl:grid-cols-3
gap-6
">



{
filteredPrompts.map((item,index)=>(


<div

key={index}

className="
group
rounded-2xl
border
bg-white
dark:bg-neutral-900
dark:border-neutral-800
p-6
shadow-sm
hover:shadow-xl
transition
"


>


<div className="flex justify-between">


<span

className="
rounded-full
bg-violet-100
dark:bg-violet-500/20
text-violet-700
dark:text-violet-400
px-3
py-1
text-xs
font-semibold
"

>

{item.category}

</span>



<button

onClick={()=>copyPrompt(item.prompt)}

className="
rounded-lg
p-2
text-gray-500
hover:bg-gray-100
dark:hover:bg-neutral-800
dark:text-gray-400
"

>

<Copy size={18}/>

</button>


</div>




<h2 className="
mt-5
text-lg
font-bold
text-gray-900
dark:text-white
">

{item.title}

</h2>



<p className="
mt-3
text-sm
leading-relaxed
text-gray-600
dark:text-gray-400
">

{item.prompt}

</p>




<button

className="
mt-6
flex
items-center
justify-center
gap-2
w-full
rounded-xl
bg-violet-600
hover:bg-violet-700
text-white
py-3
transition
"

>


<Wand2 size={18}/>

Use Prompt


</button>



</div>


))


}


</div>





{
filteredPrompts.length===0 && (

<div className="
rounded-2xl
border
dark:border-neutral-800
bg-white
dark:bg-neutral-900
py-20
text-center
text-gray-500
dark:text-gray-400
">

No prompts found 🤖

</div>

)

}



</div>

)

}