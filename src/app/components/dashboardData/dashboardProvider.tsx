"use client";

import { createContext, useContext, useState } from "react";

const DashboardContext = createContext<any>(null);


export function DashboardProvider({
  children,
  session: initialSession,
}: {
  children: React.ReactNode;
  session:any;
}) {


const [session,setSession] = useState(initialSession);



const refreshSession = async()=>{

try{


const email = encodeURIComponent(
 session.user.email
);



const res = await fetch(
`${process.env.NEXT_PUBLIC_API_URL}/api/user/${email}`
);



const data = await res.json();



console.log("REFRESH SESSION:",data);



if(data.success){


setSession((prev:any)=>({

...prev,

user:data.user || data.data

}));


}


}
catch(error){

console.log("Refresh session error:",error);

}


};



return (

<DashboardContext.Provider
value={{
session,
setSession, 
refreshSession
}}
>

{children}

</DashboardContext.Provider>

);


}



export function useDashboard(){

return useContext(DashboardContext);

}