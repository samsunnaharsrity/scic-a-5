"use client";

import {
  Users,
  ShieldCheck,
  UserCheck,
  UserX,
  Search,
  MoreVertical,
} from "lucide-react";

import axios from "axios";
import {useEffect,useState} from "react";



interface User{
  _id:string;
  name:string;
  email:string;
  role:string;
  banned:boolean;
  image?:string;
}



export default function UsersPage(){


const [users,setUsers]=useState<User[]>([]);

const [search,setSearch]=useState("");

const [loading,setLoading]=useState(true);
const [activeMenu,setActiveMenu]=useState<string|null>(null);



useEffect(()=>{

loadUsers();

},[]);




const loadUsers=async()=>{


try{


const res =
await axios.get(
`${process.env.NEXT_PUBLIC_API_URL}/api/user`
);


setUsers(res.data.data);



}
catch(error){

console.log(error);

}
finally{

setLoading(false);

}


};



const updateRole = async(
 id:string,
 role:string
)=>{

try{

const res = await axios.patch(
`${process.env.NEXT_PUBLIC_API_URL}/api/user/role/${id}`,
{
 role
}
);


if(res.data.success){

setUsers(prev=>
prev.map(user=>
user._id===id
?
{
...user,
role:role
}
:
user
)
);


}


}
catch(error){

console.log(error);

}

};


const updateBan = async(
 id:string,
 banned:boolean
)=>{

try{


const res = await axios.patch(

`${process.env.NEXT_PUBLIC_API_URL}/api/user/ban/${id}`,

{
banned
}

);



if(res.data.success){


setUsers(prev=>

prev.map(user=>

user._id===id

?

{
...user,
banned
}

:

user

)

);


}



}
catch(error){

console.log(error);

}


};



const filteredUsers =
users.filter(user=>

user.name
.toLowerCase()
.includes(search.toLowerCase())

||
user.email
.toLowerCase()
.includes(search.toLowerCase())

);





const stats=[


{

title:"Total Users",

value:users.length,

icon:Users,

color:"from-blue-500 to-cyan-500"

},



{

title:"Active Users",

value:
users.filter(
user=>!user.banned
).length,

icon:UserCheck,

color:"from-green-500 to-emerald-500"

},



{

title:"Admins",

value:
users.filter(
user=>user.role==="admin"
).length,

icon:ShieldCheck,

color:"from-purple-500 to-indigo-500"

},



{

title:"Blocked",

value:
users.filter(
user=>user.banned
).length,

icon:UserX,

color:"from-red-500 to-orange-500"

}


];






if(loading){


return (

<div className="
h-96
flex
items-center
justify-center
text-gray-500
">

Loading Users...

</div>

)


}







return(


<div className="
min-h-screen
space-y-8
bg-gray-50
dark:bg-[#09090b]
p-6
rounded-2xl
">





{/* Header */}


<div>


<h1 className="
text-3xl
font-bold
flex
items-center
gap-3
dark:text-white
">


<Users
className="text-indigo-500"
/>


Users Management


</h1>



<p className="
mt-2
text-gray-500
">

Manage users, roles and permissions.

</p>


</div>








{/* Stats */}



<div className="
grid
md:grid-cols-4
gap-6
">


{

stats.map(item=>{


const Icon=item.icon;


return(


<div
key={item.title}
className="
relative
overflow-hidden
bg-white
dark:bg-white/5
border
dark:border-white/10
rounded-2xl
p-6
hover:shadow-xl
transition
"
>


<div className={`
absolute
right-0
top-0
w-24
h-24
rounded-full
blur-3xl
opacity-30
bg-gradient-to-br
${item.color}
`}/>



<div className="
flex
justify-between
">


<div>


<p className="
text-gray-500
text-sm
">

{item.title}

</p>


<h2 className="
text-3xl
font-bold
mt-2
dark:text-white
">

{item.value}

</h2>


</div>



<div className={`
w-12
h-12
rounded-xl
flex
items-center
justify-center
text-white
bg-gradient-to-br
${item.color}
`}>

<Icon/>

</div>


</div>


</div>


)


})


}



</div>








{/* Table */}


<div className="
bg-white
dark:bg-white/5
border
dark:border-white/10
rounded-2xl
p-6
">



<div className="
flex
justify-between
items-center
mb-6
">


<h2 className="
text-xl
font-bold
dark:text-white
">

All Users

</h2>




<div className="
flex
items-center
gap-2
border
dark:border-white/10
rounded-xl
px-3
py-2
">


<Search
size={18}
/>


<input

value={search}

onChange={(e)=>
setSearch(e.target.value)
}

placeholder="Search user..."

className="
outline-none
bg-transparent
dark:text-white
"

/>


</div>


</div>






<div className="overflow-x-auto">


<table className="
w-full
">


<thead>

<tr className="
border-b
dark:border-white/10
text-left
text-gray-500
">


<th className="p-4">
User
</th>


<th className="p-4">
Role
</th>


<th className="p-4">
Status
</th>


<th className="p-4">
Action
</th>


</tr>

</thead>




<tbody>


{

filteredUsers.map(user=>(


<tr
key={user._id}
className="
border-b
dark:border-white/10
hover:bg-gray-50
dark:hover:bg-white/5
"
>


<td className="p-4">


<h3 className="
font-semibold
dark:text-white
">

{user.name}

</h3>


<p className="
text-sm
text-gray-400
">

{user.email}

</p>


</td>




<td className="p-4">


<td className="p-4">

<span
className="
px-3
py-1
rounded-full
bg-indigo-500/10
text-indigo-500
text-xs
"
>

{user.role}

</span>


</td>


</td>




<td className="p-4">


<span
className={`

px-3
py-1
rounded-full
text-xs

${
!user.banned

?

"bg-green-500/10 text-green-500"

:

"bg-red-500/10 text-red-500"

}

`}
>


{
!user.banned
?
"Active"
:
"Blocked"
}


</span>


</td>





<td className="p-4">


<td className="p-4 relative">


<button

onClick={()=>setActiveMenu(
activeMenu===user._id
?
null
:
user._id
)}

className="
p-2
rounded-lg
hover:bg-gray-100
dark:hover:bg-white/10
"

>

<MoreVertical size={20}/>

</button>





{
activeMenu===user._id && (

<div
className="
absolute
right-10
top-12
w-44
bg-white
dark:bg-[#18181b]
border
dark:border-white/10
rounded-xl
shadow-xl
z-50
p-2
"
>


<p className="
text-xs
text-gray-400
px-3
py-2
">

Change Role

</p>



<button

onClick={()=>{

updateRole(
user._id,
"admin"
);

setActiveMenu(null);

}}

className="
w-full
text-left
px-3
py-2
rounded-lg
hover:bg-indigo-500/10
text-sm
dark:text-white
"

>

Make Admin

</button>





<button

onClick={()=>{

updateRole(
user._id,
"user"
);

setActiveMenu(null);

}}

className="
w-full
text-left
px-3
py-2
rounded-lg
hover:bg-indigo-500/10
text-sm
dark:text-white
"

>

Make User

</button>


<button

onClick={()=>{

updateBan(
user._id,
true
);

setActiveMenu(null);

}}

className="
w-full
text-left
px-3
py-2
rounded-lg
hover:bg-red-500/10
text-red-500
text-sm
"

>

Block User

</button>

{
user.banned && (

<button

onClick={()=>{

updateBan(
user._id,
false
);

setActiveMenu(null);

}}

className="
w-full
text-left
px-3
py-2
rounded-lg
hover:bg-green-500/10
text-green-500
text-sm
"

>

Unblock User

</button>

)
}

</div>

)
}


</td>


</td>



</tr>


))


}



</tbody>


</table>


</div>



</div>




</div>


)


}