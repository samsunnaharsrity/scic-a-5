"use client";

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



const defaultSettings:SettingsState = {

  notifications:{
    email:true,
    updates:false,
  },

  appearance:{
    darkMode:false,
  },

  security:{
    loginAlert:true,
  },

  ai:{
    memory:true,
    defaultModel:"Gemini",
  }

};



export default function SettingsPage(){


const [settings,setSettings] = useState<SettingsState>(
  defaultSettings
);



const toggleSetting = (
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


const userId = "demo-user-id";


useEffect(()=>{


const loadSettings = async()=>{


try{


const response = await axios.get(
`${process.env.NEXT_PUBLIC_API_URL}/api/settings/${userId}`
);


setSettings(response.data.data);


}
catch(error){

console.log("Load settings error:", error);

}


};


loadSettings();


},[]);


const saveSettings = async()=>{

try{


const userId = "demo-user-id"; 


const response = await axios.patch(
`${process.env.NEXT_PUBLIC_API_URL}/api/settings/${userId}`,
settings
);


console.log(response.data);


toast.success("Settings saved successfully");


}
catch(error){

console.log(error);

toast.error("Failed to save settings");

}


};




return (

<div className="space-y-8">


{/* Header */}

<div>

<h1 className="text-3xl font-bold">
Settings
</h1>

<p className="text-muted-foreground mt-2">
Manage your account preferences and AI workspace settings
</p>

</div>





{/* Notifications */}

<SettingCard
icon={Bell}
title="Notification Settings"
description="Manage how you receive updates"
>


<SettingItem
icon={Mail}
title="Email Notifications"
description="Receive AI updates and account alerts"
checked={settings.notifications.email}
onClick={()=>toggleSetting("notifications","email")}
/>


<SettingItem
icon={Sparkles}
title="Product Updates"
description="Get news about new AI features"
checked={settings.notifications.updates}
onClick={()=>toggleSetting("notifications","updates")}
/>


</SettingCard>







{/* Appearance */}

<SettingCard
icon={Moon}
title="Appearance"
description="Customize your dashboard experience"
>


<SettingItem
icon={Moon}
title="Dark Mode"
description="Use dark theme across application"
checked={settings.appearance.darkMode}
onClick={()=>toggleSetting("appearance","darkMode")}
/>


</SettingCard>








{/* Security */}

<SettingCard
icon={Shield}
title="Security"
description="Protect your AI workspace"
>


<SettingItem
icon={Lock}
title="Login Alerts"
description="Get notified about new logins"
checked={settings.security.loginAlert}
onClick={()=>toggleSetting("security","loginAlert")}
/>


</SettingCard>








{/* AI */}

<SettingCard
icon={Brain}
title="AI Preferences"
description="Manage AI assistant behaviour"
>


<SettingItem
icon={Brain}
title="AI Memory"
description="Allow AI to remember preferences"
checked={settings.ai.memory}
onClick={()=>toggleSetting("ai","memory")}
/>



<div className="rounded-xl border p-4">

<label className="font-medium">
Default AI Model
</label>


<select

value={settings.ai.defaultModel}

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
mt-3
w-full
rounded-lg
border
bg-background
p-2
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
text-white
font-medium
hover:opacity-90
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
rounded-2xl
border
bg-card
p-6
shadow-sm
space-y-5
">


<div className="flex items-center gap-3">


<div className="
h-10
w-10
rounded-xl
bg-primary/10
flex
items-center
justify-center
">


<Icon
className="text-primary"
/>


</div>


<div>

<h2 className="font-semibold text-lg">
{title}
</h2>

<p className="text-sm text-muted-foreground">
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
rounded-xl
border
p-4
hover:bg-muted/50
transition
">


<div className="flex gap-4 items-center">


<div className="
h-9
w-9
rounded-lg
bg-muted
flex
items-center
justify-center
">

<Icon size={18}/>

</div>



<div>

<h3 className="font-medium">
{title}
</h3>

<p className="text-sm text-muted-foreground">
{description}
</p>

</div>


</div>




<button

onClick={onClick}

className={`
relative
h-6
w-12
rounded-full
transition
${checked ? "bg-primary":"bg-gray-300"}
`}

>


<span

className={`
absolute
top-1
h-4
w-4
rounded-full
bg-white
transition
${checked ? "left-7":"left-1"}
`}

/>


</button>




</div>

)

}