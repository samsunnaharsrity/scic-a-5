"use client";

import Link from "next/link";
import {
  ArrowRight,
  Brain,
  ShieldCheck,
  Users,
  Rocket
} from "lucide-react";


export default function AboutPreview(){

return (

<section
className="
py-20
bg-zinc-50
dark:bg-zinc-950
border-t
border-zinc-200
dark:border-zinc-800
"
>


<div className="
max-w-6xl
mx-auto
px-4
grid
lg:grid-cols-2
gap-12
items-center
">


{/* Left Content */}

<div>


<span className="
inline-flex
px-4
py-2
rounded-full
bg-violet-100
dark:bg-violet-900/30
text-violet-600
dark:text-violet-400
text-sm
font-semibold
">

About AgenticAI

</span>



<h2 className="
mt-5
text-3xl
sm:text-4xl
font-bold
text-zinc-900
dark:text-white
leading-tight
">

Building the Future with
Autonomous AI Agents

</h2>



<p className="
mt-5
text-zinc-600
dark:text-zinc-400
leading-relaxed
">

AgenticAI helps individuals and businesses
automate complex workflows using intelligent
AI agents. Create, customize and deploy AI
assistants that work for you.

</p>



<Link
href="/about"
className="
inline-flex
items-center
gap-2
mt-8
rounded-xl
bg-violet-600
px-6
py-3
text-white
font-semibold
hover:bg-violet-700
transition
"
>

Learn More About Us

<ArrowRight size={18}/>

</Link>


</div>





{/* Right Cards */}

<div className="
grid
grid-cols-2
gap-5
">


<div className="
rounded-2xl
bg-white
dark:bg-zinc-900
border
border-zinc-200
dark:border-zinc-800
p-6
"
>

<Brain
className="
text-violet-600
mb-4
"
/>

<h3 className="
font-bold
text-lg
dark:text-white
">

AI Powered

</h3>

<p className="
text-sm
text-zinc-500
mt-2
">

Advanced autonomous agents

</p>


</div>





<div className="
rounded-2xl
bg-white
dark:bg-zinc-900
border
border-zinc-200
dark:border-zinc-800
p-6
"
>

<ShieldCheck
className="
text-green-600
mb-4
"
/>

<h3 className="
font-bold
text-lg
dark:text-white
">

Secure Platform

</h3>

<p className="
text-sm
text-zinc-500
mt-2
">

Enterprise grade security

</p>


</div>






<div className="
rounded-2xl
bg-white
dark:bg-zinc-900
border
border-zinc-200
dark:border-zinc-800
p-6
"
>

<Users
className="
text-blue-600
mb-4
"
/>

<h3 className="
font-bold
text-lg
dark:text-white
">

Growing Community

</h3>

<p className="
text-sm
text-zinc-500
mt-2
">

Thousands of AI users

</p>


</div>






<div className="
rounded-2xl
bg-white
dark:bg-zinc-900
border
border-zinc-200
dark:border-zinc-800
p-6
"
>

<Rocket
className="
text-orange-500
mb-4
"
/>

<h3 className="
font-bold
text-lg
dark:text-white
">

Future Ready

</h3>

<p className="
text-sm
text-zinc-500
mt-2
">

Built for tomorrow

</p>


</div>


</div>


</div>


</section>

);

}