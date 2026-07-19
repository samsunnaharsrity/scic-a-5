"use client";

import {
  Search,
  MessageSquare,
  Clock,
  Trash2,
  ArrowRight,
  Loader2
} from "lucide-react";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";


interface Chat {

_id:string;
title:string;
message:string;
tool:string;
createdAt:string;

}



export default function ChatHistoryPage(){


const router = useRouter();


const [chats,setChats] = useState<Chat[]>([]);
const [loading,setLoading] = useState(true);
const [search,setSearch] = useState("");





useEffect(()=>{


const fetchChats = async()=>{


try{


const email = localStorage.getItem("userEmail");



if(!email){

setLoading(false);
return;

}




const res = await axios.get(

`${process.env.NEXT_PUBLIC_API_URL}/api/chat-history/${email}`

);



console.log("CHAT DATA:",res.data);



setChats(res.data.chats || []);



}
catch(error){

console.log("FETCH ERROR:",error);


}
finally{

setLoading(false);

}


};



fetchChats();


},[]);







const deleteChat = async(id:string)=>{


try{


if(!id){

console.log("No chat id");

return;

}



const confirmDelete =
confirm("Delete this conversation?");



if(!confirmDelete) return;




const res = await axios.delete(

`${process.env.NEXT_PUBLIC_API_URL}/api/chat-history/${id}`

);



console.log(res.data);




setChats(prev=>

prev.filter(

chat=>chat._id !== id

)

);



}
catch(error:any){

console.log(

"DELETE ERROR:",
error.response?.data || error.message

);


}


};







const filteredChats = chats.filter(chat=>

chat.title
?.toLowerCase()
.includes(search.toLowerCase())

);





return (

<div className="
min-h-screen
bg-slate-50
dark:bg-slate-950
p-6
">


<div className="mb-8">


<h1 className="
text-3xl
font-bold
text-slate-900
dark:text-white
">

Chat History

</h1>


<p className="
mt-2
text-slate-500
dark:text-slate-400
">

View and continue your previous AI conversations.

</p>


</div>





<div className="
bg-white
dark:bg-slate-900
rounded-2xl
p-4
flex
items-center
gap-3
mb-6
shadow-sm
">


<Search 
size={20}
className="text-slate-400"
/>



<input

value={search}

onChange={(e)=>setSearch(e.target.value)}

placeholder="Search conversations..."

className="
outline-none
bg-transparent
w-full
dark:text-white
"

/>



</div>






{

loading ?


<div className="
flex
justify-center
py-20
">

<Loader2 
size={35}
className="animate-spin"
/>

</div>



:

filteredChats.length===0 ?


<div className="
text-center
py-20
text-slate-500
">

No conversations found.

</div>



:


<div className="grid gap-5">


{

filteredChats.map(chat=>(


<div

key={chat._id}

className="
bg-white
dark:bg-slate-900
rounded-2xl
p-6
shadow-sm
border
border-slate-100
dark:border-slate-800
hover:shadow-xl
transition
"

>


<div className="
flex
justify-between
gap-5
">


<div className="flex gap-4">


<div className="
h-12
w-12
rounded-xl
bg-violet-100
dark:bg-violet-900/30
flex
items-center
justify-center
text-violet-600
">

<MessageSquare/>

</div>





<div>


<h2 className="
font-bold
text-lg
dark:text-white
">

{chat.title}

</h2>




<p className="
text-sm
text-slate-500
mt-1
">

{chat.message}

</p>




<div className="
flex
gap-4
mt-3
text-xs
text-slate-400
">


<span>

{chat.tool}

</span>




<span className="
flex
items-center
gap-1
">


<Clock size={14}/>


{new Date(chat.createdAt)
.toLocaleDateString()}


</span>


</div>


</div>


</div>






<div className="flex gap-2">



<button

onClick={()=>deleteChat(chat._id)}

className="
p-2
rounded-lg
hover:bg-red-50
text-red-500
"

>

<Trash2 size={18}/>

</button>





<button

onClick={()=>router.push(`/dashboard/chat/${chat._id}`)}

className="
flex
items-center
gap-1
rounded-xl
bg-violet-600
text-white
px-4
py-2
text-sm
"

>

Continue

<ArrowRight size={16}/>

</button>



</div>



</div>



</div>


))


}


</div>


}



</div>


)

}