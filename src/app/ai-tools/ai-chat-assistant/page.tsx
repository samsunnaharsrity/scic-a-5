"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import {
  Send,
  Bot,
  User,
  Loader2
} from "lucide-react";

import { useRouter } from "next/navigation";
import { useSession } from "@/lib/auth-client";


interface Message {
  role:"user" | "ai";
  text:string;
}


const suggestedPrompts = [
  "Explain Agentic AI",
  "How can AI improve productivity?",
  "Suggest AI tools for developers",
  "Create a project idea using AI"
];



export default function AIChatAssistant(){


const [message,setMessage]=useState("");

const [messages,setMessages]=useState<Message[]>([]);

const [loading,setLoading]=useState(false);



const router=useRouter();


const {data:session,isPending}=useSession();





useEffect(()=>{

if(!isPending && !session){

router.replace("/login");

}

},[session,isPending,router]);





if(isPending){

return(
<div className="min-h-screen flex items-center justify-center text-white">
Loading...
</div>
)

}



if(!session){

return(
<div className="min-h-screen flex items-center justify-center text-white">
Redirecting...
</div>
)

}





const sendMessage=async(text?:string)=>{


const userMessage=text || message;


if(!userMessage.trim()) return;



// add user message

setMessages(prev=>[
...prev,
{
role:"user",
text:userMessage
}
]);


setMessage("");



try{


setLoading(true);



const {data}=await axios.post(

`${process.env.NEXT_PUBLIC_API_URL}/api/ai/chat`,

{
message:userMessage,

// conversation history send
history:messages

}

);




// add AI response

setMessages(prev=>[

...prev,

{
role:"ai",
text:data.reply
}

]);


}


catch(error){


setMessages(prev=>[

...prev,

{
role:"ai",
text:"Something went wrong. Please try again."
}

]);


}

finally{

setLoading(false);

}



};








return(

<section className="
min-h-screen
bg-gradient-to-br
from-slate-950
via-purple-950
to-slate-900
text-white
flex
justify-center
py-10
px-4
">


<div className="w-full max-w-3xl">





{/* Header */}

<div className="text-center mb-8">


<div className="
mx-auto
w-20
h-20
rounded-full
bg-violet-600/20
border
border-violet-500
flex
items-center
justify-center
">


<Bot 
size={40}
className="text-violet-400"
/>


</div>



<h1 className="
mt-5
text-4xl
font-bold
bg-gradient-to-r
from-violet-400
to-purple-500
text-transparent
bg-clip-text
">

AI Chat Assistant

</h1>


<p className="text-slate-400 mt-2">
Smart AI assistant with memory
</p>


</div>







{/* Suggested Prompts */}


<div className="
flex
flex-wrap
gap-3
mb-6
justify-center
">


{
suggestedPrompts.map((item)=>(


<button

key={item}

onClick={()=>sendMessage(item)}

className="
bg-white/10
border
border-white/20
px-4
py-2
rounded-full
text-sm
hover:bg-violet-600
transition
"

>

{item}

</button>


))
}



</div>







{/* Chat Box */}

<div className="
bg-white/10
backdrop-blur-xl
border
border-white/20
rounded-3xl
p-6
shadow-xl
">





{/* Conversation History */}


<div className="
space-y-5
max-h-[450px]
overflow-y-auto
mb-5
">


{

messages.map((msg,index)=>(


<div

key={index}

className={`
flex
${msg.role==="user"
?
"justify-end"
:
"justify-start"
}
`}

>


<div

className={`
px-5
py-3
rounded-2xl
max-w-[80%]
flex
gap-3
items-start

${
msg.role==="user"
?
"bg-violet-600"
:
"bg-slate-800"
}

`}

>


{
msg.role==="user"
?
<User size={20}/>
:
<Bot 
size={20}
className="text-violet-400"
/>
}


<p>
{msg.text}
</p>


</div>


</div>


))


}





{/* Typing Indicator */}


{
loading &&

<div className="flex gap-3 items-center text-violet-300">


<Bot size={20}/>


<div className="
flex
gap-1
">


<span className="
w-2
h-2
bg-violet-400
rounded-full
animate-bounce
"/>


<span className="
w-2
h-2
bg-violet-400
rounded-full
animate-bounce
[animation-delay:200ms]
"/>


<span className="
w-2
h-2
bg-violet-400
rounded-full
animate-bounce
[animation-delay:400ms]
"/>


</div>


<span>
AI is typing...
</span>


</div>


}



</div>









<textarea


rows={3}


value={message}


onChange={(e)=>setMessage(e.target.value)}


onKeyDown={(e)=>{

if(e.key==="Enter" && !e.shiftKey){

e.preventDefault();

sendMessage();

}

}}


placeholder="Ask AI anything..."


className="
w-full
bg-slate-900/70
border
border-white/20
rounded-2xl
p-4
resize-none
outline-none
mt-4
"


/>






<button


onClick={()=>sendMessage()}


disabled={loading}


className="
mt-4
w-full
bg-gradient-to-r
from-violet-700
to-purple-900
py-4
rounded-2xl
font-semibold
flex
justify-center
gap-2
"


>


{
loading
?
<>
<Loader2 className="animate-spin"/>
Thinking...
</>

:

<>
<Send size={20}/>
Send Message
</>

}


</button>




</div>



</div>


</section>

)


}