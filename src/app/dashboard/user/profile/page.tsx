export default function Profile(){

return (

<div>

<h1 className="text-3xl font-bold">
Profile
</h1>


<div className="mt-5 space-y-4">


<input 
className="border p-3 rounded w-full"
placeholder="Name"
/>


<input
className="border p-3 rounded w-full"
placeholder="Email"
/>


<button className="bg-primary text-white px-5 py-3 rounded">
Save
</button>


</div>


</div>

)

}