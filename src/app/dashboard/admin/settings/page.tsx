"use client";

import { useDashboard } from "@/app/components/dashboardData/dashboardProvider";
import axios from "axios";
import {
  Mail,
  Shield,
  Bot,
  Settings,
  Save,
  Camera,
  Edit
} from "lucide-react";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";


interface SettingsState {

  aiLogs:boolean;
  maintenance:boolean;
  email:boolean;
  twoFactor:boolean;

}



interface ProfileState {

  name:string;
  email:string;
  role:string;
  image:string;

}



export default function AdminSettings(){
const {session,setSession}=useDashboard();


const [loading,setLoading]=useState(true);


const [profile,setProfile]=useState<ProfileState>({

name:"",
email:"",
role:"Super Admin",
image:""

});



const [editMode,setEditMode]=useState(false);



const [settings,setSettings]=useState<SettingsState>({

aiLogs:true,
maintenance:false,
email:true,
twoFactor:true

});


const toggle=(key:keyof SettingsState)=>{


setSettings(prev=>({

...prev,

[key]:!prev[key]

}));



};


useEffect(()=>{


if(session?.user){


setProfile({

name:session.user.name || "",

email:session.user.email || "",

role:"Super Admin",

image:session.user.image || ""

});


loadSettings();


}


},[session?.user?.email]);



const loadSettings=async()=>{


if(!session?.user?.email)
return;


try{


const {data}=await axios.get(

`${process.env.NEXT_PUBLIC_API_URL}/api/admin/settings/${session.user.email}`

);


setProfile(prev=>({

...prev,

...data.profile

}));


setSettings(data.settings);


}

catch(error){

console.log(error);

}

finally{

setLoading(false);

}

}

// profile save function
const saveProfile=async()=>{


try{


await axios.put(

`${process.env.NEXT_PUBLIC_API_URL}/api/admin/profile/${profile.email}`,

profile

);



toast.success("Profile Updated");



// Navbar update

setSession((prev:any)=>({

...prev,

user:{

...prev.user,

name:profile.name,

image:profile.image

}

}));



setEditMode(false);


}
catch(error){

toast.error("Profile update failed");

}


}


// Settings Save function
const saveSettings=async()=>{


try{


await axios.put(

`${process.env.NEXT_PUBLIC_API_URL}/api/admin/settings/${profile.email}`,

{
settings
}

);



toast.success("Settings Saved");



await loadSettings();



}
catch(error){

console.log(error);

toast.error("Failed");

}


}


// loading

if(loading){

return (

<div className="p-10 text-center">

Loading settings...

</div>

)

}

return(

<div className="space-y-8">

{/* Header */}

<div>

<h1 className="text-3xl font-bold">
System Settings
</h1>



<p className="text-gray-500 mt-2">
Manage admin profile, AI configuration and system preferences.
</p>


</div>


{/* Profile Card */}


<div className="bg-white border rounded-2xl shadow-sm p-6">


<div className="flex flex-col md:flex-row justify-between items-center gap-6">



<div className="flex items-center gap-5">



<div className="relative">


{
profile.image ?

<img

src={profile.image}

className="w-24 h-24 rounded-full object-cover"

/>


:

<div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white text-3xl font-bold">



</div>

}



<button className="absolute bottom-0 right-0 bg-black text-white p-2 rounded-full">

<Camera size={15}/>

</button>



</div>


<div>


<h2 className="text-2xl font-bold">

{profile.name}

</h2>



<p className="flex items-center gap-2 text-gray-500">

<Mail size={16}/>

{profile.email}

</p>




<p className="flex items-center gap-2 text-gray-500 mt-1">

<Shield size={16}/>

{profile.role}

</p>



</div>



</div>


<button

onClick={()=>setEditMode(!editMode)}

className="flex items-center gap-2 px-5 py-2 bg-black text-white rounded-xl"

>


<Edit size={16}/>

Edit Profile


</button>



</div>


{
editMode &&

<div className="mt-6 space-y-4 border-t pt-5">



<input

className="w-full border rounded-xl p-3"

value={profile.name}

onChange={(e)=>

setProfile({

...profile,

name:e.target.value

})

}

/>



<input

className="w-full border rounded-xl p-3"

value={profile.image}

placeholder="Image URL"

onChange={(e)=>

setProfile({

...profile,

image:e.target.value

})

}

/>



<button

onClick={saveProfile}
className="px-5 py-3 bg-purple-600 text-white rounded-xl"

>

Save Profile

</button>



</div>

}




</div>









{/* Settings */}



<div className="grid lg:grid-cols-2 gap-6">





{/* AI */}

<div className="bg-white border rounded-2xl p-6">



<div className="flex items-center gap-3 mb-6">


<div className="p-3 rounded-xl bg-purple-100">

<Bot className="text-purple-600"/>

</div>



<div>

<h2 className="text-xl font-bold">

AI Configuration

</h2>


<p className="text-sm text-gray-500">

Control AI behavior

</p>


</div>


</div>






<SettingItem

title="Enable AI Logs"

desc="Store AI agent activities"

checked={settings.aiLogs}

onChange={()=>toggle("aiLogs")}

/>






<SettingItem

title="Email Notifications"

desc="Receive AI alerts"

checked={settings.email}

onChange={()=>toggle("email")}

/>



</div>









{/* System */}


<div className="bg-white border rounded-2xl p-6">



<div className="flex items-center gap-3 mb-6">


<div className="p-3 rounded-xl bg-blue-100">

<Settings className="text-blue-600"/>

</div>



<div>

<h2 className="text-xl font-bold">

System Control

</h2>


<p className="text-sm text-gray-500">

Manage security

</p>


</div>


</div>







<SettingItem

title="Maintenance Mode"

desc="Disable public access"

checked={settings.maintenance}

onChange={()=>toggle("maintenance")}

/>






<SettingItem

title="Two Factor Authentication"

desc="Secure admin account"

checked={settings.twoFactor}

onChange={()=>toggle("twoFactor")}

/>



</div>



</div>









{/* Save */}

<div className="flex justify-end">


<button

onClick={saveSettings}

className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold"

>


<Save size={18}/>

Save Changes


</button>


</div>





</div>

)

}







function SettingItem({

title,
desc,
checked,
onChange

}:{

title:string;
desc:string;
checked:boolean;
onChange:()=>void;

}){


return(

<div className="flex justify-between items-center py-4 border-b last:border-none">



<div>


<h3 className="font-semibold">

{title}

</h3>



<p className="text-sm text-gray-500">

{desc}

</p>



</div>





<button

onClick={onChange}

className={`w-12 h-6 rounded-full relative transition ${
checked
?"bg-purple-600"
:"bg-gray-300"
}`}


>


<span

className={`absolute top-1 w-4 h-4 bg-white rounded-full transition ${
checked
?"left-7"
:"left-1"
}`}

/>



</button>



</div>

)

}