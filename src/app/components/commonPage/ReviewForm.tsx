"use client";

import { useState } from "react";
import axios from "axios";
import { Star, Send } from "lucide-react";
import { authClient } from "@/lib/auth-client";


export default function ReviewForm({
  toolId,
}: {
  toolId: string;
}) {


  const { data: session } = authClient.useSession();


  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);
  const [loading, setLoading] = useState(false);



  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();


    if(!comment.trim()){
      alert("Please write a review");
      return;
    }


    if(!session?.user){
      alert("Please login first");
      return;
    }



    try{

      setLoading(true);


      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/reviews`,
        {
          toolId,
          user: session.user.name,
          email: session.user.email,
          comment,
          rating,
        }
      );


      alert("Review added successfully");


      setComment("");
      setRating(5);


      window.location.reload();


    }
    catch(error){

      console.log(error);

      alert("Failed to add review");

    }
    finally{

      setLoading(false);

    }


  };



return (

<div
className="
mt-8
bg-white
dark:bg-slate-900
rounded-3xl
p-6
shadow-lg
border
border-slate-200
dark:border-slate-800
"
>


<div className="flex items-center gap-4 mb-6">


<div
className="
w-12
h-12
rounded-full
bg-violet-100
dark:bg-violet-900
flex
items-center
justify-center
text-xl
font-bold
text-violet-600
"
>

{
session?.user?.name
?.charAt(0)
.toUpperCase()
||
"U"
}

</div>



<div>

<h3 className="text-xl font-bold text-slate-900 dark:text-white">

Write a Review

</h3>


<p className="text-sm text-slate-500">

Reviewing as {session?.user?.name || "Guest"}

</p>


</div>


</div>





<form
onSubmit={handleSubmit}
className="space-y-5"
>


<textarea

value={comment}

onChange={(e)=>setComment(e.target.value)}

placeholder="Share your experience with this AI tool..."

rows={5}

className="
w-full
resize-none
rounded-2xl
border
border-slate-300
dark:border-slate-700
bg-slate-50
dark:bg-slate-800
p-4
outline-none
focus:ring-2
focus:ring-violet-500
text-slate-900
dark:text-white
"

/>





<div className="flex items-center justify-between">


<div>

<p className="
text-sm
font-medium
mb-2
text-slate-600
dark:text-slate-300
">
Your Rating
</p>



<div className="flex gap-2">


{
[1,2,3,4,5].map((star)=>(


<button

type="button"

key={star}

onClick={()=>setRating(star)}

>

<Star

size={28}

className={

star <= rating

?

"fill-yellow-400 text-yellow-400"

:

"text-slate-300"

}

/>


</button>


))

}


</div>


</div>





<button

disabled={loading}

className="
flex
items-center
gap-2
bg-violet-600
hover:bg-violet-700
disabled:opacity-50
text-white
px-6
py-3
rounded-xl
font-semibold
transition
"

>


{
loading
?
"Submitting..."
:
<>
<Send size={18}/>
Submit Review
</>
}


</button>



</div>



</form>



</div>

);

}