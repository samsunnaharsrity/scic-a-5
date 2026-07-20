"use client";

import { useDashboard } from "@/app/components/dashboardData/dashboardProvider";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Save } from "lucide-react";
import { uploadImage } from "@/lib/uploadImg";
import ToolCardSkeleton from "@/app/components/skeletons/ToolCardSkeleton";

export default function ProfilePage() {
  const { session, refreshSession } = useDashboard();
  
  const user = session?.user;
  const [imageFile,setImageFile]=useState<File|null>(null);
const [preview,setPreview]=useState(user?.image || "");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);

useEffect(() => {
  if (user) {
    setFormData({
      name: user.name || "",
      email: user.email || "",
    });

    setPreview(user.image || "");
  }
}, [user]);


  const firstLetter =
    formData.name?.charAt(0)?.toUpperCase() || "U";


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };






const handleUpdate = async()=>{


try{

setLoading(true);


let imageUrl = user?.image;


if(imageFile){

  imageUrl = await uploadImage(imageFile);

}



const email = encodeURIComponent(
user?.email || ""
);



const res = await fetch(

`${process.env.NEXT_PUBLIC_API_URL}/api/user/${email}`,

{

method:"PATCH",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

name:formData.name,

image:imageUrl

})

}

);



const data = await res.json();


console.log(data);



if(data.success){


await refreshSession();


alert("Profile updated");


}



}
catch(error){

console.log(error);

}
finally{

setLoading(false);

}


};



const handleImageChange = (
e:React.ChangeEvent<HTMLInputElement>
)=>{

const file=e.target.files?.[0];


if(file){

setImageFile(file);

setPreview(
URL.createObjectURL(file)
);

}


};




if(loading){

return (
<section className="bg-slate-50 dark:bg-slate-950 min-h-screen py-10">
<div className="max-w-6xl mx-auto px-4">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

{Array.from({length:8}).map((_,index)=>(
<ToolCardSkeleton key={index}/>
))}

</div>
</div>
</section>
)

}


  return (
    <div className="grid gap-8 lg:grid-cols-3 mt-20 text-gray-900
    dark:text-white">

      {/* Profile Card */}
      <div className="rounded-xl border bg-white p-6 shadow dark:bg-neutral-900
      dark:border-neutral-800">

        <div className="flex flex-col items-center">

{preview ? (

<Image
src={preview}
alt="profile"
width={120}
height={120}
className="h-[120px] w-[120px] rounded-full object-cover ring-4
              ring-violet-500/20"
/>

)

:(

<div className="h-[120px] w-[120px] rounded-full bg-violet-600 text-white flex items-center justify-center text-5xl">
{firstLetter}
</div>

)}

<label
className="
mt-4
cursor-pointer
rounded-lg
bg-violet-600
hover:bg-violet-700
px-4
py-2
text-white
transition
"
>

Change Image


<input

type="file"

accept="image/*"

hidden

onChange={handleImageChange}

/>


</label>


          <h2 className="mt-4 text-2xl font-bold">
            {formData.name}
          </h2>

          <p className="text-gray-500 dark:text-gray-400">
            {formData.email}
          </p>

        </div>

      </div>



      {/* Edit Form */}
      <div className="lg:col-span-2 rounded-xl border bg-white p-8 shadow  dark:bg-neutral-900
      dark:border-neutral-800">

        <h2 className="mb-6 text-2xl font-bold">
          Edit Profile
        </h2>


        <label className="font-medium">
          Name
        </label>

        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-2 w-full rounded-lg border dark:border-neutral-700
        bg-white
        dark:bg-neutral-800
        p-3
        outline-none
        focus:ring-2
        focus:ring-violet-500"
        />


        <label className="mt-4 block font-medium">
          Email
        </label>

        <input
          name="email"
          value={formData.email}
          disabled
          className="mt-2 w-full rounded-lg border bg-gray-100 p-3 dark:bg-neutral-800
        dark:text-gray-400"
        />


        <button
          onClick={handleUpdate}
          disabled={loading}
          className="mt-6 flex items-center gap-2 rounded-lg bg-violet-600 transition hover:bg-violet-700 px-6 py-3 text-white"
        >
          <Save size={18}/>
          {loading ? "Saving..." : "Save Changes"}
        </button>

      </div>

    </div>
  );
}