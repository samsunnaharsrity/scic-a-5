import { auth } from "@/lib/auth";
import { headers } from "next/headers";

import DashboardSidebar from "../components/dashboardData/dashboardSidebar";
import { DashboardProvider } from "../components/dashboardData/dashboardProvider";


export default async function DashboardLayout({
 children,
}:{
 children:React.ReactNode;
}){


const session = await auth.api.getSession({
 headers: await headers(),
});


if(!session){
 return null;
}


return (

<DashboardProvider session={session}>

<div className="
min-h-screen
flex
bg-gray-50
dark:bg-neutral-950
">


<DashboardSidebar 
session={session}
/>


<main className="
flex-1
p-6
overflow-x-hidden
">

{children}

</main>


</div>


</DashboardProvider>

)


}