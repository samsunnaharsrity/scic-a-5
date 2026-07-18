export default function CreateAgent(){

return (

<div className="max-w-xl">

<h1 className="text-3xl font-bold">
Create AI Agent
</h1>


<div className="space-y-4 mt-6">


<input
placeholder="Agent Name"
className="w-full border p-3 rounded"
/>


<textarea
placeholder="Agent Instructions"
className="w-full border p-3 rounded h-40"
/>


<select className="w-full border p-3 rounded">

<option>GPT Model</option>
<option>Gemini</option>
<option>Claude</option>

</select>


<button className="bg-primary text-white px-5 py-3 rounded">
Create Agent
</button>


</div>


</div>

)

}