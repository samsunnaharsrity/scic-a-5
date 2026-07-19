"use client";

import { useState } from "react";
import { Send, Bot, User } from "lucide-react";
import axios from "axios";
import { authClient } from "@/lib/auth-client";


interface Message {
  role: "user" | "ai";
  text: string;
}



export default function ChatPage(){


const [message,setMessage] = useState("");

const [messages,setMessages] = useState<Message[]>([
  {
    role:"ai",
    text:"Hello! How can I help you today?"
  }
]);


const [loading,setLoading] = useState(false);
const {data:session}=authClient.useSession();

const email=session?.user?.email;


const sendMessage = async()=>{


if(!message.trim()) return;


const userMessage = message;


setMessages(prev=>[
...prev,
{
role:"user",
text:userMessage
}
]);


setMessage("");

setLoading(true);



try{


const {data} = await axios.post(

`${process.env.NEXT_PUBLIC_API_URL}/api/ai/chat`,

{
 message,

 email
}

);



console.log("AI RESPONSE:", data);



setMessages(prev=>[

...prev,

{

role:"ai",

text:data.reply

}

]);


}
catch(error:any){


console.log(
"CHAT ERROR:",
error.response?.data || error.message
);



setMessages(prev=>[

...prev,

{

role:"ai",

text:"Sorry, AI response failed."

}

]);


}
finally{


setLoading(false);


}


};




return (

<div className="h-[calc(100vh-120px)] border rounded-xl flex flex-col bg-background">


{/* Header */}

<div className="p-5 border-b">

<h1 className="text-xl font-bold flex items-center gap-2">

<Bot size={22}/>

AI Chat Assistant

</h1>

</div>





{/* Messages */}

<div className="flex-1 p-5 overflow-y-auto space-y-4">


{
messages.map((msg,index)=>(


<div
key={index}
className={`flex gap-3 ${
msg.role==="user"
?"justify-end"
:"justify-start"
}`}
>


{
msg.role==="ai" &&

<div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">

<Bot size={18}/>

</div>

}



<div
className={`max-w-[70%] p-4 rounded-xl ${
msg.role==="user"
?
"bg-primary text-white"
:
"bg-muted"
}`}
>

{msg.text}

</div>



{
msg.role==="user" &&

<div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">

<User size={18}/>

</div>

}



</div>


))

}



{
loading &&

<div className="bg-muted p-4 rounded-lg w-fit">

AI is typing...

</div>

}


</div>







{/* Input */}

<div className="p-4 border-t flex gap-3">


<input

value={message}

onChange={(e)=>setMessage(e.target.value)}

onKeyDown={(e)=>{

if(e.key==="Enter")
sendMessage();

}}

placeholder="Ask anything..."

className="
flex-1
border
rounded-lg
p-3
bg-background
"

/>



<button

onClick={sendMessage}

className="
px-5
rounded-lg
bg-primary
text-white
flex
items-center
gap-2
"

>


<Send size={18}/>

Send


</button>


</div>


</div>


)

}