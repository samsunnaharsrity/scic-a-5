"use client";

import {
  Brain,
  Zap,
  Activity,
  CreditCard,
  Bot,
  MessageSquare,
  Clock3,
  Sparkles
} from "lucide-react";

import { useEffect, useState } from "react";
import axios from "axios";
import { useDashboard } from "@/app/components/dashboardData/dashboardProvider";
import { useRouter } from "next/navigation";


export default function UserDashboard() {


  const [dashboard,setDashboard] = useState<any>(null);
  const [loading,setLoading] = useState(true);


const router = useRouter();

const {session}=useDashboard();


const email=session?.user?.email;



useEffect(()=>{

if(!email) return;


const fetchDashboard=async()=>{

try{

 const {data}=await axios.get(
 `${process.env.NEXT_PUBLIC_API_URL}/api/userDashboard/${email}`
 );


 console.log("Dashboard Data:",data);


 setDashboard(data);


}
catch(error){

 console.log("Dashboard Error:",error);


}
finally{

 setLoading(false);

}

};


fetchDashboard();


},[email]);





  if(loading){

    return (
      <div className="flex h-60 items-center justify-center">
        Loading Dashboard...
      </div>
    )

  }



  if(!dashboard){

    return (
      <div>
        No dashboard data found
      </div>
    )

  }



  const stats=[

    {
      title:"AI Agents",
      value:dashboard.stats.agents,
      icon:Brain,
      description:"Active agents"
    },

    {
      title:"AI Requests",
      value:dashboard.stats.requests,
      icon:Zap,
      description:"This month"
    },


    {
      title:"API Usage",
      value:dashboard.stats.usage,
      icon:Activity,
      description:"Monthly limit"
    },


    {
      title:"Current Plan",
      value:dashboard.stats.plan,
      icon:CreditCard,
      description:"Subscription"
    }

  ];





const actions:{
  title:string;
  icon:any;
  type:string;
  link:string;
}[] = [
  {
    title:"Create AI Agent",
    icon:Bot,
    type:"primary",
    link:"/dashboard/user/create-agent"
  },
  {
    title:"Open AI Chat",
    icon:MessageSquare,
    type:"secondary",
    link:"/ai-tools/chat"
  }
];





  return (

    <div className="space-y-8">



      {/* Header */}

      <div>

        <h1 className="text-3xl font-bold">
          Welcome back, {dashboard.user.name} 👋
        </h1>


        <p className="text-muted-foreground mt-2">
          Manage your AI workspace and monitor your usage.
        </p>


      </div>





      {/* Stats */}

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">


        {
          stats.map((item)=>{


            const Icon=item.icon;


            return (

              <div
                key={item.title}
                className="rounded-2xl border bg-card p-6 shadow-sm hover:shadow-lg transition"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">

                  <Icon className="text-primary"/>

                </div>


                <p className="mt-5 text-sm text-muted-foreground">
                  {item.title}
                </p>


                <h2 className="text-3xl font-bold mt-1">
                  {item.value}
                </h2>


                <p className="text-xs mt-2 text-muted-foreground">
                  {item.description}
                </p>


              </div>

            )


          })
        }


      </div>






      {/* Activity + Actions */}

      <div className="grid gap-6 lg:grid-cols-2">



        {/* Activities */}


<div className="rounded-2xl border bg-card p-6 shadow-sm">

  <div className="flex items-center justify-between">

    <h2 className="text-lg font-semibold">
      Recent AI Activity
    </h2>

    <Sparkles className="h-5 w-5 text-primary" />

  </div>

  <div className="mt-6 space-y-4">

    {dashboard.activities.length === 0 ? (

      <div className="rounded-xl border border-dashed p-8 text-center">

        <Bot className="mx-auto mb-3 h-10 w-10 text-muted-foreground" />

        <p className="font-medium">
          No recent activity
        </p>

        <p className="mt-1 text-sm text-muted-foreground">
          Create your first AI Agent to see activity here.
        </p>

      </div>

    ) : (

      dashboard.activities.map((activity: any) => (

        <div
          key={activity._id.toString()}
          className="flex items-center justify-between rounded-xl border bg-muted/40 p-4 hover:bg-muted transition"
        >

          <div className="flex items-center gap-4">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">

              <Bot className="h-5 w-5 text-primary" />

            </div>

            <div>

              <h3 className="font-medium">
                {activity.action}
              </h3>

              <p className="text-sm text-muted-foreground">
                AI Workspace
              </p>

            </div>

          </div>

          <div className="flex items-center gap-2 text-xs text-muted-foreground">

            <Clock3 className="h-4 w-4" />

            {new Date(activity.createdAt).toLocaleString()}

          </div>

        </div>

      ))

    )}

  </div>

</div>






        {/* Actions */}

        <div className="rounded-2xl border p-6">


          <h2 className="text-lg font-semibold">
            Quick Actions
          </h2>


          <div className="mt-5 space-y-3">


          {
            actions.map((action)=>{


              const Icon=action.icon;


              return (

                <button
                    key={action.title}
                    onClick={()=>router.push(action.link)}
                    className={
                      action.type==="primary"
                      ?
                      "w-full rounded-xl bg-primary p-3 text-white flex justify-center gap-2"
                      :
                      "w-full rounded-xl border p-3 flex justify-center gap-2"
                    }
                >

                  <Icon size={18}/>

                  {action.title}

                </button>

              )


            })
          }


          </div>


        </div>


      </div>





      {/* Usage */}

      <div className="rounded-2xl border bg-primary/10 p-6">

        <h2 className="text-xl font-bold">
          AI Workspace Overview 🚀
        </h2>


        <p className="mt-2 text-muted-foreground">

          You have used {dashboard.stats.usage}
          of your monthly AI quota.

        </p>


      </div>



    </div>

  );

}