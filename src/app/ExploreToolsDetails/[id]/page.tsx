import Image from "next/image";
import Link from "next/link";
import { Star, ArrowLeft, Sparkles } from "lucide-react";


interface Review {
  _id: string;
  user: string;
  comment: string;
  rating: number;
}

interface Tool {
  _id: string;
  title: string;
  category: string;
  description: string;
  overview: string;
  image: string;
  images?: string[];
  price: "Free" | "Premium";
  rating: number;
  featured: boolean;
  capabilities?: string[];
  reviews?: Review[];
}


function RatingStars({ rating }: { rating:number }) {

  return (
    <div className="flex gap-1">

      {
        Array.from({length:5}).map((_,index)=>(

          <Star
            key={index}
            size={20}
            className={
              index < rating
              ? "fill-yellow-400 text-yellow-400"
              : "text-slate-300"
            }
          />

        ))
      }

    </div>
  );

}


async function getTool(id: string): Promise<Tool> {

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/exploreTools/${id}`,
    {
      cache: "no-store",
    }
  );


  if (!res.ok) {
    throw new Error("Failed to fetch tool");
  }


  const data = await res.json();

  return data.data;

}



export default async function ExploreToolDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {


  const { id } = await params;


  console.log("Tool ID:", id);


  const tool = await getTool(id);



return (
<section className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12">

<div className="max-w-6xl mx-auto px-4">


<Link
 href="/Explore"
 className="
 inline-flex items-center gap-2
 text-slate-600
 hover:text-violet-600
 mb-8
 "
>
<ArrowLeft size={18}/>
Back to Explore
</Link>



{/* Main Details */}

<div
className="
grid lg:grid-cols-2
gap-10
bg-white
dark:bg-slate-900
rounded-3xl
p-8
shadow-lg
"
>



{/* Image Gallery */}

<div>

<Image
src={tool.image}
alt={tool.title}
width={700}
height={500}
className="
rounded-2xl
w-full
h-[420px]
object-cover
"
/>



{
tool.images && (

<div className="grid grid-cols-3 gap-3 mt-4">

{
tool.images.map((img,index)=>(

<Image
key={index}
src={img}
alt={tool.title}
width={200}
height={150}
className="
rounded-xl
h-24
object-cover
"
/>

))
}

</div>

)
}


</div>





{/* Info */}

<div className="flex flex-col justify-center">


<div className="flex gap-3 items-center">

<Sparkles className="text-violet-600"/>


<span
className="
bg-violet-100
text-violet-600
px-4 py-1
rounded-full
text-sm
font-semibold
"
>
{tool.category}
</span>


</div>




<h1
className="
text-4xl
font-bold
mt-5
text-slate-900
dark:text-white
"
>
{tool.title}
</h1>




<p
className="
mt-5
text-slate-600
dark:text-slate-300
leading-7
"
>
{tool.description}
</p>





<div className="flex justify-between mt-8">


<div className="flex items-center gap-3">

<RatingStars rating={tool.rating}/>

<span className="font-semibold">
{tool.rating}/5
</span>

</div>




<span
className="
text-xl
font-bold
text-violet-600
"
>
{tool.price}
</span>


</div>





<Link
href={`/ai-tools/${tool._id}`}
className="
mt-8
bg-violet-600
hover:bg-violet-700
text-white
text-center
py-3
rounded-xl
font-semibold
transition
"
>
Use This AI Tool
</Link>



</div>


</div>






{/* Overview */}

<div className="mt-12">


<h2 className="text-3xl font-bold">
Overview
</h2>


<p
className="
mt-4
text-slate-600
dark:text-slate-300
leading-8
"
>
{
tool.overview ||
tool.description
}
</p>


</div>







{/* Specifications */}

<div className="mt-12">


<h2 className="text-3xl font-bold">
Specifications
</h2>



<div
className="
grid
md:grid-cols-3
gap-5
mt-6
"
>


<div
className="
bg-white
dark:bg-slate-900
p-6
rounded-2xl
shadow
"
>

<h3 className="font-semibold">
Category
</h3>

<p className="mt-2">
{tool.category}
</p>


</div>




<div
className="
bg-white
dark:bg-slate-900
p-6
rounded-2xl
shadow
"
>

<h3 className="font-semibold">
Pricing
</h3>

<p className="mt-2">
{tool.price}
</p>


</div>





<div
className="
bg-white
dark:bg-slate-900
p-6
rounded-2xl
shadow
"
>

<h3 className="font-semibold">
Rating
</h3>

<p className="mt-2">
⭐ {tool.rating}
</p>


</div>



</div>


</div>







{/* AI Capabilities */}

<div className="mt-12">


<h2 className="text-3xl font-bold">
AI Capabilities
</h2>


<div className="flex flex-wrap gap-3 mt-5">


{
(tool.capabilities || [
"AI Powered Generation",
"Context Understanding",
"Smart Automation",
"Reasoning Ability"
])
.map((item,index)=>(


<span
key={index}
className="
bg-violet-100
text-violet-700
px-4
py-2
rounded-full
"
>

{item}

</span>


))
}


</div>


</div>





{/* Reviews */}

<div className="mt-12">


<h2 className="text-3xl font-bold">
Reviews
</h2>



<div className="grid gap-5 mt-6">


{
tool.reviews && tool.reviews.length > 0 ?

tool.reviews.map((review)=>(


<div
key={review._id}
className="
bg-white
dark:bg-slate-900
p-6
rounded-2xl
shadow
"
>


<div className="flex justify-between items-center">


<h3 className="font-semibold">
{review.user}
</h3>



<RatingStars 
rating={review.rating}
/>


</div>



<p className="mt-3 text-slate-600 dark:text-slate-300">
{review.comment}
</p>



</div>


))


:

<div
className="
bg-white
dark:bg-slate-900
p-6
rounded-2xl
"
>

No reviews available yet.

</div>


}


</div>



</div>








{/* Related Tools */}

<div className="mt-12">


<h2 className="text-3xl font-bold">
Related AI Tools
</h2>


<div
className="
grid
md:grid-cols-3
gap-6
mt-6
"
>


{
["AI Writer","AI Analyzer","AI Assistant"].map((item,index)=>(


<div
key={index}
className="
bg-white
dark:bg-slate-900
p-6
rounded-2xl
shadow
"
>


<h3 className="font-bold">
{item}
</h3>


<p className="text-sm mt-2 text-slate-500">
Explore this AI solution
</p>


</div>


))
}



</div>


</div>




</div>


</section>
);
}