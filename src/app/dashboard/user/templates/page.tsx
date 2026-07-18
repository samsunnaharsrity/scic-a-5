export default function Templates(){

const templates=[
"Blog Generator",
"Email Writer",
"Product Description",
"Resume Builder"
]


return (

<div>

<h1 className="text-3xl font-bold">
AI Templates
</h1>


<div className="grid md:grid-cols-4 gap-5 mt-6">

{
templates.map(t=>

<div
className="border rounded-xl p-5"
key={t}
>

<h3>{t}</h3>

<button className="mt-3 text-primary">
Use Template
</button>

</div>

)
}

</div>

</div>

)

}