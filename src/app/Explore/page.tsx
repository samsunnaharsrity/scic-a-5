"use client";

import Image from "next/image";
import Link from "next/link";
import { Search, Star } from "lucide-react";
import { useState, useMemo, useEffect } from "react";
import ToolCardSkeleton from "../components/skeletons/ToolCardSkeleton";


// const tools = [
//   { id: 1, title: "AI Chat Assistant", category: "Productivity", price: "Free", rating: 4.8, image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600" },
//   { id: 2, title: "Content Generator", category: "Writing", price: "Premium", rating: 4.7, image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600" },
//   { id: 3, title: "AI Image Generator", category: "Design", price: "Premium", rating: 4.9, image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=600" },
//   { id: 4, title: "Document Analyzer", category: "Business", price: "Free", rating: 4.6, image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600" },
//   { id: 5, title: "AI Code Helper", category: "Developer", price: "Premium", rating: 4.9, image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600" },
//   { id: 6, title: "Voice Assistant", category: "Productivity", price: "Free", rating: 4.5, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600" },
//   { id: 7, title: "AI Recommendation", category: "Marketing", price: "Premium", rating: 4.8, image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600" },
//   { id: 8, title: "Data Analyzer", category: "Analytics", price: "Premium", rating: 4.7, image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600" },
// ];


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

export default function ExplorePage() {
  const [search, setSearch] = useState("");
  const [priceFilter, setPriceFilter] = useState("All");

  const [tools, setTools] = useState<Tool[]>([]);
const [loading, setLoading] = useState(true);


const [categoryFilter,setCategoryFilter] = useState("All");
const [sort,setSort] = useState("default");

const [currentPage, setCurrentPage] = useState(1);
const toolsPerPage = 8;


useEffect(() => {
  const fetchTools = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/exploreTools`
      );

      const data = await res.json();

if(data.success){
  setTools(data.tools || []);
}else{
  setTools([]);
}
    } catch (error) {
      console.error("Failed to fetch tools:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchTools();
}, []);


const filteredTools = useMemo(()=>{

let result = (tools || []).filter((tool)=>{
const searchMatch =
tool.title
.toLowerCase()
.includes(search.toLowerCase());


const priceMatch =
priceFilter==="All" ||
tool.price===priceFilter;


const categoryMatch =
categoryFilter==="All" ||
tool.category===categoryFilter;



return searchMatch && priceMatch && categoryMatch;


});



if(sort==="rating"){
result.sort((a,b)=>b.rating-a.rating);
}


if(sort==="name"){
result.sort((a,b)=>a.title.localeCompare(b.title));
}


return result;


},[
tools,
search,
priceFilter,
categoryFilter,
sort
]);



const totalPages = Math.ceil(filteredTools.length / toolsPerPage);

const paginatedTools = filteredTools.slice(
  (currentPage - 1) * toolsPerPage,
  currentPage * toolsPerPage
);

useEffect(() => {
  setCurrentPage(1);
}, [search, priceFilter, categoryFilter, sort]);



const totalTools = filteredTools.length;

if (loading) {
  return (
    <section className="bg-slate-50 dark:bg-slate-950 min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, index) => (
            <ToolCardSkeleton key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

return (
    <section className="bg-slate-50 dark:bg-slate-950 min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
<div className="mb-10 text-center">
  <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
    Explore AI Tools
  </h1>

  <p className="mt-2 text-slate-500">
    Discover the best AI tools and intelligent agents.
  </p>

  {/* Dynamic Length */}
  <div className="mt-5 inline-flex items-center gap-2 
    bg-violet-100 dark:bg-violet-900/30 
    px-6 py-3 rounded-full">

    <span className="text-2xl font-bold text-violet-600">
      {totalTools}
    </span>

    <span className="text-slate-600 dark:text-slate-300">
      {priceFilter === "All"
        ? "AI Tools Available"
        : `${priceFilter} Tools Available`}
    </span>

  </div>

</div>

        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-10">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search AI tools..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-12 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 pl-11 pr-4 outline-none"
            />
          </div>

          <div className="flex gap-2">
            {["All", "Free", "Premium"].map((p) => (
              <button
                key={p}
                onClick={() => setPriceFilter(p)}
                className={`px-6 py-3 rounded-xl border ${priceFilter === p ? "bg-violet-600 text-white border-violet-600" : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700"}`}
              >
                {p}
              </button>
            ))}
          </div>

          {/* Category Filter */}

<select

value={categoryFilter}

onChange={(e)=>setCategoryFilter(e.target.value)}

className="
px-5
py-3
rounded-xl
bg-white
dark:bg-slate-900
border
border-slate-200
"

>

<option value="All">
All Category
</option>

<option value="Productivity">
Productivity
</option>

<option value="Writing">
Writing
</option>

<option value="Analytics">
Analytics
</option>

<option value="Developer">
Developer
</option>

</select>





{/* Sorting */}

<select

value={sort}

onChange={(e)=>setSort(e.target.value)}

className="
px-5
py-3
rounded-xl
bg-white
dark:bg-slate-900
border
border-slate-200
"

>

<option value="default">
Sort By
</option>

<option value="rating">
Highest Rating
</option>

<option value="name">
Name A-Z
</option>


</select>
        </div>

        {/* Cards Grid (No Sidebar) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {paginatedTools.length === 0 ? (
  <div className="col-span-full text-center py-20">
    <h2 className="text-2xl font-bold">
      No AI Tools Found
    </h2>

    <p className="text-slate-500 mt-2">
      Try changing your search or filters.
    </p>
  </div>
) : (
          paginatedTools.map((tool) => (
            <div key={tool._id} className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl duration-300">
              <Image src={tool.image} alt={tool.title} width={500} height={300} className="h-44 w-full object-cover" />
              <div className="p-5">
                <h2 className="font-semibold text-lg">{tool.title}</h2>
                <p className="text-sm text-slate-500 mt-1">{tool.category}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="flex items-center gap-1 text-sm">
                    <Star size={16} className="fill-yellow-400 text-yellow-400" />
                    {tool.rating}
                  </span>
                  <span className="text-violet-600 font-semibold">{tool.price}</span>
                </div>
                <Link href={`/ExploreToolsDetails/${tool._id}`} className="block mt-5 rounded-xl bg-violet-600 text-center py-2.5 text-white hover:bg-violet-700 transition">
                  View Details
                </Link>
              </div>
            </div>
          ))
)}
        </div>



        {/* Pagination */}

{totalPages > 1 && (
  <div className="flex justify-center items-center gap-2 mt-10 flex-wrap">

    <button
      onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
      disabled={currentPage === 1}
      className="px-4 py-2 rounded-lg border bg-white dark:bg-slate-900 disabled:opacity-50"
    >
      Previous
    </button>

    {Array.from({ length: totalPages }).map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrentPage(index + 1)}
        className={`w-10 h-10 rounded-lg transition ${
          currentPage === index + 1
            ? "bg-violet-600 text-white"
            : "bg-white dark:bg-slate-900 border"
        }`}
      >
        {index + 1}
      </button>
    ))}

    <button
      onClick={() =>
        setCurrentPage((p) => Math.min(p + 1, totalPages))
      }
      disabled={currentPage === totalPages}
      className="px-4 py-2 rounded-lg border bg-white dark:bg-slate-900 disabled:opacity-50"
    >
      Next
    </button>

  </div>
)}
      </div>
    </section>
  );
}