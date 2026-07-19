"use client";

import {
  Brain,
  Sparkles,
  Cpu,
  Database,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";


const researchAreas = [
  {
    title: "Agentic AI Systems",
    description:
      "Researching autonomous AI agents that can reason, plan and complete complex tasks.",
    icon: Brain,
  },
  {
    title: "Large Language Models",
    description:
      "Exploring advanced LLM capabilities for better conversations and automation.",
    icon: Sparkles,
  },
  {
    title: "AI Performance",
    description:
      "Improving response quality, speed and reliability of AI workflows.",
    icon: Cpu,
  },
  {
    title: "Knowledge Intelligence",
    description:
      "Building smarter systems for document understanding and information retrieval.",
    icon: Database,
  },
  {
    title: "Responsible AI",
    description:
      "Developing secure, transparent and trustworthy AI solutions.",
    icon: ShieldCheck,
  },
  {
    title: "Future AI Innovation",
    description:
      "Exploring the next generation of AI-powered productivity tools.",
    icon: TrendingUp,
  },
];


export default function ResearchPage() {


return (

<main className="
min-h-screen
bg-slate-50
dark:bg-slate-950
py-20
">


{/* Hero */}

<section className="
max-w-6xl
mx-auto
px-6
text-center
">


<div className="
inline-flex
items-center
gap-2
rounded-full
bg-violet-100
dark:bg-violet-900/30
px-4
py-2
text-sm
font-semibold
text-violet-600
">

<Sparkles size={18}/>

AI Research Lab

</div>



<h1 className="
mt-6
text-4xl
md:text-6xl
font-black
text-slate-900
dark:text-white
">

Building The Future
With Artificial Intelligence

</h1>



<p className="
mt-6
max-w-3xl
mx-auto
text-lg
text-slate-600
dark:text-slate-400
">

Our research focuses on creating intelligent AI agents,
advanced automation systems and next-generation AI
experiences.

</p>


</section>





{/* Research Areas */}

<section className="
max-w-6xl
mx-auto
px-6
mt-16
">


<h2 className="
text-3xl
font-bold
dark:text-white
text-center
mb-10
">

Research Areas

</h2>



<div className="
grid
md:grid-cols-2
lg:grid-cols-3
gap-6
">


{
researchAreas.map((item)=>{


const Icon=item.icon;


return (

<div
key={item.title}
className="
rounded-3xl
bg-white
dark:bg-slate-900
p-7
border
border-slate-200
dark:border-slate-800
shadow-sm
hover:shadow-xl
transition
"
>


<div className="
h-14
w-14
rounded-2xl
bg-violet-100
dark:bg-violet-900/30
flex
items-center
justify-center
text-violet-600
">

<Icon size={28}/>

</div>



<h3 className="
mt-5
text-xl
font-bold
dark:text-white
">

{item.title}

</h3>



<p className="
mt-3
text-sm
leading-6
text-slate-600
dark:text-slate-400
">

{item.description}

</p>


</div>

)

})

}


</div>


</section>






{/* Vision Section */}

<section className="
max-w-5xl
mx-auto
px-6
mt-20
">


<div className="
rounded-3xl
bg-gradient-to-r
from-violet-600
to-indigo-600
p-10
text-white
text-center
">


<h2 className="
text-3xl
font-bold
">

Our AI Vision

</h2>


<p className="
mt-4
text-white/80
max-w-3xl
mx-auto
">

We believe AI should not only answer questions,
but also understand goals, make decisions and
help people achieve more.

</p>


</div>


</section>



</main>

)

}