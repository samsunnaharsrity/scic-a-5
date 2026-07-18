"use client";

import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Bot, Loader2, Sparkles } from "lucide-react";
import { useDashboard } from "@/app/components/dashboardData/dashboardProvider";

export default function CreateAgentPage() {

  const { session } = useDashboard();

  const [loading, setLoading] = useState(false);


  const [agent, setAgent] = useState({
    name: "",
    description: "",
    category: "",
    model: "gemini-2.0-flash",
    prompt: "",
  });



  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) => {

    setAgent({
      ...agent,
      [e.target.name]: e.target.value,
    });

  };




  const createAgent = async()=>{


    if(
      !agent.name ||
      !agent.description ||
      !agent.category ||
      !agent.prompt
    ){

      toast.error("Please fill all fields");
      return;

    }


    try{

      setLoading(true);



      const {data}=await axios.post(

        `${process.env.NEXT_PUBLIC_API_URL}/api/agents`,

        {

          ...agent,

          userEmail:session?.user?.email

        }

      );



      console.log(
        "CREATE AGENT:",
        data
      );



      if(data.success){

        toast.success(
          "Agent created successfully"
        );


        setAgent({

          name:"",
          description:"",
          category:"",
          model:"gemini-2.0-flash",
          prompt:""

        });


      }


    }
    catch(error){

      console.log(error);

      toast.error(
        "Failed to create agent"
      );

    }
    finally{

      setLoading(false);

    }


  };



  return (


<div className="
mx-auto
max-w-3xl
space-y-8
">


{/* Header */}

<div className="
flex
items-center
gap-4
">


<div className="
rounded-2xl
bg-violet-100
dark:bg-violet-500/20
p-4
text-violet-600
dark:text-violet-400
">

<Bot size={34}/>

</div>



<div>

<h1 className="
text-3xl
font-bold
text-gray-900
dark:text-white
">

Create AI Agent

</h1>


<p className="
mt-1
text-gray-500
dark:text-gray-400
">

Build your own intelligent AI assistant.

</p>


</div>


</div>






{/* Form Card */}

<div className="
rounded-2xl
border
bg-white
dark:bg-neutral-900
dark:border-neutral-800
p-8
shadow-sm
space-y-6
">





{/* Name */}

<div>

<label className="
mb-2
block
font-medium
text-gray-800
dark:text-gray-200
">

Agent Name

</label>


<input

name="name"

value={agent.name}

onChange={handleChange}

placeholder="Marketing Assistant"

className="
w-full
rounded-xl
border
bg-white
dark:bg-neutral-950
dark:border-neutral-700
dark:text-white
p-3
outline-none
focus:ring-2
focus:ring-violet-500
"

/>


</div>





{/* Description */}

<div>

<label className="
mb-2
block
font-medium
text-gray-800
dark:text-gray-200
">

Description

</label>


<input

name="description"

value={agent.description}

onChange={handleChange}

placeholder="Describe your AI agent..."

className="
w-full
rounded-xl
border
bg-white
dark:bg-neutral-950
dark:border-neutral-700
dark:text-white
p-3
outline-none
focus:ring-2
focus:ring-violet-500
"

/>


</div>







{/* Category */}

<div>

<label className="
mb-2
block
font-medium
text-gray-800
dark:text-gray-200
">

Category

</label>


<select

name="category"

value={agent.category}

onChange={handleChange}

className="
w-full
rounded-xl
border
bg-white
dark:bg-neutral-950
dark:border-neutral-700
dark:text-white
p-3
outline-none
"

>


<option value="">
Select Category
</option>


<option>
Marketing
</option>


<option>
Programming
</option>


<option>
Writing
</option>


<option>
SEO
</option>


<option>
Business
</option>


<option>
Education
</option>


<option>
Customer Support
</option>


</select>


</div>







{/* Model */}

<div>

<label className="
mb-2
block
font-medium
text-gray-800
dark:text-gray-200
">

AI Model

</label>


<select

name="model"

value={agent.model}

onChange={handleChange}

className="
w-full
rounded-xl
border
bg-white
dark:bg-neutral-950
dark:border-neutral-700
dark:text-white
p-3
"

>


<option value="gemini-2.0-flash">
Gemini 2.0 Flash
</option>


<option value="llama-3.1-8b-instant">
Llama 3.1 Instant
</option>


<option value="gpt-4">
GPT-4
</option>


<option value="claude-3">
Claude 3
</option>


</select>


</div>







{/* Prompt */}

<div>

<label className="
mb-2
block
font-medium
text-gray-800
dark:text-gray-200
">

System Prompt

</label>


<textarea

name="prompt"

value={agent.prompt}

onChange={handleChange}

placeholder="
You are an expert marketing consultant...
"

className="
h-48
w-full
rounded-xl
border
bg-white
dark:bg-neutral-950
dark:border-neutral-700
dark:text-white
p-3
outline-none
focus:ring-2
focus:ring-violet-500
"

/>


</div>







{/* Button */}

<button

onClick={createAgent}

disabled={loading}

className="
flex
items-center
justify-center
gap-2
rounded-xl
bg-violet-600
hover:bg-violet-700
px-6
py-3
text-white
font-medium
transition
disabled:opacity-50
"

>


{

loading ?

<>

<Loader2 
size={18}
className="animate-spin"
/>

Creating...

</>


:

<>

<Sparkles size={18}/>

Create Agent

</>


}



</button>



</div>



</div>


  );

}