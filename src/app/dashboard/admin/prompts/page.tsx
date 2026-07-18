export default function PromptPage(){

return(

<div>

<h1 className="text-3xl font-bold">
Prompt Management
</h1>


<div className="mt-6 p-6 bg-white shadow rounded-xl">

<textarea
className="w-full border rounded-lg p-4"
placeholder="Write system prompt..."
/>


<button className="mt-4 px-5 py-2 bg-black text-white rounded">
Save Prompt
</button>


</div>


</div>

)

}