export default function AdminDashboard(){

return(
<div className="space-y-6">

<h1 className="text-3xl font-bold">
Admin Dashboard
</h1>


<div className="grid md:grid-cols-4 gap-5">


<div className="p-6 rounded-xl bg-white shadow">
<h3 className="text-gray-500">
Total Users
</h3>
<p className="text-3xl font-bold">
12,540
</p>
</div>


<div className="p-6 rounded-xl bg-white shadow">
<h3 className="text-gray-500">
AI Agents
</h3>
<p className="text-3xl font-bold">
245
</p>
</div>


<div className="p-6 rounded-xl bg-white shadow">
<h3 className="text-gray-500">
API Requests
</h3>
<p className="text-3xl font-bold">
1.2M
</p>
</div>


<div className="p-6 rounded-xl bg-white shadow">
<h3 className="text-gray-500">
Revenue
</h3>
<p className="text-3xl font-bold">
$24,500
</p>
</div>


</div>


</div>
)

}