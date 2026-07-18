export default function AgentsPage(){

return(

<div>

<h1 className="text-3xl font-bold">
AI Agents
</h1>


<table className="w-full mt-6 bg-white rounded-xl shadow">

<thead>
<tr className="border-b">

<th className="p-4 text-left">
Name
</th>

<th>
Model
</th>

<th>
Status
</th>

</tr>
</thead>


<tbody>

{
[
["Customer Support Agent","GPT-5","Active"],
["Marketing Agent","Gemini","Active"],
["Analyzer Agent","Claude","Paused"]

].map((agent)=>(
<tr 
key={agent[0]}
className="border-b"
>

<td className="p-4">
{agent[0]}
</td>

<td>
{agent[1]}
</td>

<td>
{agent[2]}
</td>

</tr>

))
}

</tbody>


</table>


</div>

)

}