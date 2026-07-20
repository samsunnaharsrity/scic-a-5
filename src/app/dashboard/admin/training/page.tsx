"use client";

import axios from "axios";
import {
  Brain,
  UploadCloud,
  Database,
  Play,
  Sparkles,
  FileText,
  CheckCircle,
  Clock
} from "lucide-react";
import { useEffect, useState } from "react";


interface Training{

files:any[];

trainedAgents:number;

accuracy:number;

progress:number;

lastTraining:string|null;

}

export default function TrainingPage(){


const [training,setTraining]=useState<Training|null>(null);
const [file,setFile]=useState<File|null>(null);


useEffect(()=>{

loadTraining();

},[]);


const loadTraining=async()=>{


const {data}=await axios.get(

`${process.env.NEXT_PUBLIC_API_URL}/api/training/admin@agenticai.com`

);


setTraining(data);


}


const uploadFile = async()=>{


if(!file)
return;


const formData=new FormData();


formData.append(
"file",
file
);


formData.append(
"email",
"admin@agenticai.com"
);



await axios.post(

`${process.env.NEXT_PUBLIC_API_URL}/api/training/upload`,

formData,

{

headers:{
"Content-Type":"multipart/form-data"
}

}

);



loadTraining();


};

return(

<div className="space-y-8">


{/* Header */}

<div>

<h1 className="
text-3xl
font-bold
dark:text-white
">

Agent Training

</h1>


<p className="
text-gray-500
mt-2
">

Train your AI agents with custom knowledge and data.

</p>


</div>





{/* Stats */}

<div className="
grid
md:grid-cols-3
gap-6
">


<div className="
p-6
rounded-3xl
bg-gradient-to-br
from-blue-500
to-indigo-600
text-white
">


<Database size={32}/>


<h2 className="
text-3xl
font-bold
mt-4
">

{training?.files.length || 0}

</h2>


<p className="opacity-90">
Training Files
</p>


</div>






<div className="
p-6
rounded-3xl
bg-gradient-to-br
from-purple-500
to-pink-600
text-white
">


<Brain size={32}/>


<h2 className="
text-3xl
font-bold
mt-4
">

3

</h2>


<p className="opacity-90">
{training?.trainedAgents || 0}
</p>


</div>






<div className="
p-6
rounded-3xl
bg-gradient-to-br
from-green-500
to-emerald-600
text-white
">


<CheckCircle size={32}/>


<h2 className="
text-3xl
font-bold
mt-4
">

98%

</h2>


<p className="opacity-90">
{training?.accuracy || 0}%
</p>


</div>


</div>







{/* Training Box */}

<div className="
bg-white
dark:bg-gray-900
rounded-3xl
border
dark:border-gray-800
p-8
shadow-sm
">


<div className="
flex
items-center
gap-3
">

<div className="
p-3
rounded-2xl
bg-blue-100
dark:bg-blue-900/30
">

<Sparkles
className="text-blue-600"
/>

</div>


<div>

<h2 className="
text-xl
font-bold
dark:text-white
">

Upload Training Data

</h2>


<p className="
text-sm
text-gray-500
">

Add documents, files and knowledge sources.

</p>


</div>


</div>







{/* Upload */}

<div className="
mt-8
border-2
border-dashed
rounded-3xl
p-10
text-center
dark:border-gray-700
hover:border-blue-500
transition
">


<UploadCloud
size={45}
className="
mx-auto
text-blue-500
"
/>


<h3 className="
mt-4
font-semibold
dark:text-white
">

Drop your files here

</h3>


<p className="
text-sm
text-gray-500
mt-2
">

PDF, DOCX, TXT and CSV supported

</p>



<input

type="file"

className="
hidden
"

id="fileUpload"

onChange={(e)=>
setFile(
e.target.files?.[0] || null
)
}

/>


<label

htmlFor="fileUpload"

className="
cursor-pointer
mt-5
inline-block
px-6
py-3
rounded-xl
bg-gray-200
dark:bg-gray-700
"

>

Choose File

</label>



{
file && (

<p className="mt-3 text-sm text-gray-500">

Selected: {file.name}

</p>

)

}



<button

onClick={uploadFile}

className="
mt-4
px-6
py-3
rounded-xl
bg-blue-600
text-white
"

>

Upload Files

</button>


</div>






{/* Current Training */}

<div className="
mt-8
grid
md:grid-cols-2
gap-6
">



<div className="
p-5
rounded-2xl
bg-gray-50
dark:bg-gray-800
">


<div className="
flex
items-center
gap-3
">

<FileText
className="text-blue-500"
/>


<div>

<h3 className="
font-semibold
dark:text-white
">

{
training?.files.map((file,index)=>(

<div key={index}
className="flex items-center gap-3"
>

<FileText className="text-blue-500"/>

<div>

<h3 className="font-semibold dark:text-white">
{file.name}
</h3>

<p className="text-sm text-gray-500">
{file.type} • {file.size}
</p>

</div>

</div>

))
}
</h3>


<p className="
text-sm
text-gray-500
">

120 documents

</p>

</div>


</div>


<div className="
mt-5
h-2
bg-gray-200
dark:bg-gray-700
rounded-full
">

<div
className="
h-full
style={{
width:`${training?.progress || 0}%`
}}
bg-blue-600
rounded-full
"
/>


</div>


<p className="
text-sm
mt-2
text-gray-500
">

Training Progress 75%

</p>


</div>







<div className="
p-5
rounded-2xl
bg-gray-50
dark:bg-gray-800
">


<div className="
flex
items-center
gap-3
">

<Clock
className="text-orange-500"
/>


<div>

<h3 className="
font-semibold
dark:text-white
">

Last Training

</h3>


<p className="
text-sm
text-gray-500
">

{
training?.lastTraining
?
new Date(training.lastTraining)
.toLocaleString()
:
"No training yet"
}
</p>

</div>


</div>


<button
className="
mt-6
w-full
py-3
rounded-xl
bg-gradient-to-r
from-purple-600
to-blue-600
text-white
font-semibold
flex
items-center
justify-center
gap-2
"
>

<Play size={18}/>

Start Training

</button>


</div>



</div>



</div>



</div>

)

}