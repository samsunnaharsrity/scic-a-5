"use client";

import axios from "axios";
import {useState} from "react";

export default function AIChatAssistant(){

const [message,setMessage]=useState("");
const [response,setResponse]=useState("");



const sendMessage = async () => {
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/ai/chat`,
      {
        message,
      }
    );

    setResponse(data.reply);
  } catch (error) {
    console.error(error);
  }
};



return(

<section className="min-h-screen bg-slate-600 text-white p-10">


<h1 className="text-4xl font-bold">
AI Chat Assistant
</h1>


<div className="mt-10 max-w-xl">


<textarea
className="w-full p-4 text-black rounded-xl"
placeholder="Ask AI..."
value={message}
onChange={(e)=>setMessage(e.target.value)}
/>


<button
  onClick={sendMessage}
  className="mt-4 bg-violet-600 px-6 py-3 rounded-xl"
>
  Generate
</button>


<div className="mt-6 bg-slate-800 p-5 rounded-xl">

{response}

</div>


</div>


</section>


)

}