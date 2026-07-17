import Image from "next/image";
import Link from "next/link";
import { Star, ArrowLeft, Sparkles } from "lucide-react";


interface Tool {
  _id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  price: "Free" | "Premium";
  rating: number;
  featured: boolean;
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



        <div
          className="
          grid md:grid-cols-2
          gap-10
          bg-white dark:bg-slate-900
          rounded-3xl
          p-8
          shadow-lg
          "
        >


          <Image
            src={tool.image}
            alt={tool.title}
            width={700}
            height={500}
            className="
            rounded-2xl
            w-full
            h-[400px]
            object-cover
            "
          />



          <div className="flex flex-col justify-center">


            <div className="flex items-center gap-2 mb-4">

              <Sparkles className="text-violet-600"/>

              <span className="
              bg-violet-100
              text-violet-600
              px-4 py-1
              rounded-full
              text-sm
              font-semibold
              ">
                {tool.category}
              </span>

            </div>



            <h1 className="
            text-4xl
            font-bold
            text-slate-900
            dark:text-white
            ">
              {tool.title}
            </h1>



            <p className="
            mt-5
            text-slate-600
            dark:text-slate-300
            ">
              {tool.description}
            </p>



            <div className="
            flex justify-between
            items-center
            mt-8
            ">


              <span className="flex items-center gap-2">

                <Star
                size={20}
                className="fill-yellow-400 text-yellow-400"
                />

                {tool.rating}

              </span>



              <span className="
              text-xl
              font-bold
              text-violet-600
              ">
                {tool.price}
              </span>


            </div>



<Link
 href={`/ai-tools/${tool.title
 .toLowerCase()
 .replaceAll(" ","-")}`}
 className="
 mt-8
 block
 text-center
 bg-violet-600
 text-white
 py-3
 rounded-xl
 hover:bg-violet-700
 "
>
 Use This AI Tool
</Link>


          </div>


        </div>


      </div>

    </section>
  );
}