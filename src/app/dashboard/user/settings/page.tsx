"use client";

import { useDashboard } from "@/app/components/dashboardData/dashboardProvider";
import axios from "axios";

import {
  Bell,
  Moon,
  Shield,
  Sparkles,
  Save,
  Mail,
  Lock,
  Brain,
  Cpu,
} from "lucide-react";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";


interface SettingsState {

notifications:{
 email:boolean;
 updates:boolean;
};

appearance:{
 darkMode:boolean;
};

security:{
 loginAlert:boolean;
};

ai:{
 memory:boolean;
 defaultModel:string;
};

}


const defaultSettings:SettingsState={

notifications:{
 email:true,
 updates:false
},

appearance:{
 darkMode:false
},

security:{
 loginAlert:true
},

ai:{
 memory:true,
 defaultModel:"Gemini"
}

};


export default function SettingsPage(){


const [settings,setSettings]=
useState<SettingsState>(defaultSettings);


const [loading,setLoading]=useState(true);



const {session}=useDashboard();

const userId=session?.user?.email;



useEffect(()=>{


if(!userId) return;


const loadSettings=async()=>{

try{

const {data}=await axios.get(
`${process.env.NEXT_PUBLIC_API_URL}/api/settings/${userId}`
);

setSettings(data.data);

}

catch(error){

console.log(error);

}

finally{

setLoading(false);

}


};

loadSettings();

},[userId]);


const toggleSetting=(
section:keyof SettingsState,
key:string
)=>{


setSettings(prev=>({

...prev,

[section]:{

...prev[section],

[key]:
!(prev[section] as any)[key]

}

}));



};



const saveSettings=async()=>{


try{


await axios.patch(
`${process.env.NEXT_PUBLIC_API_URL}/api/settings/${userId}`,
settings
);

toast.success(
"Settings updated successfully"
);


}

catch(error){


toast.error(
"Settings update failed"
);


}



};




if(loading){

return (

<div className="
flex
h-60
items-center
justify-center
text-muted-foreground
">

Loading settings...

</div>

)

}



return (

<div className="space-y-8">



{/* Header */}

<div>

<h1 className="
text-3xl
font-bold
tracking-tight
">

Settings

</h1>


<p className="
text-muted-foreground
mt-2
">

Manage your account preferences and AI workspace configuration.

</p>


</div>



<SettingCard

icon={Bell}

title="Notifications"

description="Control alerts and product updates"

>



<SettingItem

icon={Mail}

title="Email Notifications"

description="Receive account and AI updates"

checked={
settings.notifications.email
}

onClick={()=>
toggleSetting(
"notifications",
"email"
)
}

/>




<SettingItem

icon={Sparkles}

title="Product Updates"

description="Get latest AI feature announcements"

checked={
settings.notifications.updates
}

onClick={()=>
toggleSetting(
"notifications",
"updates"
)
}

/>



</SettingCard>









{/* <SettingCard

icon={Moon}

title="Appearance"

description="Customize your dashboard look"

>


<SettingItem

icon={Moon}

title="Dark Mode"

description="Switch between light and dark theme"

checked={
settings.appearance.darkMode
}

onClick={()=>
toggleSetting(
"appearance",
"darkMode"
)
}

/>


</SettingCard> */}









<SettingCard

icon={Shield}

title="Security"

description="Protect your AI workspace"

>


<SettingItem

icon={Lock}

title="Login Alerts"

description="Notify when a new login happens"

checked={
settings.security.loginAlert
}

onClick={()=>
toggleSetting(
"security",
"loginAlert"
)
}

/>


</SettingCard>









<SettingCard

icon={Brain}

title="AI Preferences"

description="Manage your AI assistant behaviour"

>



<SettingItem

icon={Brain}

title="AI Memory"

description="Allow AI to remember preferences"

checked={
settings.ai.memory
}

onClick={()=>
toggleSetting(
"ai",
"memory"
)
}

/>





<div className="
rounded-xl
border
p-5
bg-muted/30
">


<div className="
flex
items-center
gap-2
mb-3
">


<Cpu size={18}/>

<label className="
font-semibold
">

Default AI Model

</label>


</div>




<select

value={
settings.ai.defaultModel
}

onChange={(e)=>


setSettings(prev=>({

...prev,

ai:{
...prev.ai,
defaultModel:e.target.value
}

}))


}


className="
w-full
rounded-xl
border
bg-background
p-3
outline-none
focus:ring-2
focus:ring-primary
"


>


<option>
Gemini
</option>

<option>
GPT-5
</option>

<option>
Claude
</option>


</select>


</div>




</SettingCard>










<button

onClick={saveSettings}

className="
flex
items-center
gap-2
rounded-xl
bg-primary
px-6
py-3
font-semibold
text-white
shadow-lg
hover:scale-[1.02]
transition
"


>


<Save size={18}/>

Save Changes


</button>





</div>

)

}









function SettingCard({
icon:Icon,
title,
description,
children
}:any){


return (

<div className="
rounded-3xl
border
bg-card
p-6
shadow-sm
hover:shadow-md
transition
space-y-6
">


<div className="
flex
items-center
gap-4
">


<div className="
h-12
w-12
rounded-2xl
bg-primary/10
flex
items-center
justify-center
">


<Icon
className="
text-primary
"
/>


</div>



<div>

<h2 className="
text-lg
font-bold
">

{title}

</h2>


<p className="
text-sm
text-muted-foreground
">

{description}

</p>


</div>


</div>



<div className="space-y-4">

{children}

</div>



</div>


)

}









function SettingItem({
icon:Icon,
title,
description,
checked,
onClick
}:any){


return (

<div className="
flex
items-center
justify-between
rounded-2xl
border
p-5
hover:bg-muted/40
transition
">


<div className="
flex
items-center
gap-4
">


<div className="
h-10
w-10
rounded-xl
bg-muted
flex
items-center
justify-center
">


<Icon size={18}/>


</div>



<div>

<h3 className="
font-semibold
">

{title}

</h3>


<p className="
text-sm
text-muted-foreground
">

{description}

</p>


</div>


</div>





<button

onClick={onClick}

className={`
relative
h-7
w-14
rounded-full
transition
duration-300
${
checked
?
"bg-primary"
:
"bg-gray-300 dark:bg-gray-700"
}
`}


>


<span

className={`
absolute
top-1
h-5
w-5
rounded-full
bg-white
shadow
transition-all
duration-300
${
checked
?
"left-8"
:
"left-1"
}
`}

/>


</button>




</div>


)

}